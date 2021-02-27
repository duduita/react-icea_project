import { connect } from "react-redux";

// Essa página não foi finalizada
// Utilizar a mesma lógica das wind layers
// No entanto, deve-se procurar alguma lib que faça análogo ao que as velocity layers fazem
// Uma sugestão é a esri-leaflet (lib já utilizada para a Basemaplayer)
// https://github.com/slutske22/react-esri-leaflet

const TempLayer = (props) => {
  if (props.temp) alert("Página em construção!");
  return null;
};
const mapStateToProps = (state) => {
  return {
    temp: state.temp,
    tempDate: state.tempDate,
  };
};

export default connect(mapStateToProps)(TempLayer);
