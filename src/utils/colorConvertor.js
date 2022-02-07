function hexColor(clr) {
  let hex = clr.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return `#${hexColor(r)}${hexColor(g)}${hexColor(b)}`;
}

export default rgbToHex;
