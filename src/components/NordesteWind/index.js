import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

const NordesteWind = (props) => {
  // Array que guardará as velocity layers
  let velocityLayer = [];
  // Percebe o contexto (mapa) em que se está
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    // Verifica se o mapa está ativado
    if (props.windNordeste) {
      // Carrega a url referente à data da timeline
      const url = `data/nordesteWind/nordesteWind${props.windDate}.json`;
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
            velocityScale: 0.005, // modifier for particle animations, arbitrarily defaults to 0.005
            maxVelocity: 25, // Controla a cor das velocity layers
          });
        })
        .then(() => {
          container.addLayer(velocityLayer[0]);
        });
    }
    // A cada renderização ele remove a layer
    // Para saber mais, pesquise sobre Cleanup do UseEffect
    return () => {
      if (container.hasLayer(velocityLayer[0]))
        container.removeLayer(velocityLayer[0]);
    };
  });

  return null;
};

const mapStateToProps = (state) => {
  return {
    windNordeste: state.windNordeste,
    windDate: state.windDate,
  };
};

export default connect(mapStateToProps)(NordesteWind);
