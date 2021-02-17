import React, { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";

const SatelliteLoader = () => {
  var imageBounds;
  var imageUrl;
  var satellite_src = [];
  const url =
    "https://api-redemet.decea.mil.br/produtos/satelite/realcada?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=2021020905";
  const getAllNotes = () => {
    axios.get(url).then((res) => {
      imageBounds = [
        [res.data.data.lat_lon.lat_min, res.data.data.lat_lon.lon_min],
        [res.data.data.lat_lon.lat_max, res.data.data.lat_lon.lon_max],
      ];
      imageUrl = res.data.data.satelite[0].path;
      satellite_src.push({ location: imageBounds, src: imageUrl });
    });
  };
  getAllNotes();
  return null;
};

const GlobalWind = () => {
  const url = "../data/global.json";
  const context = useLeafletContext();

  axios.get(url).then((res) => {
    var data = res.data;
    var velocityLayer2 = L.tileLayer({
      displayValues: true,
      displayOptions: {
        velocityType: "Wind",
        displayPosition: "bottomleft",
        displayEmptyString: "No wind data",
      },
      data: data,
      maxVelocity: 25,
    });
    const container = context.layerContainer || context.map;
    container.addLayer(velocityLayer2);
  });

  return null;
};

const Layers = (props) => {
  const Square = () => {
    const context = useLeafletContext();
    const bounds = L.latLng([51.505, -0.09]).toBounds(1000000);
    const square = new L.Rectangle(bounds);
    const container = context.layerContainer || context.map;
    useEffect(() => {
      if (props.windMenu) {
        container.addLayer(square);
      }

      return () => {
        container.removeLayer(square);
      };
    });
    return null;
  };

  return (
    <div>
      <Square />
      <GlobalWind />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    windMenu: state.windMenu,
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

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
