import React from "react";
import "./styles.css";
import WindMenu from "../WindMenu";
import RadarMenu from "../RadarMenu";
import SatelliteMenu from "../SatelliteMenu";
import { connect } from "react-redux";

const HorizontalMenu = (props) => {
  return (
    <div class="menus">
      {props.windMenu ? <WindMenu /> : null}
      {props.radar ? <RadarMenu /> : null}
      {props.satellite ? <SatelliteMenu /> : null}
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    radarDate: state.radarDate,
    radarPlaying: state.radarPlaying,
    windMenu: state.windMenu,
    radar: state.radar,
    satellite: state.satellite,
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps)(HorizontalMenu);
