import React, { Component } from "react";
import { connect } from "react-redux";

import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
    value: 1
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <button
          onClick={e => this.props.Sum(document.querySelector("#test").value)}
        >
          Somar
        </button>
        <button
          onClick={e =>
            this.props.Subtraction(document.querySelector("#test").value)
          }
        >
          Subtrair
        </button>
        <button
          onClick={e =>
            this.props.Multiplication(document.querySelector("#test").value)
          }
        >
          Multiplicar
        </button>
        <button
          onClick={e =>
            this.props.Division(document.querySelector("#test").value)
          }
        >
          Dividir
        </button>
        <input id="test" value={this.props.value} type="number" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    value: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Subtraction: e => dispatch({ type: "SUBTRACTION", payLoad: e }),
    Multiplication: e => dispatch({ type: "MULTIPLICATION", payLoad: e }),
    Sum: e => dispatch({ type: "SUM", payLoad: e }),
    Division: e => dispatch({ type: "DIVISION", payLoad: e })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
