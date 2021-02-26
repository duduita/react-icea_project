import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

let velocityLayer;
const TestWind = (props) => {
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    if (props.windTest) {
      const url = `data/testWind${props.windDate}.json`;
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
            velocityScale: 0.02, // modifier for particle animations, arbitrarily defaults to 0.005
            maxVelocity: 10, // Look that
          });
        })
        .then(() => {
          container.addLayer(velocityLayer);
        });
    }
    return () => {
      if (container.hasLayer(velocityLayer))
        container.removeLayer(velocityLayer);
    };
  });

  return null;
};
const mapStateToProps = (state) => {
  return {
    windTest: state.windTest,
    windDate: state.windDate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TestWind);
