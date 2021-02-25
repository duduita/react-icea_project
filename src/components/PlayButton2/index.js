import React from "react";
import { connect } from "react-redux";
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

const PlayButton2 = (props) => {
  return (
    <IconButton
      aria-label="delete"
      color="primary"
      onClick={(e) =>
        props.Play2({ date: props.date, menuType: props.menuType })
      }
    >
      {!props.radarPlaying ? (
        <PlayCircleFilledIcon style={styles.button} />
      ) : (
        <PauseCircleFilledIcon style={styles.button} />
      )}
    </IconButton>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    radarPlaying: state.radarPlaying,
  };
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    Play2: (e) => {
      dispatch({ type: "PLAY2", payLoad: e.date, menuType: e.menuType });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(PlayButton2);
