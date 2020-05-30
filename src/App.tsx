import React, { MouseEvent, useState } from 'react';
import './style/styles.css';
import { Display } from './components/Display'



export default function App(): JSX.Element {

  const [chain, updateChain] = useState<String[]>([])
  const [result, setResult] = useState<String>('')

  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    const value: string | undefined = target.dataset.value
    const lastEl: String = chain[chain.length - 1]

    if(value !== undefined) {

      if(value === 'ac') {
        updateChain([])
        return
      } else if(value === 'ce') {
        chain.length > 0 && updateChain([...chain.pop()])
        return
      }

      if(value === '+' || value === '-' || value === '/' || value === '*' || value === '%') {
        if(lastEl === '+' || lastEl === '-' || lastEl === '/' || lastEl === '*' || lastEl === '%') {
          const addUpChain = [...[...chain].pop(), value]
          updateChain(addUpChain)
          return
        } else {
          const addUpChain: String[] = [...chain, value]
          updateChain(addUpChain)
        }
      }
    }
  }
  console.log(chain)
  return (
    <div className="App">
      <div className="calculator">
        <Display />
        <div onClick={handleClick} className="calc-button" id="ac-button" data-value="ac">AC</div>
        <div onClick={handleClick} className="calc-button" id="ce-button" data-value="ce">CE</div>
        <div onClick={handleClick} className="calc-button" id="percentage-button" data-value="%">%</div>
        <div onClick={handleClick} className="calc-button" id="divide-button" data-value="/">/</div>
        <div onClick={handleClick} className="calc-button" id="multiply-button" data-value="*">*</div>
        <div onClick={handleClick} className="calc-button" id="minus-button" data-value="-">-</div>
        <div onClick={handleClick} className="calc-button" id="plus-button" data-value="+">+</div>
        <div onClick={handleClick} className="calc-button" id="dot-button" data-value=".">.</div>
        <div onClick={handleClick} className="calc-button" id="equals-button" data-value="=">=</div>
        {
          [...Array(10).keys()].map(number => {
            return <div key={`calc-button-${number}`} onClick={handleClick} className="calc-button" data-value={number}>{number}</div>
          })
        }
      </div>
    </div>
  );
}
