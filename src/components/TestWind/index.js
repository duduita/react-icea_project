import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

var velocityLayer = [];
const TestWind = (props) => {
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    if (props.windTest) {
      const url = `data/testWind${props.windDate}.json`;
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
            maxVelocity: 10, // Look that
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
    windTest: state.windTest,
    windDate: state.windDate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TestWind);
