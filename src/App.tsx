import React, { MouseEvent, useState } from 'react';
import './style/styles.css';
import { Display } from './components/Display'

function calc(n1: number, n2: number, operator: String): number {
  if(operator === '+') return n1 + n2
  if(operator === '-') return n1 - n2
  if(operator === '/') return n1 / n2
  else return n1 * n2
}

function calculatePercentage(chain: [number, string, number]): number {
  const op: string = chain[1]
  const n0: number = chain[0]
  const n1: number = chain[2]

  if(op[1] === '*' || op[1] === '/') {
    if(op === '*') {
      return n0 * n0/100*n1
    } else {
      return n0 / n0/100*n1
    }
  } else {
    if(op === '-') {
      return n0 - (n0 / 100 * n1)
    } else {
      return n0 + (n0 / 100 * n1)
    }
  }
}

function getCalcElements(chain: String[]) {

  const positions: number[] = []
  for(let i = 0; i < chain.length; i++) {
    chain[i] === '%' && positions.push(i)
  }

  const elementRanges: number[][] = []
  for(const element of positions) {
    elementRanges.push([element - 3, element])
  }

  const newChain: any[] = []
  for(let i = 0; i < chain.length; i++) {
    
  }
}

export default function App(): JSX.Element {

  const [chain, updateChain] = useState<String[]>([])
  const [result, setResult] = useState<number>(0)

  const handleClick = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    const value: String | undefined = target.dataset.value
    const role: String | undefined = target.dataset.role
    const lastEl: String = chain[chain.length - 1]

    if(value !== undefined) {
      // Case: AC
      // Delete the chain and set back the result
      if(value === 'ac') {
        updateChain([])
        setResult(0)
        return
      }

      // Case: CE
      // Delete last element in chain
      if(value === 'ce') {
        let chainCopy: String[] = [...chain]
        chainCopy.pop()
        updateChain(chainCopy)
        return
      }

      // Case: Number or operator
      // Add number/operator to chain 
      if(role === 'number' || role === 'operator') {

        // Case: last Element was already an operator
        // Remove last Element and add new value
        if(role === 'operator' && (lastEl === '-' || lastEl === '+' || lastEl === '*' || lastEl === '/')) {
          const tempChain: String[] = [...chain]
          tempChain.pop()
          updateChain([...tempChain, value])
          return
        }
        updateChain([...chain, value])
        return
      }
      
      // Case: Equals
      // Calculate and update result, reset chain
      if(role === 'result') {

        // Test if percentage sign
        let hasPercent: Boolean = false
        for(let i = 0; i < chain.length; i++) {
          chain[i] === '%' && (hasPercent = true)
        }

        // Case: There is a percentage sign in the chain
        if(hasPercent) {
          let tempResult: number = result
          let currentOperator: String = ''



        } else {
          // eslint-disable-next-line no-eval
          const tempResult: number = chain.length !== 0 ? eval(chain.join('')) : 0
          setResult(tempResult)
          updateChain([tempResult.toString()])
          return
        }
      }

      // Case: Dot
      // Add dot to chain
      if(role === 'dot') {
        updateChain([...chain, value])
      }
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <Display result={result} chain={chain} />
        <div onClick={handleClick} className="calc-button" id="ac-button" data-role="delete" data-value="ac">AC</div>
        <div onClick={handleClick} className="calc-button" id="ce-button" data-role="delete" data-value="ce">CE</div>
        <div onClick={handleClick} className="calc-button" id="percentage-button" data-role="operator" data-value="%">%</div>
        <div onClick={handleClick} className="calc-button" id="divide-button" data-role="operator" data-value="/">/</div>
        <div onClick={handleClick} className="calc-button" id="multiply-button" data-role="operator" data-value="*">*</div>
        <div onClick={handleClick} className="calc-button" id="minus-button" data-role="operator" data-value="-">-</div>
        <div onClick={handleClick} className="calc-button" id="plus-button" data-role="operator" data-value="+">+</div>
        <div onClick={handleClick} className="calc-button" id="dot-button" data-role="dot" data-value=".">.</div>
        <div onClick={handleClick} className="calc-button" id="equals-button" data-role="result" data-value="=">=</div>
        {
          [...Array(10).keys()].map(number => {
            return <div key={`calc-button-${number}`} onClick={handleClick} className="calc-button" data-role="number" data-value={number}>{number}</div>
          })
        }
      </div>
    </div>
  );
}
