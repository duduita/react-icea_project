import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import VerticalMenu from "./components/VerticalMenu";

function App() {
  return (
    <div>
      <VerticalMenu />
      <MapContainer
        style={{ height: "50vh", width: "50vh" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </div>
  );
}

export default App;
