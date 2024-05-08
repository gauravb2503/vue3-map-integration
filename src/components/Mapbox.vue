<template>
    <main>
        <div v-if="center && coordinates" ref="mapContainer" id="map" class="map-container"></div>
    </main>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl';
import { ref, watch } from 'vue';

const mapContainer = ref<HTMLElement | null>(null);
let zoom = ref(9);
let center = ref<number[]>([]);
let coordinates = ref<number[]>([]);

watch([center, coordinates], ([newCenter, newCoordinates]) => {
    if (newCenter.length === 0 || newCoordinates.length === 0) return;
    setupMap(newCenter);
});

navigator.geolocation.getCurrentPosition(function(position) {
    const { latitude, longitude } = position.coords;
    coordinates.value = [longitude, latitude];
    center.value = [longitude, latitude];
}, function(error) {
    console.error('Error getting user location:', error);
});

const setupMap = (newCenter: number[]) => {
    if (!mapContainer.value) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
        container: mapContainer.value,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: newCenter,
        zoom: zoom.value,
    });
    map.on('load', () => {
        new mapboxgl.Marker()
            .setLngLat(coordinates.value)
            .addTo(map);
    });
    // const navControl = new mapboxgl.NavigationControl();
    // map.addControl(navControl, 'top-right');
};
</script>
<style>
main {
    height: 90vh;
    width: 90vw;
}
#map {
    height: 80vh;
    width: 90vw;
}
</style>
