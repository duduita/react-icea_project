import { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import { Slider, Grid } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Timeline from "../Timeline";
import PlayButton from "../PlayButton";

// Estilizando o slider
const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#1f5dc2",
      },
      track: {
        color: "#2066CC",
      },
    },
  },
});

const WindMenu = (props) => {
  // Variáveis que vão guardar as datas futuras (modelo) e horas passadas (RedeMET)
  let futureDays = new Date();
  useEffect(() => {
    // Lógica para obter os próprios dias
    let weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    for (let i = 1; i <= 6; i++) {
      futureDays.setDate(new Date().getDate() + i - 1);
      document.getElementById(`date-${i}`).innerHTML = `${
        weekDays[futureDays.getDay()]
      } ${futureDays.getDate()}`;
      // Lógica para obter as horas passadas
    }
  });
  useEffect(() => {
    // Lógica para alterar o date a partir do play
    if (props.playing && props.date < 6) {
      let idVar = setInterval(() => {
        props.PlusDate(props.date);
        clearInterval(idVar);
      }, 1000);
    }
    if (props.date == 6 && props.playing) props.ResetDate();
  }, [props]);

  return (
    <div className="bottom">
      <div className="options">
        <PlayButton props={props} />
        <div className="slider">
          <ThemeProvider theme={muiTheme}>
            <Grid container justify="center">
              <Slider
                aria-labelledby="discrete-slider-custom"
                value={props.date * 16.66}
                valueLabelDisplay="off"
              />
            </Grid>
          </ThemeProvider>
          <Timeline props={props} />
        </div>
        <div className="info">
          <img className="wind-icon" alt="wind" src="assets/cloud.svg" /> Vento
        </div>
      </div>
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    date: state.date,
    playing: state.playing,
    windMenu: state.windMenu,
    scaleType: state.scaleType,
  };
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeDate: (e) => {
      dispatch({ type: "CHANGEDATE", payLoad: e });
    },
    PlusDate: (e) => {
      dispatch({ type: "PLUSDATE", payLoad: e });
    },
    ResetDate: (e) => {
      dispatch({ type: "RESETDATE", payLoad: e });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(WindMenu);
