import React from "react";
import "./styles.css";
import WindMenu from "../WindMenu";
import RadarMenu from "../RadarMenu";
import SatelliteMenu from "../SatelliteMenu";
import TempMenu from "../TempMenu";
import { connect } from "react-redux";

const HorizontalMenu = (props) => {
  return (
    <div class="menus">
      {props.windMenu ? <WindMenu /> : null}
      {props.radar ? <RadarMenu /> : null}
      {props.satellite ? <SatelliteMenu /> : null}
      {props.temp ? <TempMenu /> : null}
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    radar: state.radar,
    satellite: state.satellite,
    temp: state.temp,
    windMenu: state.windMenu,
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps)(HorizontalMenu);
