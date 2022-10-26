import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <span className="display">0</span>
        <div className="all-keys">
          <div className="white-key">
            <div className="functions">
              <button type="button" className="key remove">AC</button>
              <button type="button" className="key sign">±</button>
              <button type="button" className="key percent">%</button>
            </div>
            <div className="numbers">
              <button type="button" className="key num-0">0</button>
              <button type="button" className="key dot">.</button>
              <button type="button" className="key num-1">1</button>
              <button type="button" className="key num-2">2</button>
              <button type="button" className="key num-3">3</button>
              <button type="button" className="key num-4">4</button>
              <button type="button" className="key num-5">5</button>
              <button type="button" className="key num-6">6</button>
              <button type="button" className="key num-7">7</button>
              <button type="button" className="key num-8">8</button>
              <button type="button" className="key num-9">9</button>
            </div>
          </div>
          <div className="operators">
            <button type="button" className="key divide">÷</button>
            <button type="button" className="key divide">*</button>
            <button type="button" className="key divide">-</button>
            <button type="button" className="key divide">+</button>
            <button type="button" className="key divide">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default calculator;
