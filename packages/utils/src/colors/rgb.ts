import {RGB, RGBShort} from './types';

/**
 * Returns true in case, passed value has #RGB format.
 * @param value - value to check.
 */
function isRGBShort(value: string): value is RGBShort {
  return /^#[\da-f]{3}$/i.test(value);
}

/**
 * Returns true in case, passed value has #RRGGBB format.
 * @param value - value to check.
 */
function isRGB(value: string): value is RGB {
  return /^#[\da-f]{6}$/i.test(value);
}

/**
 * Converts passed value to #RRGGBB format. Accepts such color formats:
 * - #RGB
 * - #RRGGBB
 * - rgb(1,2,3)
 * - rgba(1,2,3,4)
 * @param value - value to convert.
 * @throws {SyntaxError} Passed value does not contain any of known RGB formats.
 */
function toRGB(value: string): RGB {
  // Remove all spaces.
  const clean = value.replace(/\s/g, '');

  // Value already has required format.
  if (isRGB(clean)) {
    return clean;
  }

  // Convert from #RGB.
  if (isRGBShort(clean)) {
    let color = '#';

    for (let i = 0; i < 3; i++) {
      color += clean[1 + i].repeat(2);
    }
    return color as RGB;
  }

  // Example valid values: rgb(0,3,10) rgba(32,114,8,0)
  const match = clean.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)
    || clean.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);

  // In case, this didn't work as well, we can't extract RGB color from passed
  // text.
  if (match === null) {
    throw new SyntaxError(`Value "${value}" does not match any of known RGB formats.`);
  }

  // Otherwise, take R, G and B components, convert to hex and create #RRGGBB
  // string.
  return match.slice(1).reduce((acc, component) => {
    const formatted = parseInt(component).toString(16);
    return acc + (formatted.length === 1 ? '0' : '') + formatted;
  }, '#') as RGB;
}

export {isRGB, toRGB, isRGBShort};