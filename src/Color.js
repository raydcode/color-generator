import React, { useState, useEffect } from 'react';

import rgbToHex from './utils/colorConvertor';

function Color({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}

export default Color;
