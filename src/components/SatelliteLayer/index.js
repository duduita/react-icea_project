import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

var satelliteLayer = [];
const SatelliteLayer = (props) => {
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    if (props.satellite) {
      const url = `https://api-redemet.decea.mil.br/produtos/satelite/realcada?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=202102090${props.date}`;
      axios
        .get(url)
        .then((res) => {
          var res = res.data;
          var imageUrl = res.data.satelite[0].path;
          var imageBounds = [
            [res.data.lat_lon.lat_min, res.data.lat_lon.lon_min],
            [res.data.lat_lon.lat_max, res.data.lat_lon.lon_max],
          ];
          satelliteLayer = L.imageOverlay(imageUrl, imageBounds);
        })
        .then(() => {
          container.addLayer(satelliteLayer);
        });
    }
    return () => {
      console.log(container.hasLayer(satelliteLayer));
      if (container.hasLayer(satelliteLayer))
        container.removeLayer(satelliteLayer);
    };
  });
  return null;
};

const mapStateToProps = (state) => {
  return {
    satellite: state.satellite,
    date: state.date,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SatelliteLayer);
