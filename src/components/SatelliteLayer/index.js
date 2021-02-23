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
    console.log("useeffect");
    if (satelliteLayer.length !== 0) console.log(satelliteLayer);

    if (satelliteLayer.length === 0) {
      console.log("INICIANDO");
      for (let i = 1; i <= 6; i++) {
        console.log("COLETANDO");
        let requestDate = new Date();
        requestDate.setHours(requestDate.getHours() - 6 + i);
        let year = requestDate.getFullYear();
        let month = requestDate.getMonth();
        let day = requestDate.getDate();
        let hour = requestDate.getHours();
        if (hour < 10) hour = `0${hour}`;
        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;
        var requestHour = `${year}${month}${day}${hour}`;
        const url = `https://api-redemet.decea.mil.br/produtos/satelite/realcada?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=${requestHour}`;
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
    time: state.time,
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
