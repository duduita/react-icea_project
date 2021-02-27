import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

// Função para cálcular as horas passadas
const RequestDate = (requestDate, i) => {
  requestDate.setHours(requestDate.getHours() - 6 + i);
  let day = requestDate.getDate();
  let hour = requestDate.getHours();
  let month = requestDate.getMonth();
  let year = requestDate.getFullYear();
  if (day < 10) day = `0${day}`;
  if (hour < 10) hour = `0${hour}`;
  if (month < 10) month = `0${month}`;
  return `${year}${month}${day}${hour}`;
};

let satelliteLayer = [];
const SatelliteLayer = (props) => {
  // Array que irá guardar as requisições

  // Percebe o contexto (mapa) em que se está
  const context = useLeafletContext();
  const container = context.map;

  useEffect(() => {
    // Carrega as requisições apenas uma vez
    if (satelliteLayer.length === 0) {
      for (let i = 1; i <= 6; i++) {
        let requestDate = new Date();
        let requestHour = RequestDate(requestDate, i);
        const url = `https://api-redemet.decea.mil.br/produtos/satelite/realcada?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=${requestHour}`;
        axios.get(url).then((res) => {
          res = res.data;
          let imageUrl = res.data.satelite[0].path;
          let imageBounds = [
            [res.data.lat_lon.lat_min, res.data.lat_lon.lon_min],
            [res.data.lat_lon.lat_max, res.data.lat_lon.lon_max],
          ];
          // Guarda as layers no array satelliteLayer[]
          satelliteLayer[i] = L.imageOverlay(imageUrl, imageBounds);
        });
      }
    }

    // Caso acionado
    if (props.satellite) {
      // Adicionar a layer respectiva a data
      container.addLayer(satelliteLayer[props.satelliteDate]);
    }
    return () => {
      // A cada renderização remove a layer
      if (container.hasLayer(satelliteLayer[props.satelliteDate]))
        container.removeLayer(satelliteLayer[props.satelliteDate]);
    };
  });
  return null;
};

// Mapeia os states para props (redux)
const mapStateToProps = (state) => {
  return {
    satelliteDate: state.satelliteDate,
    satellite: state.satellite,
  };
};

// Conecta o componente com o reducer
export default connect(mapStateToProps)(SatelliteLayer);
