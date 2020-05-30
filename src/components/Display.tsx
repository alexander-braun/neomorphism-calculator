import React from 'react';

interface Props {
  
}

export const Display = () => {
  return (
    <div className="calc-button" id="display">
        <div id="setting-indicator">- 10</div>
        <div id="result">123456</div>
    </div>
  );
}
