import Vibrant from '@vibrant/vibrant';
import fetch from 'node-fetch';

// Recreate the color generator logic here for testing
const CONTRAST_RATIO = 4.5;
const COLOR_SIMILARITY_THRESHOLD = 150;

const luminance = (r, g, b) => {
  const a = [r, g, b].map((v) => {
    let w = v;
    w /= 255;
    return w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const contrast = (rgb1, rgb2) => {
  const lum1 = luminance(...rgb1);
  const lum2 = luminance(...rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

const getContrastRatio = (rgb1, rgb2) => Math.round((contrast(rgb1, rgb2) + Number.EPSILON) * 100) / 100;

const colorGenerator = (colors) => {
  if (!colors.length) return ['#ffffff', '#000000'];
  
  // Sort by population to get the most dominant color
  colors.sort((colorA, colorB) => colorB.population - colorA.population);
  const dominantColor = colors[0];

  // Function to check contrast between any two colors
  const getContrastBetween = (rgb1, rgb2) => getContrastRatio(rgb1, rgb2);

  // Function to find best contrasting pair
  const findContrastingPair = () => {
    let bestBgColor = dominantColor;
    let bestFgColor = dominantColor;
    let bestContrast = 0;

    // If we only have one color, create variations
    if (colors.length === 1) {
      const variations = [
        // Darker version
        new dominantColor.constructor([
          Math.max(0, dominantColor.rgb[0] - 50),
          Math.max(0, dominantColor.rgb[1] - 50),
          Math.max(0, dominantColor.rgb[2] - 50)
        ], 0),
        // Lighter version
        new dominantColor.constructor([
          Math.min(255, dominantColor.rgb[0] + 50),
          Math.min(255, dominantColor.rgb[1] + 50),
          Math.min(255, dominantColor.rgb[2] + 50)
        ], 0),
        // Pure black and white as fallbacks
        new dominantColor.constructor([0, 0, 0], 0),
        new dominantColor.constructor([255, 255, 255], 0)
      ];
      colors.push(...variations);
    }

    // Try all possible color combinations from the palette
    for (let i = 0; i < colors.length; i++) {
      for (let j = 0; j < colors.length; j++) {
        if (i === j) continue;

        const contrast = getContrastBetween(colors[i].rgb, colors[j].rgb);
        if (contrast > bestContrast) {
          bestContrast = contrast;
          // Use the darker color as background for better readability
          if (luminance(...colors[i].rgb) < luminance(...colors[j].rgb)) {
            bestBgColor = colors[i];
            bestFgColor = colors[j];
          } else {
            bestBgColor = colors[j];
            bestFgColor = colors[i];
          }
        }
      }
    }

    // If we couldn't find good contrast, fall back to black/white
    if (bestContrast < CONTRAST_RATIO) {
      bestFgColor = new dominantColor.constructor(
        dominantColor.getYiq() < 200 ? [255, 255, 255] : [0, 0, 0],
        0
      );
    }

    return [bestFgColor.rgb, bestBgColor.rgb];
  };

  const [fgRgb, bgRgb] = findContrastingPair();
  return [
    new dominantColor.constructor(fgRgb, 0).hex,
    new dominantColor.constructor(bgRgb, 0).hex
  ];
};

const testImage = async () => {
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/51/KBTV-TV_Fox_4_logo.png';
  
  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    
    const vibrant = new Vibrant(Buffer.from(buffer));
    const palette = await vibrant.getPalette();
    
    console.log('Extracted colors:');
    Object.entries(palette).forEach(([name, swatch]) => {
      if (swatch) {
        console.log(`${name}:`, {
          rgb: swatch.rgb,
          population: swatch.population,
          hex: swatch.hex
        });
      }
    });

    // Get colors using our generator
    const colors = Object.values(palette).filter(Boolean);
    const [fgColor, bgColor] = colorGenerator(colors);
    
    console.log('\nGenerated colors:');
    console.log('Foreground:', fgColor);
    console.log('Background:', bgColor);
    
    // Print contrast ratio
    const fgRgb = colors.find(c => c.hex === fgColor)?.rgb;
    const bgRgb = colors.find(c => c.hex === bgColor)?.rgb;
    if (fgRgb && bgRgb) {
      console.log('Contrast ratio:', getContrastRatio(fgRgb, bgRgb));
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

testImage();