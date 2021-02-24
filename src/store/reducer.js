// Configurando tamanho da timeline em %
const bigScale = 80;
const smallScale = 50;

// Estados iniciais das variáveis
const initialState = {
  windMenu: false,
  windGlobal: false,
  windGlobalTime: 1,
  windTest: false,
  precipitationMenu: false,
  date: 1,
  satellite: false,
  playing: false,
  radar: false,
  scaleSize: bigScale,
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
        scaleSize: smallScale,
      };
    } else {
      return {
        ...state,
        radar: false,
        scaleSize: smallScale,
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
  if (action.type === "WINDGLOBAL") {
    if (!action.payLoad) {
      return {
        ...state,
        windGlobal: true,
        scaleSize: bigScale,
      };
    } else {
      return {
        ...state,
        windGlobal: false,
        scaleSize: bigScale,
      };
    }
  }
  if (action.type === "SATELLITE") {
    if (!action.payLoad) {
      return {
        ...state,
        satellite: true,
        scaleSize: smallScale,
      };
    } else {
      return {
        ...state,
        satellite: false,
        scaleSize: smallScale,
      };
    }
  }
  if (action.type === "TOGGLEPRECIPITATION") {
    if (!action.payLoad) {
      return {
        ...state,
        precipitationMenu: true,
        scaleSize: bigScale,
      };
    } else {
      return {
        ...state,
        precipitationMenu: false,
        scaleSize: bigScale,
      };
    }
  }
  if (action.type === "CHANGEDATE") {
    return {
      ...state,
      date: action.payLoad,
    };
  }

  return state;
};

export default reducer;
