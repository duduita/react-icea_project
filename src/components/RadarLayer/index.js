import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

var myLayerGroup = [];
const RadarLayer = (props) => {
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    if (myLayerGroup.length === 0) {
      let requestDate = new Date();
      for (let j = 1; j <= 6; j++) {
        requestDate.setHours(requestDate.getHours() - 6 + j);
        let year = requestDate.getFullYear();
        let month = requestDate.getMonth();
        let day = requestDate.getDate();
        let hour = requestDate.getHours();
        if (hour < 10) hour = `0${hour}`;
        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;
        let requestHour = `${year}${month}${day}${hour}`;
        let url = `https://api-redemet.decea.mil.br/produtos/radar/maxcappi?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=${requestHour}`;
        myLayerGroup[j] = L.layerGroup();
        axios.get(url).then((res) => {
          res = res.data;
          for (let i = 0; i < res.data.radar[0].length; i++) {
            var imageBounds = [
              [res.data.radar[0][i].lat_min, res.data.radar[0][i].lon_min],
              [res.data.radar[0][i].lat_max, res.data.radar[0][i].lon_max],
            ];
            var imageUrl = res.data.radar[0][i].path;
            if (imageUrl != undefined) {
              var layer_radar = L.imageOverlay(imageUrl, imageBounds);
              myLayerGroup[j].addLayer(layer_radar);
            }
          }
        });
      }
    }
    if (props.radar) {
      console.log(myLayerGroup[props.date]);
      container.addLayer(myLayerGroup[props.date]);
    }
    return () => {
      console.log(container.hasLayer(myLayerGroup[props.date]));
      if (container.hasLayer(myLayerGroup[props.date]))
        container.removeLayer(myLayerGroup[props.date]);
    };
  });
  return null;
};

const mapStateToProps = (state) => {
  return {
    radar: state.radar,
    date: state.date,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RadarLayer);
