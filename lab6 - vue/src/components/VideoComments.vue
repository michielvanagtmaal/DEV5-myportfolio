<script setup>
import { onMounted, reactive, ref } from 'vue';

let users = reactive ({users: [] });
let texts = reactive ({texts: [] });

// onmounted
onMounted(() => {
  const api_url = 'https://lab5-p379.onrender.com/api/v1/messages/';
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        user.value = data.users[0].user;
        text.value = data.texts[0].text;

      

    });
});


</script>

<template>
  <div class="video__comments">
   <h4> {{ user }}</h4>
   <p> {{ text }}</p>
   
  </div>
  
</template>

<style scoped>
    .video__comments {
        padding: 0 1rem;
    }
</style>
