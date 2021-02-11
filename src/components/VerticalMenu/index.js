import React, { Component } from "react";
import "./style.css";

export class VerticalMenu extends Component {
  constructor() {
    super();

    this.state = {
      windMenu: false,
      precipitationMenu: false,
    };

    this.windMenu = this.windMenu.bind(this);
    this.precipitationMenu = this.precipitationMenu.bind(this);
  }

  windMenu(event) {
    event.preventDefault();

    if (!this.state.windMenu) {
      this.setState({
        windMenu: true,
      });
    } else {
      this.setState({
        windMenu: false,
      });
    }
  }

  precipitationMenu(event) {
    event.preventDefault();

    if (!this.state.precipitationMenu) {
      this.setState({
        precipitationMenu: true,
      });
    } else {
      this.setState({
        precipitationMenu: false,
      });
    }
  }

  render() {
    return (
      <div class="menu">
        <nav class="animated bounceInDown">
          <ul>
            <li>
              <a href="#profile">
                <img class="icon" alt="temperature" src="data/sun.svg" />{" "}
                Temperatura
              </a>
            </li>
            <li>
              <a href="#profile" id="satellite">
                <img class="icon" alt="satellite" src="data/satellite.svg" />{" "}
                Satelite
              </a>
            </li>
            <li>
              <a href="#profile" id="radar">
                <img class="icon" alt="radar" src="data/radar.svg" /> Radar
              </a>
            </li>
            <li id="wind" class="sub-menu">
              <a href="#home" onClick={this.windMenu}>
                <img class="icon" alt="wind" src="data/cloud.svg" /> Vento
              </a>
              {this.state.windMenu ? (
                <ul>
                  <li>
                    <a href="#home" id="global">
                      <img class="small-icon" alt="globe" src="data/wind.svg" />{" "}
                      Globo
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="australia">
                      <img
                        class="small-icon"
                        alt="australia"
                        src="data/wind.svg"
                      />{" "}
                      Australia
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="south">
                      <img class="small-icon" alt="south" src="data/wind.svg" />{" "}
                      Sul / Sudeste
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="test">
                      <img class="small-icon" alt="test" src="data/wind.svg" />{" "}
                      Teste
                    </a>
                  </li>
                </ul>
              ) : null}
            </li>
            <li class="sub-menu">
              <a href="#home" onClick={this.precipitationMenu}>
                <img class="icon" alt="precipitation" src="data/rain.svg" />{" "}
                Precipitação
              </a>
              {this.state.precipitationMenu ? (
                <ul>
                  <li>
                    <a href="#home" id="global">
                      <img
                        class="small-icon"
                        alt="rain"
                        src="data/wi-raindrop.svg"
                      />
                      Precipitação
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="australia">
                      <img
                        class="small-icon"
                        alt="precipitation-convection"
                        src="data/wi-raindrop.svg"
                      />
                      Precipitação Convectiva
                    </a>
                  </li>
                  <li>
                    <a href="#home" id="australia">
                      <img
                        class="small-icon"
                        alt="precipitation-non-convection"
                        src="data/wi-raindrop.svg"
                      />
                      Precipitação Não Convectiva
                    </a>
                  </li>
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
