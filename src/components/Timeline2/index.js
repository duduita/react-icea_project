import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const Timeline2 = (props) => {
  return (
    <div class="timeline">
      <table className="table table-borderless">
        <thead>
          <tr>
            <td
              id={`${props.menuType}Date-1`}
              className="date-item"
              onClick={(e) =>
                props.ChangeDate2({ date: 1, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-2`}
              className="date-item"
              onClick={(e) =>
                props.ChangeDate2({ date: 2, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-3`}
              className="date-item"
              onClick={(e) =>
                props.ChangeDate2({ date: 3, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-4`}
              className="date-item"
              onClick={(e) =>
                props.ChangeDate2({ date: 4, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-5`}
              className="date-item"
              onClick={(e) =>
                props.ChangeDate2({ date: 5, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-6`}
              className="date-item"
              onClick={(e) =>
                props.ChangeDate2({ date: 6, menuType: props.menuType })
              }
            />
          </tr>
        </thead>
      </table>
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {};
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeDate2: (e) => {
      dispatch({ type: "CHANGEDATE2", payLoad: e.date, menuType: e.menuType });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(Timeline2);
