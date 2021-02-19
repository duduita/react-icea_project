import React, { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";
import GlobalWind from "../GlobalWind";
import "react-leaflet";
import "esri-leaflet";
import { BasemapLayer } from "react-esri-leaflet";
import SatelliteLayer from "../SatelliteLayer";
import RadarLayer from "../RadarLayer";

const Layers = (props) => {
  const Square = () => {
    const context = useLeafletContext();
    const bounds = L.latLng([51.505, -0.09]).toBounds(1000000);
    const square = new L.Rectangle(bounds);
    const container = context.map;
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
      <BasemapLayer name="DarkGray" />
      <GlobalWind />
      <SatelliteLayer />
      <RadarLayer />
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
