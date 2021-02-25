// Estados iniciais das variáveis
const initialState = {
  windMenu: false,
  windGlobal: false,
  windGlobalTime: 1,
  temp: false,
  windTest: false,
  precipitationMenu: false,
  date: 1,
  date2: 1,
  radarDate: 1,
  satellite: false,
  playing: false,
  satelliteDate: 1,
  satellitePlaying: false,
  radarPlaying: false,
  radar: false,
  scaleType: "model",
};

// Máquina de estados do redux
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
        scaleType: "redemet",
      };
    } else {
      return {
        ...state,
        radar: false,
        scaleType: "redemet",
      };
    }
  }
  if (action.type === "TEMP") {
    if (!action.payLoad) {
      return {
        ...state,
        temp: true,
        scaleType: "redemet",
      };
    } else {
      return {
        ...state,
        temp: false,
        scaleType: "redemet",
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
  if (action.type === "RESETDATE") {
    return {
      ...state,
      date: 1,
    };
  }
  if (action.type === "PLUSDATE2") {
    switch (action.menuType) {
      case "radar":
        return {
          ...state,
          radarDate: action.payLoad + 1,
        };
      case "satellite":
        return {
          ...state,
          satelliteDate: action.payLoad + 1,
        };
      default:
        return { ...state };
    }
  }
  if (action.type === "RESETDATE2") {
    switch (action.menuType) {
      case "radar":
        return {
          ...state,
          radarDate: 1,
        };
      case "satellite":
        return {
          ...state,
          satelliteDate: 1,
        };
      default:
        return { ...state };
    }
  }
  if (action.type === "WINDGLOBAL") {
    if (!action.payLoad) {
      return {
        ...state,
        windGlobal: true,
        scaleType: "model",
      };
    } else {
      return {
        ...state,
        windGlobal: false,
        scaleType: "model",
      };
    }
  }
  if (action.type === "SATELLITE") {
    if (!action.payLoad) {
      return {
        ...state,
        satellite: true,
        scaleType: "redemet",
      };
    } else {
      return {
        ...state,
        satellite: false,
        scaleType: "redemet",
      };
    }
  }
  if (action.type === "TOGGLEPRECIPITATION") {
    if (!action.payLoad) {
      return {
        ...state,
        precipitationMenu: true,
        scaleType: "model",
      };
    } else {
      return {
        ...state,
        precipitationMenu: false,
        scaleType: "model",
      };
    }
  }
  if (action.type === "CHANGEDATE") {
    return {
      ...state,
      date: action.payLoad,
    };
  }
  if (action.type === "CHANGEDATE2") {
    switch (action.menuType) {
      case "radar":
        return {
          ...state,
          radarDate: action.payLoad,
        };
      case "satellite":
        return {
          ...state,
          satelliteDate: action.payLoad,
        };
      default:
        return {
          ...state,
        };
    }
  }
  if (action.type === "PLAY2") {
    switch (action.menuType) {
      case "radar":
        if (!action.payLoad) {
          return {
            ...state,
            radarPlaying: true,
          };
        } else {
          return {
            ...state,
            radarPlaying: false,
          };
        }
      case "satellite":
        if (!action.payLoad) {
          return {
            ...state,
            satellitePlaying: true,
          };
        } else {
          return {
            ...state,
            satellitePlaying: false,
          };
        }
      default:
        return {
          ...state,
        };
    }
  }
  return state;
};

export default reducer;
