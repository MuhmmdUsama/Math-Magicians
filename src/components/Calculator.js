import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  click = (e) => {
    const value = e.target.value; // eslint-disable-line
    const calc = calculate(this.state, value);
    this.setState(calc);
  };

  update = (e) => {
    this.setState({ total: e.target.value });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <span className="display">
          {total}
          {operation}
          {next}
        </span>

        <div className="all-keys">
          <div className="white-key">
            <div className="functions">
              <button onClick={this.click} value="AC" type="button" className="key remove"> AC </button>
              <button onClick={this.click} value="+/-" type="button" className="key sign"> ± </button>
              <button onClick={this.click} value="%" type="button" className="key percent"> % </button>
            </div>

            <div className="numbers">
              <button onClick={this.click} value="0" type="button" className="key num-0"> 0 </button>
              <button onClick={this.click} value="." type="button" className="key dot"> . </button>
              <button onClick={this.click} value="1" type="button" className="key num-1"> 1 </button>
              <button onClick={this.click} value="2" type="button" className="key num-2"> 2 </button>
              <button onClick={this.click} value="3" type="button" className="key num-3"> 3 </button>
              <button onClick={this.click} value="4" type="button" className="key num-4"> 4 </button>
              <button onClick={this.click} value="5" type="button" className="key num-5"> 5 </button>
              <button onClick={this.click} value="6" type="button" className="key num-6"> 6 </button>
              <button onClick={this.click} value="7" type="button" className="key num-7"> 7 </button>
              <button onClick={this.click} value="8" type="button" className="key num-8"> 8 </button>
              <button onClick={this.click} value="9" type="button" className="key num-9"> 9 </button>
            </div>
          </div>
          <div className="operators">
            <button onClick={this.click} value="÷" type="button" className="key key-operators"> ÷ </button>
            <button onClick={this.click} value="x" type="button" className="key key-operators"> x </button>
            <button onClick={this.click} value="-" type="button" className="key key-operators"> - </button>
            <button onClick={this.click} value="+" type="button" className="key key-operators"> + </button>
            <button onClick={this.click} value="=" type="button" className="key key-operators"> = </button>
          </div>
        </div>
      </div>
    );
  }
}

export default calculator;
