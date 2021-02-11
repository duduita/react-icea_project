import React, { Component } from "react";
import "./style.css";

export class HorizontalMenu extends Component {
  render() {
    return (
      <div>
        <div className="bottom">
          <div className="options">
            <button className="btn btn-primary play-button" type="submit">
              <span id="play" className="glyphicon play glyphicon-play" />
            </button>
          </div>
          <div className="bar">
            <div
              id="bar-field"
              className="progress"
              style={{ height: "6px", backgroundColor: "#4c4949" }}
            >
              <div
                id="p-bar"
                className="progress-bar"
                role="progressbar"
                style={{
                  width: "16.66%",
                  height: "6px ",
                  backgroundColor: "#e5e5e5"
                }}
              />
            </div>
          </div>
        </div>
        <div className="scale">
          <table id="date-line" className="table table-borderless">
            <thead>
              <tr className="date">
                <td id="date-1" className="date-item" scope="col" />
                <td id="date-2" className="date-item" scope="col" />
                <td id="date-3" className="date-item" scope="col" />
                <td id="date-4" className="date-item" scope="col" />
                <td id="date-5" className="date-item" scope="col" />
                <td id="date-6" className="date-item" scope="col" />
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default HorizontalMenu;
