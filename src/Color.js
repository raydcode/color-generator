import React from 'react';

import rgbToHex from './utils/colorConvertor';

function Color({ rgb, weight, index, hexColor }) {
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hex}</p>
    </article>
  );
}

export default Color;
