import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button">Increment by {step}</button>
        <button type="button">Decrement by {step}</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter step={5} />, document.getElementById("root"));

class Counter extends Component {
  /* ... */

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button
          type="button"
          onClick={evt => {
            console.log("Increment button was clicked!", evt); 
            console.log("this.props: ", this.props); 
          }}
        >
          > Increment by {step}
        </button>
        <button
          type="button"
          onClick={evt => {
            console.log("Decrement button was clicked!", evt); 
            console.log("this.props: ", this.props); 
          }}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}