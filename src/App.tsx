import React, { MouseEvent, useState } from 'react';
import './style/styles.css';
import { Display } from './components/Display'



export default function App(): JSX.Element {

  const [chain, updateChain] = useState<String[]>([])
  const [currentOperator, setCurrentOperator] = useState<String>()
  const [result, setResult] = useState<Number>(0)
  const [role, setRole] = useState<String>()

  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    const value: string | undefined = target.dataset.value
    const role: strin | undefined = target.dataset.role
    const lastEl: String = chain[chain.length - 1]
    const addUpChain: String[] = [...chain, value]

    if(value !== undefined) {

    }
  }
  console.log(chain)
  return (
    <div className="App">
      <div className="calculator">
        <Display />
        <div onClick={handleClick} className="calc-button" id="ac-button" data-role="operator" data-value="ac">AC</div>
        <div onClick={handleClick} className="calc-button" id="ce-button" data-role="operator" data-value="ce">CE</div>
        <div onClick={handleClick} className="calc-button" id="percentage-button" data-role="operator" data-value="%">%</div>
        <div onClick={handleClick} className="calc-button" id="divide-button" data-role="operator" data-value="/">/</div>
        <div onClick={handleClick} className="calc-button" id="multiply-button" data-role="operator" data-value="*">*</div>
        <div onClick={handleClick} className="calc-button" id="minus-button" data-role="operator" data-value="-">-</div>
        <div onClick={handleClick} className="calc-button" id="plus-button" data-role="operator" data-value="+">+</div>
        <div onClick={handleClick} className="calc-button" id="dot-button" data-role="dot" data-value=".">.</div>
        <div onClick={handleClick} className="calc-button" id="equals-button" data-role="operator" data-value="=">=</div>
        {
          [...Array(10).keys()].map(number => {
            return <div key={`calc-button-${number}`} onClick={handleClick} className="calc-button" data-role="number" data-value={number}>{number}</div>
          })
        }
      </div>
    </div>
  );
}
