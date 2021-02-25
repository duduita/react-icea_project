import { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import { Slider, Grid } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Timeline2 from "../Timeline2";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { IconButton } from "@material-ui/core";

const styles = {
  button: {
    width: 64,
    height: 64,
    color: "#2066CC",
  },
};

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
      document.getElementById(`windDate-${i}`).innerHTML = `${
        weekDays[futureDays.getDay()]
      } ${futureDays.getDate()}`;
      // Lógica para obter as horas passadas
    }
  });
  useEffect(() => {
    // Lógica para alterar o date a partir do play
    if (props.windPlaying && props.windDate < 6) {
      let idVar = setInterval(() => {
        props.PLUSDATE({ date: props.windDate, menuType: "wind" });
        clearInterval(idVar);
      }, 1000);
    }
    if (props.windDate == 6 && props.windPlaying)
      props.RESETDATE({ menuType: "wind" });
  }, [props]);

  return (
    <div className="bottom">
      <div className="options">
        <IconButton
          color="primary"
          onClick={() =>
            props.PLAY({
              playing: props.windPlaying,
              menuType: "wind",
            })
          }
        >
          {!props.windPlaying ? (
            <PlayCircleFilledIcon style={styles.button} />
          ) : (
            <PauseCircleFilledIcon style={styles.button} />
          )}
        </IconButton>
        <div className="slider">
          <ThemeProvider theme={muiTheme}>
            <Grid container justify="center">
              <Slider
                aria-labelledby="discrete-slider-custom"
                value={props.windDate * 16.66}
                valueLabelDisplay="off"
              />
            </Grid>
          </ThemeProvider>
          <Timeline2 props={props} menuType="wind" />
        </div>
        <div className="info">
          <img className="wind-icon" alt="wind" src="assets/cloud.svg" />{" "}
          <div className="badge">Vento</div>
        </div>
      </div>
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    windDate: state.windDate,
    windPlaying: state.windPlaying,
    windMenu: state.windMenu,
  };
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    PLUSDATE: (e) => {
      dispatch({ type: "PLUSDATE", payLoad: e.date, menuType: e.menuType });
    },
    RESETDATE: (e) => {
      dispatch({ type: "RESETDATE", payLoad: e.date, menuType: e.menuType });
    },
    PLAY: (e) => {
      dispatch({ type: "PLAY", payLoad: e.playing, menuType: e.menuType });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(WindMenu);
