<script setup>
import { useRoute } from "vue-router";
import { useAPI } from "../composables/useAPI";

const route = useRoute();

const { id } = route.params;

const { character, getCharacter } = useAPI();

getCharacter();
</script>

<template>
  <div
    v-if="character"
    class="bg-white text-center mt-15 max-w-md mx-auto py-8 rounded-lg"
  >
    <h1 class="text-xl font-semibold tracking-tight">
      {{ character.name }}
    </h1>
    <p>Status: {{ character.status }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Origin: {{ character.origin.name }}</p>
    <p>Location of Origin: {{ character.location.name }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
