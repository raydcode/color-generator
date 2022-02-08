import React, { useState } from 'react';
import Color from './Color';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#F1D00A').all(20));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(20);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="your color"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Change
          </button>
        </form>
      </section>
      {/* color */}
      <section className="colors">
        {list.map((item, index) => {
          return (
            <Color key={index} {...item} index={index} hexColor={item.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
