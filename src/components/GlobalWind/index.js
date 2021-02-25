import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

const GlobalWind = (props) => {
  // Array que guardará as velocity layers
  let velocityLayer = [];
  // Percebe o contexto (mapa) em que se está
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    // Verifica se o mapa está ativado
    if (props.wind) {
      // Carrega a url referente à data da timeline
      const url = `data/globalWind${props.windDate}.json`;
      axios
        .get(url)
        .then((resp) => {
          velocityLayer[0] = L.velocityLayer({
            displayValues: true,
            displayOptions: {
              velocityType: "wind",
              displayPosition: "bottomleft",
              displayEmptyString: "No wind data",
            },
            data: resp.data,
            maxVelocity: 25,
          });
        })
        .then(() => {
          container.addLayer(velocityLayer[0]);
        });
    }
    return () => {
      if (container.hasLayer(velocityLayer[0]))
        container.removeLayer(velocityLayer[0]);
    };
  });

  return null;
};

const mapStateToProps = (state) => {
  return {
    wind: state.wind,
    windDate: state.windDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalWind);
