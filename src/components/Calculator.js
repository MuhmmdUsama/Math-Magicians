import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [data, setState] = useState({ total: 0, next: null, operation: null });

  const click = (e) => {
    const value = e.target.value; // eslint-disable-line
    const calc = calculate(data, value);
    setState(calc);
  };

  const update = (e) => {
    setState({ total: e.target.value });
  };

  return (
    <div className="calculator">
      <span className="display" onChange={update}>
        {data.total}
        {data.operation}
        {data.next}
      </span>
      <div className="all-keys">
        <div className="white-key">
          <div className="functions">
            <button onClick={click} value="AC" type="button" className="key remove"> AC </button>
            <button onClick={click} value="+/-" type="button" className="key sign"> ± </button>
            <button onClick={click} value="%" type="button" className="key percent"> % </button>
          </div>
          <div className="numbers">
            <button onClick={click} value="0" type="button" className="key num-0"> 0 </button>
            <button onClick={click} value="." type="button" className="key dot"> . </button>
            <button onClick={click} value="1" type="button" className="key num-1"> 1 </button>
            <button onClick={click} value="2" type="button" className="key num-2"> 2 </button>
            <button onClick={click} value="3" type="button" className="key num-3"> 3 </button>
            <button onClick={click} value="4" type="button" className="key num-4"> 4 </button>
            <button onClick={click} value="5" type="button" className="key num-5"> 5 </button>
            <button onClick={click} value="6" type="button" className="key num-6"> 6 </button>
            <button onClick={click} value="7" type="button" className="key num-7"> 7 </button>
            <button onClick={click} value="8" type="button" className="key num-8"> 8 </button>
            <button onClick={click} value="9" type="button" className="key num-9"> 9 </button>
          </div>
        </div>
        <div className="operators">
          <button onClick={click} value="÷" type="button" className="key key-operators"> ÷ </button>
          <button onClick={click} value="x" type="button" className="key key-operators"> x </button>
          <button onClick={click} value="-" type="button" className="key key-operators"> - </button>
          <button onClick={click} value="+" type="button" className="key key-operators"> + </button>
          <button onClick={click} value="=" type="button" className="key key-operators"> = </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
