import { createStore } from "redux";
import { Provider } from "react-redux";
import { MapContainer } from "react-leaflet";
import { BasemapLayer } from "react-esri-leaflet";
import reducer from "./store/reducer";
import VerticalMenu from "./components/VerticalMenu";
import TempLayer from "./components/TempLayer";
import SulsudesteWind from "./components/SulsudesteWind";
import SatelliteLayer from "./components/SatelliteLayer";
import ReactDOM from "react-dom";
import React from "react";
import RadarLayer from "./components/RadarLayer";
import NorteWind from "./components/NorteWind";
import NordesteWind from "./components/NordesteWind";
import HorizontalMenu from "./components/HorizontalMenu";
import "react-leaflet";
import "leaflet-velocity";
import "esri-leaflet";
import "./index.css";

// Criando store do redux
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <div class="app">
      {/* Renderizando Menus*/}
      <HorizontalMenu />
      <VerticalMenu />
      {/* Renderizando Mapa */}
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[-23.5505, -53]} // Coordenadas do centro do mapa
        zoom={3}
        attributionControl={false} // Retirando copyright do leaflet (à posteriori será necessário colocar um icone pelo menos)
        scrollWheelZoom={true}
      >
        {/* Renderizando layer base (DarkGray) */}
        <BasemapLayer name="DarkGray" />
        {/* Renderizando as demais layers (à priori desativadas) */}
        <SulsudesteWind />
        <NorteWind />
        <NordesteWind />
        <RadarLayer />
        <SatelliteLayer />
        <TempLayer />
      </MapContainer>
    </div>
  </Provider>,
  document.getElementById("root")
);
