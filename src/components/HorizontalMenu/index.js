import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class HorizontalMenu extends Component {
  componentDidMount() {
    const futureDays = new Date();
    var weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    for (var i = 1; i <= 6; i++) {
      futureDays.setDate(new Date().getDate() + i - 1);
      document.getElementById(`date-${i}`).innerHTML = `${
        weekDays[futureDays.getDay()]
      } ${futureDays.getDate()}`;
    }
  }

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
                  width: `${this.props.date * 16.66}%`,
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
                <td
                  id="date-1"
                  className="date-item"
                  onClick={e => this.props.ChangeDate(1)}
                  scope="col"
                />
                <td
                  id="date-2"
                  className="date-item"
                  onClick={e => this.props.ChangeDate(2)}
                  scope="col"
                />
                <td
                  id="date-3"
                  className="date-item"
                  onClick={e => this.props.ChangeDate(3)}
                  scope="col"
                />
                <td
                  id="date-4"
                  className="date-item"
                  onClick={e => this.props.ChangeDate(4)}
                  scope="col"
                />
                <td
                  id="date-5"
                  className="date-item"
                  onClick={e => this.props.ChangeDate(5)}
                  scope="col"
                />
                <td
                  id="date-6"
                  className="date-item"
                  onClick={e => this.props.ChangeDate(6)}
                  scope="col"
                />
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ChangeDate: e => {
      dispatch({ type: "CHANGEDATE", payLoad: e });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalMenu);
