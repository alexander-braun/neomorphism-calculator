import React from 'react';
import './style/styles.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="calc-button" id="display">
          <div id="setting-indicator">- 10</div>
          <div id="result">123456</div>
        </div>
        <div className="calc-button" id="ac-button">AC</div>
        <div className="calc-button" id="ce-button">CE</div>
        <div className="calc-button" id="percentage-button">%</div>
        <div className="calc-button" id="divide-button">/</div>
        <div className="calc-button" id="seven-button">7</div>
        <div className="calc-button" id="eight-button">8</div>
        <div className="calc-button" id="nine-button">9</div>
        <div className="calc-button" id="multiply-button">*</div>
        <div className="calc-button" id="four-button">4</div>
        <div className="calc-button" id="five-button">5</div>
        <div className="calc-button" id="six-button">6</div>
        <div className="calc-button" id="minus-button">-</div>
        <div className="calc-button" id="one-button">1</div>
        <div className="calc-button" id="two-button">2</div>
        <div className="calc-button" id="three-button">3</div>
        <div className="calc-button" id="plus-button">+</div>
        <div className="calc-button" id="zero-button">0</div>
        <div className="calc-button" id="dot-button">.</div>
        <div className="calc-button" id="equals-button">=</div>
      </div>
    </div>
  );
}

export default App;
