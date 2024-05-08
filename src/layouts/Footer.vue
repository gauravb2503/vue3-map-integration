<template>
    <footer class="footer" :style="getBackgroundColor()">
      <p>Created with love ❤️ by Gaurav Bhandari</p>
    </footer>
  </template>
  
  <script lang="ts" setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    const currentRoute = useRoute();
    const currentItem = ref(currentRoute.name || '');
    function getBackgroundColor() {
      let color = '';
      if (currentItem.value === 'Leaflet') {
        color = 'green'
      } else if (currentItem.value === 'Mapbox') {
        color = 'red'
      } else {
        color = '#333'
      }
      return {
        background: color
      }
    }
    watch(currentRoute, (to, __from) => {
        currentItem.value = to.name || ''
    })
  </script>
  
  <style scoped>
  .footer {
    text-align: center;
    padding: 20px 0;
    color: white;
  }
  </style>
  