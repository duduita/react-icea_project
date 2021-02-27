// Estados iniciais das variáveis
// Data possui 6 estados (1 - 6), dado 6 botões nos HorizontalMenu

const initialState = {
  windDate: 1, // Seta as datas para o vento
  windMenu: false, // DropdownMenu aberto/fechado (já abre o horizontal menu quando aberto)
  windNordeste: false, // Layer ativada/desativada
  windNorte: false, // Layer ativada/desativada
  windSulsudeste: false, // Layer ativada/desativada

  satellite: false, // Abre/fecha o satelliteMenu
  satelliteDate: 1, // Seta as datas para o vento
  satellitePlaying: false, // Estado do satellitePlayer

  radar: false, // Abre/fecha o radarMenu
  radarDate: 1, // Seta as datas para o vento
  radarPlaying: false, // Estado do satellitePlayer

  temp: false, // Abre/fecha o tempMenu
  tempDate: 1, // Seta as datas para a temperatura
  tempPlaying: false, // Estado do tempPlayer

  precipitationMenu: false, // DropdownMenu aberto/fechado (já abre o horizontal menu quando aberto)
};

// Máquina de estados do redux
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLEWIND": {
      // Abre/fecha o dropdown do windMenu
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
    // Abre/fecha o dropdown do precipitationMenu
    case "TOGGLEPRECIPITATION": {
      if (!action.payLoad) {
        alert("Página em construção!");
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
    // Abre/fecha o satelliteMenu
    case "SATELLITE": {
      if (!action.payLoad) {
        return {
          ...state,
          satellite: true,
        };
      } else {
        return {
          ...state,
          satellite: false,
        };
      }
    }
    // Abre/fecha o radarMenu
    case "RADAR": {
      if (!action.payLoad) {
        return {
          ...state,
          radar: true,
        };
      } else {
        return {
          ...state,
          radar: false,
        };
      }
    }
    // Abre/fecha o tempMenu
    case "TEMP": {
      if (!action.payLoad) {
        return {
          ...state,
          temp: true,
        };
      } else {
        return {
          ...state,
          temp: false,
        };
      }
    }

    // Ativa/desativa as wind layers
    case "WINDNORTE": {
      if (!action.payLoad) {
        return {
          ...state,
          windNorte: true,
        };
      } else {
        return {
          ...state,
          windNorte: false,
        };
      }
    }
    case "WINDSULSUDESTE": {
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
    case "WINDNORDESTE": {
      if (!action.payLoad) {
        return {
          ...state,
          windNordeste: true,
        };
      } else {
        return {
          ...state,
          windNordeste: false,
        };
      }
    }

    // Função que no estado playing altera a data de sua respectiva layer
    case "PLUSDATE": {
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
    // Função que reseta a data de sua respectiva layer
    case "RESETDATE": {
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

    // Função que altera a data através do menu de sua layer
    case "CHANGEDATE": {
      switch (action.menuType) {
        case "radar":
          return {
            ...state,
            radarPlaying: false,
            radarDate: action.payLoad,
          };
        case "satellite":
          return {
            ...state,
            satellitePlaying: false,
            satelliteDate: action.payLoad,
          };
        case "wind":
          return {
            ...state,
            windPlaying: false,
            windDate: action.payLoad,
          };
        case "temp":
          return {
            ...state,
            tempPlaying: false,
            tempDate: action.payLoad,
          };
        default:
          return {
            ...state,
          };
      }
    }
    // Função que ativa/desativa o play do menu de sua layer
    case "PLAY": {
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
    default:
      return { ...state };
  }
};

export default reducer;
