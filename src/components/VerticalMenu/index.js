import React from "react";
import { connect } from "react-redux";
import "./style.css";

import ButtonWithIcon from "../ButtonWithIcon";

const VerticalMenu = (props) => {
  return (
    <div className="menu">
      <nav className="animated bounceInDown">
        <ul>
          <ButtonWithIcon
            alt="temperature"
            iconSize="icon"
            id="temperature"
            name="Temperatura"
            src="assets/sun.svg"
          />
          <ButtonWithIcon
            alt="satellite"
            iconSize="icon"
            id="satellite"
            name="Satelite"
            src="assets/satellite.svg"
          />
          <ButtonWithIcon
            alt="radar"
            iconSize="icon"
            id="radar"
            name="Radar"
            src="assets/radar.svg"
          />
          <li id="wind" className="sub-menu">
            <a
              href="#home"
              onClick={(e) => {
                props.ToggleWind(props.windMenu);
              }}
            >
              <img className="icon" alt="wind" src="assets/cloud.svg" /> Vento
            </a>
            {props.windMenu ? (
              <ul>
                <ButtonWithIcon
                  alt="globe"
                  iconSize="small-icon"
                  id="globe"
                  name="Globo"
                  onClick={(e) => {
                    props.WindGlobal(props.windGlobal);
                  }}
                  src="assets/wind.svg"
                />
                <ButtonWithIcon
                  alt="australia"
                  iconSize="small-icon"
                  id="australia"
                  name="Australia"
                  src="assets/wind.svg"
                />
                <ButtonWithIcon
                  alt="south"
                  iconSize="small-icon"
                  id="south"
                  name="Sul / Sudeste"
                  src="assets/wind.svg"
                />
                <ButtonWithIcon
                  alt="test"
                  iconSize="small-icon"
                  id="test"
                  name="Teste"
                  src="assets/wind.svg"
                />
              </ul>
            ) : null}
          </li>
          <li className="sub-menu">
            <a
              href="#home"
              onClick={(e) =>
                props.TogglePrecipitation(props.precipitationMenu)
              }
            >
              {" "}
              <img
                className="icon"
                alt="precipitation"
                src="assets/rain.svg"
              />{" "}
              Precipitação
            </a>
            {props.precipitationMenu ? (
              <ul>
                <ButtonWithIcon
                  alt="indefinido"
                  iconSize="icon"
                  id="indefinido"
                  name="Precipitação"
                  src="assets/wi-raindrop.svg"
                />
                <ButtonWithIcon
                  alt="indefinido"
                  iconSize="icon"
                  id="indefinido"
                  name="Precipitação Não Convectiva"
                  src="assets/wi-raindrop.svg"
                />
                <ButtonWithIcon
                  alt="australia"
                  iconSize="icon"
                  id="australia"
                  name="Precipitação Convectiva"
                  src="assets/wi-raindrop.svg"
                />
              </ul>
            ) : null}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    windMenu: state.windMenu,
    windGlobal: state.windGlobal,
    precipitationMenu: state.precipitationMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ToggleWind: (e) => {
      dispatch({ type: "TOGGLEWIND", payLoad: e });
    },
    TogglePrecipitation: (e) => {
      dispatch({ type: "TOGGLEPRECIPITATION", payLoad: e });
    },
    WindGlobal: (e) => {
      dispatch({ type: "WINDGLOBAL", payLoad: e });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalMenu);
