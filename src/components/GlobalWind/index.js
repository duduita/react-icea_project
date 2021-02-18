import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

var velocityLayer = [];
const GlobalWind = (props) => {
  const url = "data/global.json";
  const url2 = "data/global.json";
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    if (props.windMenu) {
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

  useEffect(() => {
    if (props.windMenu2) {
      alert("oi");
      axios
        .get(url2)
        .then((resp) => {
          velocityLayer[1] = L.velocityLayer({
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
          container.addLayer(velocityLayer[1]);
        });
    }
    return () => {
      if (container.hasLayer(velocityLayer[1]))
        container.removeLayer(velocityLayer[1]);
    };
  });

  return null;
};
const mapStateToProps = (state) => {
  return {
    windMenu: state.windMenu,
    windMenu2: state.windMenu,
    precipitationMenu: state.precipitationMenu,
    layerVisible: state.layerVisible,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ToggleWind: (e) => {
      dispatch({ type: "TOGGLEWIND", payLoad: e });
    },
    TogglePrecipitation: (e) => {
      dispatch({ type: "TOGGLEPRECIPITATION", payLoad: e });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalWind);
