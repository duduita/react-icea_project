import { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import { Slider, Grid } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Timeline from "../Timeline";
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

const RadarMenu = (props) => {
  // Variáveis que vão guardar as horas passadas (RedeMET)
  let pastHours = new Date();
  useEffect(() => {
    // Lógica para obter as horas passadas
    for (let i = 1; i <= 6; i++) {
      pastHours.setDate(pastHours.getHours() - 6 + i);
      document.getElementById(
        `radarDate-${i}`
      ).innerHTML = `${pastHours.getDate()}:${
        pastHours.getMinutes() < 10
          ? `0${pastHours.getMinutes()}`
          : pastHours.getMinutes()
      }h`;
    }
  });
  useEffect(() => {
    // Lógica para alterar o date a partir do play
    if (props.radarPlaying && props.radarDate < 6) {
      let idVar = setInterval(() => {
        props.PLUSDATE({ date: props.radarDate, menuType: "radar" });
        clearInterval(idVar);
      }, 1000);
    }
    if (props.radarDate == 6 && props.radarPlaying)
      props.RESETDATE({ menuType: "radar" });
  }, [props]);

  return (
    <div className="bottom2">
      <div className="options">
        <IconButton
          color="primary"
          onClick={() =>
            props.PLAY({
              playing: props.radarPlaying,
              menuType: "radar",
            })
          }
        >
          {!props.radarPlaying ? (
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
                value={props.radarDate * 16.66}
                valueLabelDisplay="off"
              />
            </Grid>
          </ThemeProvider>
          <Timeline props={props} menuType="radar" />
        </div>
        <div className="info">
          <img className="radar-icon" alt="wind" src="assets/radar.svg" />{" "}
          <div className="badge">Maxxcappi</div>
        </div>
      </div>
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    radarPlaying: state.radarPlaying,
    radarDate: state.radarDate,
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
export default connect(mapStateToProps, mapDispatchToProps)(RadarMenu);
