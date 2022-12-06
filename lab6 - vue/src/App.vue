<script setup>
// import VideoPlayer.vue
import VideoPlayer from './components/VideoPlayer.vue'
import VideoDetails from './components/VideoDetails.vue'
import VideoComments from './components/VideoComments.vue'
</script>

<template>
  <div class="app">
    <VideoPlayer />
    <VideoDetails />
    <VideoComments />
  </div>
  
</template>

<style scoped>
 .app { 
  display: grid;
  grid-template-columns: 6fr 4fr 2fr;
 }

</style>
