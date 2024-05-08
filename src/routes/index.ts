import { createWebHistory, createRouter } from 'vue-router';
import Leaflet from '../components/Leaflet.vue';
import Mapbox from '../components/Mapbox.vue';
import OpenLayers from '../components/OpenLayers.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/leaflet', component: Leaflet, name: 'Leaflet' },
  { path: '/mapbox', component: Mapbox, name: 'Mapbox'  },
  { path: '/open-layers', component: OpenLayers, name: 'Open-layers'  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;