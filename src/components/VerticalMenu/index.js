import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import ButtonWithIcon from "../ButtonWithIcon";

export class VerticalMenu extends Component {
  state = {
    windMenu: false,
    valprecipitationMenuue: false
  };

  windMenu(event) {
    event.preventDefault();

    if (!this.state.windMenu) {
      this.setState({
        windMenu: true
      });
    } else {
      this.setState({
        windMenu: false
      });
    }
  }

  precipitationMenu(event) {
    event.preventDefault();

    if (!this.state.precipitationMenu) {
      this.setState({
        precipitationMenu: true
      });
    } else {
      this.setState({
        precipitationMenu: false
      });
    }
  }

  render() {
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
              <a href="#home" onClick={this.windMenu}>
                <img className="icon" alt="wind" src="assets/cloud.svg" /> Vento
              </a>
              {this.state.windMenu ? (
                <ul>
                  <li>
                    <a href="#home" id="global">
                      <img
                        className="small-icon"
                        alt="globe"
                        src="assets/wind.svg"
                      />{" "}
                      Globo
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="australia">
                      <img
                        className="small-icon"
                        alt="australia"
                        src="assets/wind.svg"
                      />{" "}
                      Australia
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="south">
                      <img
                        className="small-icon"
                        alt="south"
                        src="assets/wind.svg"
                      />{" "}
                      Sul / Sudeste
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="test">
                      <img
                        className="small-icon"
                        alt="test"
                        src="assets/wind.svg"
                      />{" "}
                      Teste
                    </a>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className="sub-menu">
              <a href="#home" onClick={this.precipitationMenu}>
                <img
                  className="icon"
                  alt="precipitation"
                  src="assets/rain.svg"
                />{" "}
                Precipitação
              </a>
              {this.state.precipitationMenu ? (
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
  }
}

export default VerticalMenu;
