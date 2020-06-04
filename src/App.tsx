import React, { MouseEvent, useState } from 'react';
import './style/styles.css';
import { Display } from './components/Display'
const { evaluate, format } = require('mathjs')

export default function App(): JSX.Element {

  const [chain, updateChain] = useState<string[]>([])
  const [result, setResult] = useState<number>(0)

  const handleClick = (e: MouseEvent):void => {
    const target = e.currentTarget as HTMLButtonElement;
    const value: string | undefined = target.dataset.value
    const role: string | undefined = target.dataset.role
    const lastEl: string = chain[chain.length - 1]

    if(value !== undefined) {

      /**
       * Case: AC
       * Delete the chain and set back the result
       */
      if(value === 'ac') {
        updateChain([])
        setResult(0)
        return
      }

      /**
       * Case: CE
       * Delete last element in chain
       */
      if(value === 'ce') {
        let chainCopy: string[] = [...chain]
        chainCopy.pop()
        updateChain(chainCopy)
        return
      }

      /**
       * Case: Number or operator
       * Add number/operator to chain 
       */
      if(role === 'number' || role === 'operator') {

        /**
         * Case: last Element was already an operator
         * Remove last Element and add new value
         */
        if(role === 'operator' && (lastEl === '-' || lastEl === '+' || lastEl === '*' || lastEl === '/')) {
          const tempChain: string[] = [...chain]
          tempChain.pop()
          updateChain([...tempChain, value])
          return
        }
        updateChain([...chain, value])
        return
      }

      /**
       * Case: Equals
       * Calculate and update result, reset chain
       */
      if(role === 'result') {

        /**
         * eslint-disable-next-line no-eval
         */
        const tempResult: number = chain.length !== 0 ? format(evaluate(chain.join('')), {precision: 14}) : 0
        setResult(tempResult)
        updateChain([tempResult.toString()])
        return
      }

      /**
       * Case: Dot
       * Add dot to chain
       */
      if(role === 'dot') {
        updateChain([...chain, value])
      }
    }
  }

  return (
    <div className="app">
      <div className="calculator">
        <Display result={result} chain={chain} />
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--ac-button" data-role="delete" data-value="ac">AC</div>
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--ce-button" data-role="delete" data-value="ce">CE</div>
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--divide-button" data-role="operator" data-value="/">/</div>
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--multiply-button" data-role="operator" data-value="*">*</div>
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--minus-button" data-role="operator" data-value="-">-</div>
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--plus-button" data-role="operator" data-value="+">+</div>
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--dot-button" data-role="dot" data-value=".">.</div>
        <div onClick={handleClick} className="calculator__calc-button calculator__calc-button--equals-button" data-role="result" data-value="=">=</div>
        {
          [...Array(10).keys()].map(number => {
            return <div key={`calc-button-${number}`} onClick={handleClick} className="calculator__calc-button" data-role="number" data-value={number}>{number}</div>
          })
        }
      </div>
    </div>
  );
}
