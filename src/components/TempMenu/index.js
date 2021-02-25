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

const TempMenu = (props) => {
  // Variáveis que vão guardar as horas passadas (RedeMET)
  let pastHours = new Date();
  useEffect(() => {
    // Lógica para obter as horas passadas
    for (let i = 1; i <= 6; i++) {
      pastHours.setDate(pastHours.getHours() - 6 + i);
      document.getElementById(
        `tempDate-${i}`
      ).innerHTML = `${pastHours.getDate()}:${
        pastHours.getMinutes() < 10
          ? `0${pastHours.getMinutes()}`
          : pastHours.getMinutes()
      }h`;
    }
  });
  useEffect(() => {
    // Lógica para alterar o date a partir do play
    if (props.tempPlaying && props.tempDate < 6) {
      let idVar = setInterval(() => {
        props.PlusDate2({ date: props.tempDate, menuType: "temp" });
        clearInterval(idVar);
      }, 1000);
    }
    if (props.tempDate == 6 && props.tempPlaying)
      props.ResetDate2({ menuType: "temp" });
  }, [props]);

  return (
    <div className="bottom2">
      <div className="options">
        <IconButton
          color="primary"
          onClick={() =>
            props.Play2({
              playing: props.tempPlaying,
              menuType: "temp",
            })
          }
        >
          {!props.tempPlaying ? (
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
                value={props.tempDate * 16.66}
                valueLabelDisplay="off"
              />
            </Grid>
          </ThemeProvider>
          <Timeline2 props={props} menuType="temp" />
        </div>
        <div className="info">
          <img className="temp-icon" alt="temp" src="assets/sun.svg" />{" "}
          <div className="badge">Temp</div>
        </div>
      </div>
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    tempPlaying: state.tempPlaying,
    tempDate: state.tempDate,
  };
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    PlusDate2: (e) => {
      dispatch({ type: "PLUSDATE2", payLoad: e.date, menuType: e.menuType });
    },
    ResetDate2: (e) => {
      dispatch({ type: "RESETDATE2", payLoad: e.date, menuType: e.menuType });
    },
    Play2: (e) => {
      dispatch({ type: "PLAY2", payLoad: e.playing, menuType: e.menuType });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(TempMenu);
