import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { MapContainer } from "react-leaflet";
import VerticalMenu from "./components/VerticalMenu";
import HorizontalMenu from "./components/HorizontalMenu";
import "leaflet-velocity";
import GlobalWind from "./components/GlobalWind";
import "react-leaflet";
import "esri-leaflet";
import { BasemapLayer } from "react-esri-leaflet";
import SatelliteLayer from "./components/SatelliteLayer";
import RadarLayer from "./components/RadarLayer";
import TestWind from "./components/TestWind";
import SulsudesteWind from "./components/SulsudesteWind";

// Criando store do redux
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <div class="app">
      <HorizontalMenu />
      <VerticalMenu />
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[-23.5505, -53]}
        zoom={3}
        attributionControl={false}
        addAttribution={"testando"}
        scrollWheelZoom={true}
      >
        <BasemapLayer name="DarkGray" />
        <GlobalWind />
        <TestWind />
        <SulsudesteWind />
        <SatelliteLayer />
        <RadarLayer />
      </MapContainer>
    </div>
  </Provider>,
  document.getElementById("root")
);
