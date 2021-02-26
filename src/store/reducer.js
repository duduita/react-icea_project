// Estados iniciais das variáveis
const initialState = {
  precipitationMenu: false,
  radar: false,
  radarDate: 1,
  radarPlaying: false,
  satellite: false,
  satelliteDate: 1,
  satellitePlaying: false,
  scaleType: "model",
  temp: false,
  tempDate: 1,
  tempPlaying: false,
  windDate: 1,
  windMenu: false,
  wind: false,
  windTest: false,
  windSulsudeste: false,
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
  if (action.type === "WINDSULSUDESTE") {
    if (!action.payLoad) {
      return {
        ...state,
        windSulsudeste: true,
      };
    } else {
      return {
        ...state,
        windSulsudeste: false,
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

  if (action.type === "PLUSDATE") {
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
      case "wind":
        return {
          ...state,
          windDate: action.payLoad + 1,
        };
      case "temp":
        return {
          ...state,
          tempDate: action.payLoad + 1,
        };
      case "ppt":
        return {
          ...state,
          pptDate: action.payLoad + 1,
        };
      default:
        return { ...state };
    }
  }
  if (action.type === "RESETDATE") {
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
      case "temp":
        return {
          ...state,
          tempDate: 1,
        };
      case "ppt":
        return {
          ...state,
          pptDate: 1,
        };
      case "wind":
        return {
          ...state,
          windDate: 1,
        };
      default:
        return { ...state };
    }
  }
  if (action.type === "WINDGLOBAL") {
    if (!action.payLoad) {
      return {
        ...state,
        wind: true,
        scaleType: "model",
      };
    } else {
      return {
        ...state,
        wind: false,
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
      case "wind":
        return {
          ...state,
          windDate: action.payLoad,
        };
      case "temp":
        return {
          ...state,
          tempDate: action.payLoad,
        };
      default:
        return {
          ...state,
        };
    }
  }
  if (action.type === "PLAY") {
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
      case "temp":
        if (!action.payLoad) {
          return {
            ...state,
            tempPlaying: true,
          };
        } else {
          return {
            ...state,
            tempPlaying: false,
          };
        }
      case "wind":
        if (!action.payLoad) {
          return {
            ...state,
            windPlaying: true,
          };
        } else {
          return {
            ...state,
            windPlaying: false,
          };
        }
      case "ppt":
        if (!action.payLoad) {
          return {
            ...state,
            pptPlaying: true,
          };
        } else {
          return {
            ...state,
            pptPlaying: false,
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
