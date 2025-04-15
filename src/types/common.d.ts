export type OptionsType = {
  label: string;
  value: string;
};

interface ColorInfo {
  name: string;
  hex: string;
  slug: string;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number; // 0-360
  s: number; // 0-1
  l: number; // 0-1
}

type ColorShade = string[];

type ColorShades = ColorShade[];
