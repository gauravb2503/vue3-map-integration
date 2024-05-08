<template>
  <div class="map" ref="mapElement" id="map"></div>
</template>

<script setup lang="ts">
import 'ol/ol.css';
import { onMounted, ref, watch } from 'vue';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

const mapElement = ref<HTMLElement | null>(null);
const zoom = ref(9);
const center = ref<number[]>([]);
const coordinates = ref<number[]>([]);

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      coordinates.value = [longitude, latitude];
      center.value = [longitude, latitude];

      const map = new Map({
        target: mapElement.value,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat(center.value),
          zoom: zoom.value
        })
      });

      const marker = new Feature({
        geometry: new Point(fromLonLat(coordinates.value))
      });

      const markerStyle = new Style({
        image: new Icon({
          src: 'https://openlayers.org/en/latest/examples/data/icon.png'
        })
      });

      marker.setStyle(markerStyle);

      const markerOverlay = new Overlay({
        element: document.createElement('div'),
        positioning: 'center-center'
      });
      map.addOverlay(markerOverlay);
      markerOverlay.setPosition(fromLonLat(coordinates.value));

      const markerLayer = new VectorLayer({
        source: new VectorSource({
          features: [marker]
        })
      });
      map.addLayer(markerLayer);

      map.getView().setCenter(fromLonLat(center.value));
      map.getView().setZoom(zoom.value);

      watch([center, zoom, coordinates], ([newCenter, newZoom, newCoordinates]) => {
        map.getView().setCenter(fromLonLat(newCenter));
        map.getView().setZoom(newZoom);
        marker.setGeometry(new Point(fromLonLat(newCoordinates)));
        markerOverlay.setPosition(fromLonLat(newCoordinates));
      });
    },
    (error) => {
      console.error('Error getting user location:', error);
    }
  );
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>
