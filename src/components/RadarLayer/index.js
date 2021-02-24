import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

// Função para cálcular as horas passadas
const RequestDate = (requestDate, j) => {
  requestDate.setHours(requestDate.getHours() - 6 + j);
  let year = requestDate.getFullYear();
  let month = requestDate.getMonth();
  let day = requestDate.getDate();
  let hour = requestDate.getHours();
  if (hour < 10) hour = `0${hour}`;
  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;
  return `${year}${month}${day}${hour}`;
};

const RadarLayer = (props) => {
  let myLayerGroup = [];
  // Função que detecta o contexto, i.e., o mapa que carregara as layers
  const context = useLeafletContext();
  const container = context.map;
  // Análogo ao ComponentDidMount e o ComponentWillMount
  // Para saber mais: https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    // Condicional para carregar apenas uma vez
    if (myLayerGroup.length === 0) {
      let requestDate = new Date();
      for (let j = 1; j <= 6; j++) {
        let requestHour = RequestDate(requestDate, j);
        let url = `https://api-redemet.decea.mil.br/produtos/radar/maxcappi?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=${requestHour}`;
        myLayerGroup[j] = L.layerGroup();
        // Requisição do georefenciamento e das imagens
        axios.get(url).then((res) => {
          res = res.data;
          // Agrupando o conjunto de radares na mesma layer
          for (let i = 0; i < res.data.radar[0].length; i++) {
            var imageBounds = [
              [res.data.radar[0][i].lat_min, res.data.radar[0][i].lon_min],
              [res.data.radar[0][i].lat_max, res.data.radar[0][i].lon_max],
            ];
            var imageUrl = res.data.radar[0][i].path;
            if (imageUrl != undefined) {
              var layer_radar = L.imageOverlay(imageUrl, imageBounds);
              // Adicionando a layer ao meu LayerGroup
              myLayerGroup[j].addLayer(layer_radar);
            }
          }
        });
      }
    }
    // Se cliente solicitou, adicionar ao container (mapa)
    if (props.radar) {
      container.addLayer(myLayerGroup[props.date]);
    }
    return () => {
      if (container.hasLayer(myLayerGroup[props.date]))
        container.removeLayer(myLayerGroup[props.date]);
    };
  });
  return null;
};

// Mapeia os estados para propriedades (redux)
const mapStateToProps = (state) => {
  return {
    radar: state.radar,
    date: state.date,
  };
};

export default connect(mapStateToProps)(RadarLayer);
