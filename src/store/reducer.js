const initialState = {
  windMenu: false,
  precipitationMenu: false,
  date: 1
};

const reducer = (state = initialState, action) => {
  if (action.type === "TOGGLEWIND") {
    if (!action.payLoad) {
      return {
        ...state,
        windMenu: true
      };
    } else {
      return {
        ...state,
        windMenu: false
      };
    }
  }
  if (action.type === "TOGGLEPRECIPITATION") {
    if (!action.payLoad) {
      return {
        ...state,
        precipitationMenu: true
      };
    } else {
      return {
        ...state,
        precipitationMenu: false
      };
    }
  }
  if (action.type === "CHANGEDATE") {
    return {
      ...state,
      date: action.payLoad
    };
  }
  return state;
};

export default reducer;
