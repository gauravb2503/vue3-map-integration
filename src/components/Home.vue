<template>
    <div class="map-integration-page">
        <div class="header">
            <h1 class="page-title">Mapping Library Integration</h1>
            <p class="page-description">
                Welcome to our Proof of Concept (POC) project, where we aim to showcase the integration of different
                mapping libraries like Leaflet, OpenLayers, and MapBox.
            </p>
        </div>
        <div class="libraries">
            <div class="library leaflet" @click="redirectToPage('Leaflet')">
                <h2 class="library-title">Leaflet</h2>
                <p class="library-description">
                    Leaflet is a lightweight open-source JavaScript library for interactive maps. It's designed with
                    simplicity, performance, and usability in mind, making it ideal for web and mobile applications.
                    With Leaflet, you can easily add markers, tooltips, custom icons, and much more to your maps.
                </p>
            </div>
            <div class="library openlayers" @click="redirectToPage('Open-layers')">
                <h2 class="library-title">OpenLayers</h2>
                <p class="library-description">
                    OpenLayers is a powerful open-source JavaScript library for displaying and interacting with maps on
                    web pages. It provides extensive support for various map projections, vector layers, raster layers,
                    and overlays. OpenLayers offers rich features, including support for tooltips, markers, and custom
                    icons, making it a versatile choice for mapping applications.
                </p>
            </div>
            <div class="library mapbox" @click="redirectToPage('Mapbox')">
                <h2 class="library-title">MapBox</h2>
                <p class="library-description">
                    MapBox is a mapping platform that offers a range of tools and APIs for building custom maps and
                    location-based applications. It provides powerful mapping solutions with support for styling,
                    geocoding, routing, and much more. With MapBox, you can create stunning visualizations and integrate
                    advanced features like tooltips, markers, and custom icons into your maps effortlessly.
                </p>
            </div>
        </div>
        <div class="features-highlight">
            <h2 class="highlight-title">Key Features</h2>
            <ul class="highlight-list">
                <li class="highlight-item">Current Location</li>
                <li class="highlight-item">Marker (Single / Multiple)</li>
                <li class="highlight-item">Tooltip Support</li>
                <li class="highlight-item">Custom Icons</li>
                <li class="highlight-item">Polygons for area marking</li>
            </ul>
        </div>
        <div v-if="showNote" class="temp-note">
            <p>For showing routing between two places we can use LRoutingMachine from leaflet.</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue'; 
const router = useRouter();
const showNote = ref(true);
const redirectToPage: Function = (page: string) => {
    router.push({ name: page })
}
    const showTemporaryNote = () => {
        showNote.value = true;
        setTimeout(() => {
            showNote.value = false;
        }, 5000);
    }

    showTemporaryNote();
</script>
<style scoped>
.map-integration-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    text-align: center;
}

.page-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
    /* Set font color to black for the page title */
}

.page-description {
    font-size: 18px;
    margin-bottom: 30px;
}

.libraries {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    cursor: pointer;
}

.library {
    width: 30%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.library:hover {
    transform: translateY(-5px);
}

.library-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
    /* Set font color to white for the library title */
}

.library-description {
    font-size: 16px;
    color: white;
    /* Set font color to white for all libraries */
}

.features-highlight {
    margin-top: 30px;
    text-align: center;
}

.highlight-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.highlight-list {
    list-style-type: none;
    padding: 0;
}

.highlight-item {
    font-size: 18px;
    margin-bottom: 5px;
}

.leaflet {
    background-color: #4CAF50;
    /* Green */
}

.openlayers {
    background-color: rgb(51, 51, 51);
    /* Dark Grey */
}

.mapbox {
    background-color: #FF5733;
    /* Red */
}

.temp-note {
    position: fixed;
    bottom: 200px;
    left: 90%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}
</style>