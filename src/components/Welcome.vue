<script setup lang="ts">
import Player from "./Player.vue";
import { ref } from "vue";
const source = ref([
  {
    type: "application/x-mpegurl",
    src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
  },
]);
</script>

<template>
  <div class="container">
    <NuxtLogo />
    <h1>Welcome to Nuxt</h1>
    <Player :source="source" v-if="source" />
  </div>
</template>

<style>
body {
  margin: 0;
}

.container {
  height: 100vh;
  width: 100vw;
  background: rgb(1, 42, 53);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: white;
  text-align: center;
  font-family: helvetica, arial, sans-serif;
  font-weight: 400;
}
</style>
