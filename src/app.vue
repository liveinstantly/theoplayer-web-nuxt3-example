<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.theoplayer.com/dash/theoplayer/ui.css'
    }
  ],
  script: [
    {
      type: "text/javascript",
      src: "https:/cdn.theoplayer.com/dash/theoplayer/THEOplayer.js",
      body: true,
    },
  ],
});
</script>

<template>
  <div>
    <Welcome />
  </div>
</template>
