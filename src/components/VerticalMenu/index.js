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
            className="icon"
            id="temperature"
            name="Temperatura"
            onClick={(e) => props.ActiveTemp(props.temp)}
            src="assets/sun.svg"
          />
          <ButtonWithIcon
            alt="satellite"
            className="icon"
            id="satellite"
            name="Satelite"
            onClick={(e) => props.ActiveSatellite(props.satellite)}
            src="assets/satellite.svg"
          />
          <ButtonWithIcon
            alt="radar"
            className="icon"
            id="radar"
            name="Radar"
            onClick={(e) => props.ActiveRadar(props.radar)}
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
                  alt="nordeste"
                  className="small-icon"
                  id="nordeste"
                  name=" Nordeste"
                  onClick={(e) => {
                    props.WindNordeste(props.windNordeste);
                  }}
                  src="assets/wind.svg"
                />
                <ButtonWithIcon
                  alt="norte"
                  className="small-icon"
                  id="norte"
                  name=" Norte"
                  onClick={(e) => {
                    props.WindNorte(props.windNorte);
                  }}
                  src="assets/wind.svg"
                />
                <ButtonWithIcon
                  alt="sul-sudeste"
                  className="small-icon"
                  id="sul-sudeste"
                  name=" Sul / Sudeste"
                  onClick={(e) => {
                    props.WindSulsudeste(props.windSulsudeste);
                  }}
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
              <img className="icon" alt="precipitation" src="assets/rain.svg" />
              Precipitação
            </a>
            {props.precipitationMenu ? (
              <ul>
                <ButtonWithIcon
                  alt="indefinido"
                  className="icon"
                  id="indefinido"
                  name="Precipitação"
                  src="assets/wi-raindrop.svg"
                />
                <ButtonWithIcon
                  alt="indefinido"
                  className="icon"
                  id="indefinido"
                  name="Precipitação Não Convectiva"
                  src="assets/wi-raindrop.svg"
                />
                <ButtonWithIcon
                  alt="indefinido"
                  className="icon"
                  id="indefinido"
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
    precipitationMenu: state.precipitationMenu,
    radar: state.radar,
    satellite: state.satellite,
    temp: state.temp,
    windMenu: state.windMenu,
    windNordeste: state.windNordeste,
    windSulsudeste: state.windSulsudeste,
    windNorte: state.windNorte,
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
    ActiveSatellite: (e) => {
      dispatch({ type: "SATELLITE", payLoad: e });
    },
    ActiveTemp: (e) => {
      dispatch({ type: "TEMP", payLoad: e });
    },
    ActiveRadar: (e) => {
      dispatch({ type: "RADAR", payLoad: e });
    },
    WindNordeste: (e) => {
      dispatch({ type: "WINDNORDESTE", payLoad: e });
    },
    WindNorte: (e) => {
      dispatch({ type: "WINDNORTE", payLoad: e });
    },
    WindSulsudeste: (e) => {
      dispatch({ type: "WINDSULSUDESTE", payLoad: e });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalMenu);
