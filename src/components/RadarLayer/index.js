import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import * as L from "leaflet";
import { connect } from "react-redux";
import axios from "axios";
import "leaflet-velocity";

const RadarLayer = (props) => {
  const context = useLeafletContext();
  const container = context.map;
  useEffect(() => {
    if (props.radar) {
      const url = `https://api-redemet.decea.mil.br/produtos/radar/maxcappi?api_key=gdkP7S0gy9sB4JsOLoYe34D52CGyrDzZK3xAWe80&data=202102190${props.date}`;
      var myLayerGroup = L.layerGroup();
      axios
        .get(url)
        .then((res) => {
          var res = res.data;
          for (var i = 0; i < res.data.radar[0].length; i++) {
            var imageBounds = [
              [res.data.radar[0][i].lat_min, res.data.radar[0][i].lon_min],
              [res.data.radar[0][i].lat_max, res.data.radar[0][i].lon_max],
            ];
            var imageUrl = res.data.radar[0][i].path;
            if (imageUrl != undefined) {
              var layer_radar = L.imageOverlay(imageUrl, imageBounds);
              myLayerGroup.addLayer(layer_radar);
            }
          }
        })
        .then(() => {
          container.addLayer(myLayerGroup);
        });
    }
    return () => {
      console.log(container.hasLayer(myLayerGroup));
      if (container.hasLayer(myLayerGroup)) container.removeLayer(myLayerGroup);
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
