import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

var velocityLayer = [];
const GlobalWind = (props) => {
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    if (props.windGlobal) {
      const url = `data/globalWind${props.date}.json`;
      axios
        .get(url)
        .then((resp) => {
          velocityLayer[0] = L.velocityLayer({
            displayValues: true,
            displayOptions: {
              velocityType: "Wind",
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
    windGlobal: state.windGlobal,
    date: state.date,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalWind);
