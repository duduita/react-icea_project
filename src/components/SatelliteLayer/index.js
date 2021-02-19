import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

var satelliteLayer = [];

const SatelliteLayer = (props) => {
  // https://www.robinwieruch.de/react-hooks-fetch-data
  useEffect(() => {
    for (var i = 1; i < 6; i++) {
      const url = `https://api-redemet.decea.mil.br/produtos/satelite/realcada?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=202102090${i}`;
      axios.get(url).then((res) => {
        console.log("a");
        props.LoadingSatellite(props.loadingSatellite);
        console.log("loading " + props.loadingSatellite);
        var res = res.data;
        var imageUrl = res.data.satelite[0].path;
        var imageBounds = [
          [res.data.lat_lon.lat_min, res.data.lat_lon.lon_min],
          [res.data.lat_lon.lat_max, res.data.lat_lon.lon_max],
        ];
        satelliteLayer[i] = L.imageOverlay(imageUrl, imageBounds);
        props.LoadingSatellite(props.loadingSatellite);
        console.log("loading " + props.loadingSatellite);
      });
    }
  }, []);
  const context = useLeafletContext();
  const container = context.map;

  useEffect(() => {
    console.log("b");
    if (props.satellite && !props.loadingSatellite) {
      container.addLayer(satelliteLayer[props.date]);
    }
    // return () => {
    //   console.log(container.hasLayer(satelliteLayer[props.date]));
    //   if (container.hasLayer(satelliteLayer[props.date]))
    //     container.removeLayer(satelliteLayer[props.date]);
    // };
  });
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
