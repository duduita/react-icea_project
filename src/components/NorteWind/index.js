import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

// Array que guardará as velocity layers
let velocityLayer;
const NorteWind = (props) => {
  // Percebe o contexto (mapa) em que se está
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    // Verifica se o mapa está ativado
    if (props.windNorte) {
      // Carrega a url referente à data da timeline
      const url = `data/norteWind/norteWind${props.windDate}.json`;
      axios
        .get(url)
        .then((resp) => {
          velocityLayer = L.velocityLayer({
            displayValues: true,
            displayOptions: {
              velocityType: "Wind",
              displayPosition: "bottomleft",
              displayEmptyString: "No wind data",
            },
            data: resp.data,
            velocityScale: 0.005, // modifier for particle animations, arbitrarily defaults to 0.005
            maxVelocity: 25, // Controla a cor das velocity layers
          });
        })
        .then(() => {
          container.addLayer(velocityLayer);
        });
    }
    return () => {
      // A cada renderização ele remove a layer
      // Para saber mais, pesquise sobre Cleanup do UseEffect
      if (container.hasLayer(velocityLayer))
        container.removeLayer(velocityLayer);
    };
  });

  return null;
};
const mapStateToProps = (state) => {
  return {
    windNorte: state.windNorte,
    windDate: state.windDate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NorteWind);
