const bigScale = 80;
const smallScale = 50;

const initialState = {
  windMenu: false,
  windGlobal: false,
  windGlobalTime: 1,
  windTest: false,
  precipitationMenu: false,
  date: 1,
  satellite: false,
  layerVisible: "global",
  playing: false,
  radar: false,
  loadingSatellite: false,
  scale: 80,
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
  if (action.type === "WINDTEST") {
    if (!action.payLoad) {
      return {
        ...state,
        windTest: true,
      };
    } else {
      return {
        ...state,
        windTest: false,
      };
    }
  }
  if (action.type === "RADAR") {
    if (!action.payLoad) {
      return {
        ...state,
        radar: true,
        scale: smallScale,
      };
    } else {
      return {
        ...state,
        radar: false,
        scale: smallScale,
      };
    }
  }
  if (action.type === "PLAY") {
    if (!action.payLoad) {
      return {
        ...state,
        playing: true,
      };
    } else {
      return {
        ...state,
        playing: false,
      };
    }
  }
  if (action.type === "PLUSDATE") {
    return {
      ...state,
      date: action.payLoad + 1,
    };
  }
  if (action.type === "UPDATETIME") {
    return {
      ...state,
      time: action.payLoad,
    };
  }
  if (action.type === "WINDGLOBAL") {
    if (!action.payLoad) {
      return {
        ...state,
        windGlobal: true,
        scale: bigScale,
      };
    } else {
      return {
        ...state,
        windGlobal: false,
        scale: bigScale,
      };
    }
  }
  if (action.type === "SATELLITE") {
    if (!action.payLoad) {
      return {
        ...state,
        satellite: true,
        scale: smallScale,
      };
    } else {
      return {
        ...state,
        satellite: false,
        scale: smallScale,
      };
    }
  }
  if (action.type === "LOADINGSATELLITE") {
    if (!action.payLoad) {
      return {
        ...state,
        loadingSatellite: true,
      };
    } else {
      return {
        ...state,
        loadingSatellite: false,
      };
    }
  }
  if (action.type === "TOGGLEPRECIPITATION") {
    if (!action.payLoad) {
      return {
        ...state,
        precipitationMenu: true,
        scale: bigScale,
      };
    } else {
      return {
        ...state,
        precipitationMenu: false,
        scale: bigScale,
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
