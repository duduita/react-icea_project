import React from "react";
import { connect } from "react-redux";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { IconButton } from "@material-ui/core";

const styles = {
  button: {
    width: 64,
    height: 64,
  },
  icon: {
    fontSize: 40,
    color: "#fffff",
  },
};

const PlayButton = (props) => {
  return (
    <IconButton
      aria-label="delete"
      color="primary"
      onClick={(e) => props.Play(props.playing)}
    >
      <PlayCircleFilledIcon style={styles.button} />
    </IconButton>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    Play: (e) => {
      dispatch({ type: "PLAY", payLoad: e });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);
