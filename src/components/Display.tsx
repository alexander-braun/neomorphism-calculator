import React from 'react';

interface FooProp {
  result: Number,
  chain: String[]
}

export const Display = (props: FooProp) => {
  return (
    <div className="calc-button" id="display">
        <div id="setting-indicator">
          {
            [...props.chain].join('')
          }
        </div>
        <div id="result">{props.result}</div>
    </div>
  );
}
