<script setup>
import { ref, reactive, onMounted, } from 'vue';
import 'animate.css';

let src = ref('');
let videos = reactive ({videos: [] });
let animation = ref('');


// onmounted

onMounted(() => {
  let api_url = 'http://127.0.0.1:5173/tiktok.json';
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
      src.value = data.videos[0].video;
      videos.videos = data.videos;

    });
});

const nextVideo = () => {
    animation.value = 'animate__fadeOut'
    setTimeout(() => {
        videos.videos.shift();
        src.value = videos.videos[0].video;
        animation.value = 'animate__fadeIn'
    }, 1000);
  src.value = videos.videos[1].video;
}


onMounted(() => {
  console.log('VideoPlayer.vue mounted')
});
</script>

<template>
  <div class="video">
<div class="controls">
    <a @click.prevent="nextVideo" href="#" class="controls__next">↓</a>
</div>
    <video :class="animation" class="animate__animated" :src="src" controls autoplay muted> 
    </video>

  </div>
  
</template>

<style scoped>

.video {
    position: relative;
}
.controls {
    position: absolute;
    right: 2em;
    top: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.controls__next {
    color: black;
    font-size: 2em;
    background-color: white;
    text-decoration: none;
}
video {
    max-width: 100%;
    max-height: 100vh;
}

</style>
