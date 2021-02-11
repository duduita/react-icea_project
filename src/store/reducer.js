const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "SUBTRACTION") {
    return {
      counter: state.counter - parseFloat(action.payLoad)
    };
  }
  if (action.type === "SUM") {
    return {
      ...state,
      counter: state.counter + parseFloat(action.payLoad)
    };
  }
  if (action.type === "DIVISION") {
    return {
      ...state,
      counter: state.counter / parseFloat(action.payLoad)
    };
  }
  if (action.type === "MULTIPLICATION") {
    return {
      ...state,
      counter: state.counter * parseFloat(action.payLoad)
    };
  }
  return state;
};

export default reducer;
