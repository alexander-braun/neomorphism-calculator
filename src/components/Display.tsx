import React from 'react';

interface FooProp {
  result: Number;
  chain: String[];
}

export const Display = (props: FooProp) => {
  return (
    <div className='display'>
      <div className='display__setting-indicator'>
        {[...props.chain].join('')}
      </div>
      <div className='display__result'>{props.result}</div>
    </div>
  );
};
