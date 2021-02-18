import "./style.css";
import { MapContainer, TileLayer, Marker, LayersControl } from "react-leaflet";
import VerticalMenu from "../VerticalMenu";
import HorizontalMenu from "../HorizontalMenu";
import Layers from "../Layers";
import React, { useEffect } from "react";

//https://stackoverflow.com/questions/54261651/creating-a-custom-leaflet-layer-control-in-react
//https://stackoverflow.com/questions/62947152/react-leaflet-v3-custom-control
//https://medium.com/trabe/creating-a-react-leaflet-custom-component-using-hooks-5b5b905d5a01

const Map = () => {
  return (
    <div class="app">
      <HorizontalMenu />
      <VerticalMenu />
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[-23.5505, -46.6333]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <Layers />
        <LayersControl>
          <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            {/* <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
          </LayersControl.BaseLayer>
        </LayersControl>
        {/* <Marker position={[51.505, -0.09]}></Marker> */}
      </MapContainer>
    </div>
  );
};

export default Map;
