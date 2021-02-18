const initialState = {
  windMenu: false,
  windGlobal: false,
  windGlobalTime: 1,
  precipitationMenu: false,
  date: 1,
  layerVisible: "global",
};

const reducer = (state = initialState, action) => {
  if (action.type === "TOGGLEWIND") {
    if (!action.payLoad) {
      return {
        ...state,
        windMenu: true,
      };
    } else {
      return {
        ...state,
        windMenu: false,
      };
    }
  }
  if (action.type === "WINDGLOBAL") {
    if (!action.payLoad) {
      return {
        ...state,
        windGlobal: true,
      };
    } else {
      return {
        ...state,
        windGlobal: false,
      };
    }
  }
  if (action.type === "TOGGLEPRECIPITATION") {
    if (!action.payLoad) {
      return {
        ...state,
        precipitationMenu: true,
      };
    } else {
      return {
        ...state,
        precipitationMenu: false,
      };
    }
  }
  if (action.type === "CHANGEDATE") {
    return {
      ...state,
      date: action.payLoad,
    };
  }
  if (action.type === "TOGGLELAYER") {
    return {
      ...state,
      layerVisible: action.payLoad,
    };
  }
  return state;
};

export default reducer;
