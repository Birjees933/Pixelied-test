import { singleColors } from "@/constants/data";
import { ColorInfo, ColorShade, ColorShades, HSL, RGB } from "@/types/common";
import { COLORS_MODES } from "@/types/enums";

export const getTextColor = (hexColor: string) => {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF";
};

export function convertColor(
  hexColor: string,
  type: COLORS_MODES,
  alpha: number = 1
): string {
  // Normalize hex color (handle shorthand like #f00)
  let hex = hexColor.startsWith("#") ? hexColor.substring(1) : hexColor;

  // Convert shorthand (#f00) to full form (#ff0000)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Ensure alpha is in valid range
  alpha = Math.max(0, Math.min(1, alpha));

  switch (type) {
    case "rgb":
      return `${r}, ${g}, ${b}`;

    case "rgba":
      return `${r}, ${g}, ${b}, ${alpha}`;

    case "hsl": {
      const r1 = r / 255;
      const g1 = g / 255;
      const b1 = b / 255;

      const max = Math.max(r1, g1, b1);
      const min = Math.min(r1, g1, b1);

      let h = 0,
        s = 0,
        l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r1:
            h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
            break;
          case g1:
            h = (b1 - r1) / d + 2;
            break;
          case b1:
            h = (r1 - g1) / d + 4;
            break;
        }

        h /= 6;
      }

      // Convert to degrees and percentages
      h = Math.round(h * 360);
      s = Math.round(s * 100);
      l = Math.round(l * 100);

      return `${h}, ${s}%, ${l}%`;
    }

    case "hsb": {
      const r1 = r / 255;
      const g1 = g / 255;
      const b1 = b / 255;

      const max = Math.max(r1, g1, b1);
      const min = Math.min(r1, g1, b1);

      let h = 0;
      const v = max;
      const d = max - min;
      let s = max === 0 ? 0 : d / max;

      if (max !== min) {
        switch (max) {
          case r1:
            h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
            break;
          case g1:
            h = (b1 - r1) / d + 2;
            break;
          case b1:
            h = (r1 - g1) / d + 4;
            break;
        }

        h /= 6;
      }

      // Convert to degrees and percentages
      h = Math.round(h * 360);
      s = Math.round(s * 100);
      const b2 = Math.round(v * 100);

      return `${h}, ${s}%, ${b2}%`;
    }

    case "html": {
      const normalizedHex = `#${hex.toLowerCase()}`;
      return normalizedHex;
    }

    default:
      return hexColor;
  }
}

export function convertToHex(
  colorValue: string,
  colorMode: COLORS_MODES
): string | null {
  // Trim whitespace
  colorValue = colorValue.trim();

  switch (colorMode) {
    case COLORS_MODES.HTML:
    case COLORS_MODES.HEX: {
      // If it doesn't start with #, add it
      if (!colorValue.startsWith("#")) {
        colorValue = "#" + colorValue;
      }

      // Check if valid hex color
      const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
      if (!hexRegex.test(colorValue)) {
        return null;
      }

      // Convert shorthand (#abc) to full form (#aabbcc)
      if (colorValue.length === 4) {
        colorValue =
          "#" +
          colorValue[1] +
          colorValue[1] +
          colorValue[2] +
          colorValue[2] +
          colorValue[3] +
          colorValue[3];
      }

      return colorValue.toLowerCase();
    }

    case COLORS_MODES.RGB:
    case COLORS_MODES.RGBA: {
      let r: number,
        g: number,
        b: number,
        a: number = 1;

      // Check if it's in the format "rgb(r,g,b)" or "rgba(r,g,b,a)"
      const rgbRegex =
        /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i;
      const rgbMatch = colorValue.match(rgbRegex);

      if (rgbMatch) {
        r = parseInt(rgbMatch[1], 10);
        g = parseInt(rgbMatch[2], 10);
        b = parseInt(rgbMatch[3], 10);
        if (rgbMatch[4]) {
          a = parseFloat(rgbMatch[4]);
        }
      } else {
        // Try simpler format like "255, 255, 255" or "255 255 255"
        const values = colorValue
          .split(/[\s,]+/)
          .filter((val) => val.trim() !== "");

        if (values.length < 3 || values.length > 4) {
          return null;
        }

        r = parseInt(values[0], 10);
        g = parseInt(values[1], 10);
        b = parseInt(values[2], 10);
        if (values.length === 4) {
          a = parseFloat(values[3]);
        }
      }

      // Validate RGB values
      if (
        isNaN(r) ||
        isNaN(g) ||
        isNaN(b) ||
        isNaN(a) ||
        r < 0 ||
        r > 255 ||
        g < 0 ||
        g > 255 ||
        b < 0 ||
        b > 255 ||
        a < 0 ||
        a > 1
      ) {
        return null;
      }

      // Convert to hex
      return (
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("")
      );
    }

    case COLORS_MODES.HSL: {
      let h: number, s: number, l: number;

      // Check if it's in the format "hsl(h,s%,l%)"
      const hslRegex = /^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/i;
      const hslMatch = colorValue.match(hslRegex);

      if (hslMatch) {
        h = parseInt(hslMatch[1], 10);
        s = parseInt(hslMatch[2], 10);
        l = parseInt(hslMatch[3], 10);
      } else {
        // Try simpler format like "0, 100%, 50%" or "0 100% 50%" or even "0, 100, 50"
        const values = colorValue
          .split(/[\s,]+/)
          .filter((val) => val.trim() !== "");

        if (values.length !== 3) {
          return null;
        }

        h = parseInt(values[0], 10);
        // Remove % sign if present
        s = parseInt(values[1].replace("%", ""), 10);
        l = parseInt(values[2].replace("%", ""), 10);
      }

      // Validate HSL values
      h = ((h % 360) + 360) % 360; // Normalize hue to 0-359
      if (
        isNaN(h) ||
        isNaN(s) ||
        isNaN(l) ||
        s < 0 ||
        s > 100 ||
        l < 0 ||
        l > 100
      ) {
        return null;
      }

      // Convert HSL to RGB
      s /= 100;
      l /= 100;

      const hueToRgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const r = Math.round(hueToRgb(p, q, h / 360 + 1 / 3) * 255);
      const g = Math.round(hueToRgb(p, q, h / 360) * 255);
      const b = Math.round(hueToRgb(p, q, h / 360 - 1 / 3) * 255);

      // Convert to hex
      return (
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("")
      );
    }

    case COLORS_MODES.HSB: {
      let h: number, s: number, v: number;

      // Check if it's in the format "hsb(h,s%,b%)" or "hsv(h,s%,v%)"
      const hsbRegex = /^hs[bv]\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/i;
      const hsbMatch = colorValue.match(hsbRegex);

      if (hsbMatch) {
        h = parseInt(hsbMatch[1], 10);
        s = parseInt(hsbMatch[2], 10);
        v = parseInt(hsbMatch[3], 10);
      } else {
        // Try simpler format like "0, 100%, 100%" or "0 100% 100%" or even "0, 100, 100"
        const values = colorValue
          .split(/[\s,]+/)
          .filter((val) => val.trim() !== "");

        if (values.length !== 3) {
          return null;
        }

        h = parseInt(values[0], 10);
        // Remove % sign if present
        s = parseInt(values[1].replace("%", ""), 10);
        v = parseInt(values[2].replace("%", ""), 10);
      }

      // Validate HSB/HSV values
      h = ((h % 360) + 360) % 360; // Normalize hue to 0-359
      if (
        isNaN(h) ||
        isNaN(s) ||
        isNaN(v) ||
        s < 0 ||
        s > 100 ||
        v < 0 ||
        v > 100
      ) {
        return null;
      }

      // Convert HSB/HSV to RGB
      s /= 100;
      v /= 100;

      const hi = Math.floor((h / 60) % 6);
      const f = h / 60 - hi;
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);

      let r = 0,
        g = 0,
        b = 0;

      switch (hi) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }

      // Convert to hex
      return (
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("")
      );
    }

    default:
      return null;
  }
}

export function generateColorShades(colorName: string): ColorShades {
  const baseColor: ColorInfo | undefined = singleColors.find(
    (color) => color.name.toLowerCase() === colorName.toLowerCase()
  );

  if (!baseColor) {
    throw new Error(
      `Color "${colorName}" not found in the available colors list.`
    );
  }

  const baseHex: string = baseColor.hex;
  const baseRGB: RGB = hexToRgb(baseHex);
  const shades: ColorShades = [];

  for (let i = 0; i < 50; i++) {
    const baseModifier: number = (i + 1) / 25;
    const randomFactor: number = 0.5 + Math.random();
    const modifier: number = baseModifier * randomFactor;
    const numColors: number = Math.floor(Math.random() * 6) + 5;
    const shadeColors: ColorShade = [];
    const shadeType: number = i % 5;
    const variantHue: number = Math.random() * 30 - 15;
    const variantSaturation: number = 0.7 + Math.random() * 0.6;
    const variantBrightness: number = 0.8 + Math.random() * 0.4;

    for (let j = 0; j < numColors; j++) {
      const rawPosition: number = j / (numColors - 1);
      const position: number = Math.pow(rawPosition, 0.9 + Math.random() * 0.2);
      let r: number, g: number, b: number;

      if (shadeType === 0) {
        r = Math.round(baseRGB.r * position * modifier * variantBrightness);
        g = Math.round(baseRGB.g * position * modifier * variantBrightness);
        b = Math.round(baseRGB.b * position * modifier * variantBrightness);

        const hsl = rgbToHsl(r, g, b);
        hsl.h = (hsl.h + variantHue * position) % 360;
        hsl.s = Math.min(1, hsl.s * variantSaturation);
        const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
        r = rgb.r;
        g = rgb.g;
        b = rgb.b;
      } else if (shadeType === 1) {
        const avg: number = (baseRGB.r + baseRGB.g + baseRGB.b) / 3;
        const saturationFactor = 1 - position * modifier * 0.8;

        r = Math.round(
          avg + (baseRGB.r - avg) * saturationFactor * variantSaturation
        );
        g = Math.round(
          avg + (baseRGB.g - avg) * saturationFactor * variantSaturation
        );
        b = Math.round(
          avg + (baseRGB.b - avg) * saturationFactor * variantSaturation
        );
      } else if (shadeType === 2) {
        const whiteFactor = position * modifier * 0.9;
        r = Math.round(baseRGB.r + (255 - baseRGB.r) * whiteFactor);
        g = Math.round(baseRGB.g + (255 - baseRGB.g) * whiteFactor);
        b = Math.round(baseRGB.b + (255 - baseRGB.b) * whiteFactor);

        const hsl = rgbToHsl(r, g, b);
        hsl.h = (hsl.h + variantHue * (1 - position)) % 360;
        const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
        r = rgb.r;
        g = rgb.g;
        b = rgb.b;
      } else if (shadeType === 3) {
        const blackFactor = 1 - position * modifier * 0.7;
        r = Math.round(baseRGB.r * blackFactor * variantBrightness);
        g = Math.round(baseRGB.g * blackFactor * variantBrightness);
        b = Math.round(baseRGB.b * blackFactor * variantBrightness);
      } else {
        const useComplement = i % 2 === 0;

        let mixColor: RGB;
        if (useComplement) {
          mixColor = getComplementary(baseRGB);
        } else {
          const hsl = rgbToHsl(baseRGB.r, baseRGB.g, baseRGB.b);
          hsl.h = (hsl.h + 30 + Math.random() * 30) % 360;
          mixColor = hslToRgb(hsl.h, hsl.s, hsl.l);
        }

        const mixFactor = position * modifier * variantSaturation;
        r = Math.round(baseRGB.r + (mixColor.r - baseRGB.r) * mixFactor);
        g = Math.round(baseRGB.g + (mixColor.g - baseRGB.g) * mixFactor);
        b = Math.round(baseRGB.b + (mixColor.b - baseRGB.b) * mixFactor);
      }

      r = Math.min(255, Math.max(0, r));
      g = Math.min(255, Math.max(0, g));
      b = Math.min(255, Math.max(0, b));

      const jitter = Math.floor(Math.random() * 5) - 2;
      r = Math.min(255, Math.max(0, r + jitter));
      g = Math.min(255, Math.max(0, g + jitter));
      b = Math.min(255, Math.max(0, b + jitter));

      const hexColor = rgbToHex(r, g, b);

      if (!shadeColors.includes(hexColor)) {
        shadeColors.push(hexColor);
      } else {
        const altR = Math.min(
          255,
          Math.max(0, r + Math.floor(Math.random() * 10) - 5)
        );
        const altG = Math.min(
          255,
          Math.max(0, g + Math.floor(Math.random() * 10) - 5)
        );
        const altB = Math.min(
          255,
          Math.max(0, b + Math.floor(Math.random() * 10) - 5)
        );
        shadeColors.push(rgbToHex(altR, altG, altB));
      }
    }

    shadeColors.sort((a, b) => {
      const aRgb = hexToRgb(a);
      const bRgb = hexToRgb(b);

      const aBrightness = aRgb.r + aRgb.g + aRgb.b;
      const bBrightness = bRgb.r + bRgb.g + bRgb.b;

      if (shadeType === 3) {
        return bBrightness - aBrightness;
      }

      return aBrightness - bBrightness;
    });

    shades.push(shadeColors);
  }

  return shades;
}

function hexToRgb(hex: string): RGB {
  hex = hex.replace(/^#/, "");

  const r: number = parseInt(hex.substring(0, 2), 16);
  const g: number = parseInt(hex.substring(2, 4), 16);
  const b: number = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function getComplementary(rgb: RGB): RGB {
  return {
    r: 255 - rgb.r,
    g: 255 - rgb.g,
    b: 255 - rgb.b,
  };
}

function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return { h: h * 360, s, l };
}

function hueToRgb(p: number, q: number, t: number): number {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h: number, s: number, l: number): RGB {
  h /= 360;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}
