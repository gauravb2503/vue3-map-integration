<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
</script>

<template>
  <Header />
  <RouterView style="margin-top: 20px;"/>
  <Footer />
</template>

<style scoped>

</style>
