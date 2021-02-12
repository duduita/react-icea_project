import "./style.css";
import { MapContainer, TileLayer, Marker, LayersControl } from "react-leaflet";
import VerticalMenu from "../VerticalMenu";
import HorizontalMenu from "../HorizontalMenu";
import React, { Component } from "react";
//https://stackoverflow.com/questions/54261651/creating-a-custom-leaflet-layer-control-in-react
//https://stackoverflow.com/questions/62947152/react-leaflet-v3-custom-control
//https://medium.com/trabe/creating-a-react-leaflet-custom-component-using-hooks-5b5b905d5a01
class Map extends Component {
  componentDidMount() {}

  render() {
    return (
      <div class="app">
        <VerticalMenu />
        <HorizontalMenu />
        <MapContainer
          style={{ height: "100vh", width: "100vh" }}
          center={[51.505, -0.09]}
          zoom={5}
          scrollWheelZoom={false}
        >
          <LayersControl>
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          <Marker position={[51.505, -0.09]}></Marker>
        </MapContainer>
      </div>
    );
  }
}

export default Map;
