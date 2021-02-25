import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const Timeline = (props) => {
  return (
    <div class="timeline">
      <table
        className="table table-borderless"
        style={{
          width: `${props.scaleSize}%`,
        }}
      >
        <thead>
          <tr>
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
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    date: state.date,
    playing: state.playing,
    scaleSize: state.scaleSize,
  };
};

// Mapeia as funções para propriedades (redux)
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

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
