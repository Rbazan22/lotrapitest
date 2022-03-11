<script setup>
import Nav from "./components/Nav.vue";
import Index from "./pages/index.vue"
</script>

<template>
  <Nav />
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

