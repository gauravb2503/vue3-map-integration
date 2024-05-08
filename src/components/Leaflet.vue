<template>
    <main>
        <l-map v-if="coordinates && center" ref="map" :zoom="zoom" :center="center" :useGlobalLeaflet="false">
            <l-tile-layer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
            <!-- Can add Multiple markers  -->
            <l-marker :lat-lng="coordinates" draggable>
                <l-tooltip> Hi! I'm staying here on this location! </l-tooltip>
            </l-marker>
            <l-marker :lat-lng="[29.241992, 79.534723]">
                <l-icon icon-url="https://i.pinimg.com/736x/a7/7e/b0/a77eb0ca20c0b7479422ff131db4a1f5.jpg" :icon-size="[31, 31]" />
                <l-tooltip> This is my school </l-tooltip>
            </l-marker>
            <l-circle-marker :lat-lng="coordinates" :radius="50" />
            <l-control-zoom position="bottomright" zoom-in-text="+" zoom-out-text="-" />
        </l-map>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LCircleMarker, LControlZoom, LTooltip, LIcon } from "@vue-leaflet/vue-leaflet"
import { PointExpression } from 'leaflet';

let zoom = ref(12)
let center = ref<PointExpression>()
let coordinates = ref<PointExpression>()

navigator.geolocation.getCurrentPosition(function(position) {
    const { latitude, longitude } = position.coords;
    coordinates.value = [latitude, longitude];
    center.value = [latitude, longitude];
    console.log(coordinates, center);
}, function(error) {
    console.error('Error getting user location:', error);
});

</script>

<style scoped>
main {
    height: 90vh;
    width: 90vw;
}
</style>
