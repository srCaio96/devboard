import { TinyColor } from "@ctrl/tinycolor";

export function adjustColor(color: string, amount: number) {
  return new TinyColor(color).darken(amount).toString();
};