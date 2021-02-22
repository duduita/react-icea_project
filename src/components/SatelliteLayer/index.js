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
    if (satelliteLayer.length === 0)
      for (let i = 1; i <= 6; i++) {
        const url = `https://api-redemet.decea.mil.br/produtos/satelite/realcada?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=202102090${i}`;
        axios.get(url).then((res) => {
          res = res.data;
          var imageUrl = res.data.satelite[0].path;
          var imageBounds = [
            [res.data.lat_lon.lat_min, res.data.lat_lon.lon_min],
            [res.data.lat_lon.lat_max, res.data.lat_lon.lon_max],
          ];
          satelliteLayer[i] = L.imageOverlay(imageUrl, imageBounds);
        });
      }
    if (props.satellite) {
      container.addLayer(satelliteLayer[props.date]);
    }
    return () => {
      if (container.hasLayer(satelliteLayer[props.date]))
        container.removeLayer(satelliteLayer[props.date]);
    };
  }, [props.satellite, props.date, container]);
  return null;
};

const mapStateToProps = (state) => {
  return {
    satellite: state.satellite,
    date: state.date,
    loadingSatellite: state.loadingSatellite,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    LoadingSatellite: (e) => {
      dispatch({ type: "LOADINGSATELLITE", payLoad: e });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SatelliteLayer);
