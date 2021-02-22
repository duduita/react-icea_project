import { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";

const HorizontalMenu = (props) => {
  var futureDays;
  var pastHours;
  useEffect(() => {
    if (props.scale === 80) {
      futureDays = new Date();
      var weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      for (var i = 1; i <= 6; i++) {
        futureDays.setDate(new Date().getDate() + i - 1);
        document.getElementById(`date-${i}`).innerHTML = `${
          weekDays[futureDays.getDay()]
        } ${futureDays.getDate()}`;
      }
    } else {
      for (var i = 1; i <= 6; i++) {
        pastHours = new Date();
        pastHours.setDate(pastHours.getHours() - 6 + i);
        document.getElementById(
          `date-${i}`
        ).innerHTML = `${pastHours.getDate()}:${
          pastHours.getMinutes() < 10
            ? `0${pastHours.getMinutes()}`
            : pastHours.getMinutes()
        }h`;
      }
    }
  });
  useEffect(() => {
    console.log(props.date);
    if (props.playing && props.date < 6) {
      var idVar = setInterval(() => {
        props.PlusDate(props.date);
        clearInterval(idVar);
      }, 1000);
    }
  }, [props]);
  return (
    <div className="bottom">
      <div className="options">
        <button
          onClick={(e) => props.Play(props.playing)}
          className="btn btn-primary play-button"
          type="submit"
        >
          {props.playing ? (
            <span id="play" className="glyphicon pause glyphicon-pause" />
          ) : (
            <span id="play" className="glyphicon play glyphicon-play" />
          )}
        </button>
      </div>
      <div className="submenu">
        <div
          className="bar"
          style={{
            width: `${props.scale}%`,
          }}
        >
          <div id="bar-field" className="progress">
            <div
              id="p-bar"
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${props.date * 16.66}%`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="scale">
        <table
          id="date-line"
          className="table table-borderless"
          style={{
            width: `${props.scale}%`,
          }}
        >
          <thead className="thead">
            <tr className="date">
              <td
                id="date-1"
                className="date-item"
                onClick={(e) => props.ChangeDate(1)}
              />
              <td
                id="date-2"
                className="date-item"
                onClick={(e) => props.ChangeDate(2)}
              />
              <td
                id="date-3"
                className="date-item"
                onClick={(e) => props.ChangeDate(3)}
              />
              <td
                id="date-4"
                className="date-item"
                onClick={(e) => props.ChangeDate(4)}
              />
              <td
                id="date-5"
                className="date-item"
                onClick={(e) => props.ChangeDate(5)}
              />
              <td
                id="date-6"
                className="date-item"
                onClick={(e) => props.ChangeDate(6)}
              />
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    date: state.date,
    playing: state.playing,
    scale: state.scale,
    windMenu: state.windMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeDate: (e) => {
      dispatch({ type: "CHANGEDATE", payLoad: e });
    },
    Play: (e) => {
      dispatch({ type: "PLAY", payLoad: e });
    },
    PlusDate: (e) => {
      dispatch({ type: "PLUSDATE", payLoad: e });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalMenu);
