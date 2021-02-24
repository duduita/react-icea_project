import { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import { Slider, Grid } from "@material-ui/core";
import Timeline from "../Timeline";
import PlayButton from "../PlayButton";

const HorizontalMenu = (props) => {
  // Variáveis que regem o tamanho da timeline em %
  const bigSize = 80;
  const smallSize = 50;
  // Variáveis que vão guardar as datas futuras (modelo) e horas passadas (RedeMET)
  let futureDays;
  let pastHours;
  useEffect(() => {
    if (props.scale === 80) {
      // Lógica para obter os próprios dias
      futureDays = new Date();
      let weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      for (let i = 1; i <= 6; i++) {
        futureDays.setDate(new Date().getDate() + i - 1);
        document.getElementById(`date-${i}`).innerHTML = `${
          weekDays[futureDays.getDay()]
        } ${futureDays.getDate()}`;
      }
    } else {
      // Lógica para obter as horas passadas
      for (let i = 1; i <= 6; i++) {
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
    // Lógica para alterar o date a partir do play
    if (props.playing && props.date < 6) {
      let idVar = setInterval(() => {
        props.PlusDate(props.date);
        clearInterval(idVar);
      }, 1000);
    }
  }, [props]);

  return (
    <div className="parent">
      <div className="bottom">
        <div className="options">
          <PlayButton props={props} />
          <div className="slider">
            <Grid container justify="center">
              <Slider
                aria-labelledby="discrete-slider-custom"
                step={16.66}
                value={props.date * 16.66}
                valueLabelDisplay="off"
              />{" "}
            </Grid>
            <Timeline props={props} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    date: state.date,
    playing: state.playing,
    windMenu: state.windMenu,
  };
};

// Mapeia as funções para propriedades (redux)
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeDate: (e) => {
      dispatch({ type: "CHANGEDATE", payLoad: e });
    },
    PlusDate: (e) => {
      dispatch({ type: "PLUSDATE", payLoad: e });
    },
  };
};

// Conecta o function component com o redux
export default connect(mapStateToProps, mapDispatchToProps)(HorizontalMenu);
