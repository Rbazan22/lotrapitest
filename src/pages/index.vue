<script setup>
import { useAPI } from "../composables/useAPI.js";

const { characters, character, getCharacters } = useAPI();
character.value = "";
</script>

<template>
  <div class="mt-16">
    <ul class="grid grid-cols-3 gap-12">
      <router-link
        class="p-4 bg-white rounded-lg shadow-2xl cursor-pointer hover:scale-105"
        v-for="character in characters"
        :key="character.id"
        :to="'/character/${character.id}'"
      >
        <div>
          <h1 class="text-xl font-semibold tracking-tight">
            {{ character.name }}
          </h1>
          <p>Status: {{ character.status }}</p>
          <p>Gender: {{ character.gender }}</p>
          <p>Species: {{ character.species }}</p>
          <p>Origin: {{ character.origin.name }}</p>
          <p>Location of Origin: {{ character.location.name }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
