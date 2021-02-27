import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const Timeline = (props) => {
  // Recebe como props.menuType o tipo de menu, assim, uma timeline é usada para todos menus
  return (
    <div class="timeline">
      <table className="table table-borderless">
        <thead>
          <tr>
            <td
              id={`${props.menuType}Date-1`}
              className="date-item"
              onClick={(e) =>
                props.CHANGEDATE({ date: 1, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-2`}
              className="date-item"
              onClick={(e) =>
                props.CHANGEDATE({ date: 2, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-3`}
              className="date-item"
              onClick={(e) =>
                props.CHANGEDATE({ date: 3, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-4`}
              className="date-item"
              onClick={(e) =>
                props.CHANGEDATE({ date: 4, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-5`}
              className="date-item"
              onClick={(e) =>
                props.CHANGEDATE({ date: 5, menuType: props.menuType })
              }
            />
            <td
              id={`${props.menuType}Date-6`}
              className="date-item"
              onClick={(e) =>
                props.CHANGEDATE({ date: 6, menuType: props.menuType })
              }
            />
          </tr>
        </thead>
      </table>
    </div>
  );
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    CHANGEDATE: (e) => {
      dispatch({ type: "CHANGEDATE", payLoad: e.date, menuType: e.menuType });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapDispatchToProps)(Timeline);
