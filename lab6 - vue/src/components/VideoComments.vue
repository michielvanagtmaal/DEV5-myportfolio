<script setup>
import { onMounted, reactive, ref } from 'vue';

let username = reactive ([]);
let texts = reactive ([]);

// onmounted
onMounted(() => {
  const api_url = 'https://lab5-p379.onrender.com/api/v1/messages/';
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
      username.value = data[0].user;
      for (let i = 0; i < data.length; i++) {
        if (data[i].user == username.value) {
          texts.push(data[i].text);
          console.log(username.value);
        }
      }

      

    })
});

let comment = "";
const addComment = () => {
  texts.push(comment);
}


</script>

<template>
  <div class="video__comments">
  <div class="container" v-for="text in texts" :key="text">
   <h4> {{ username.value }} </h4>
   <p> {{ text }} </p>
  </div>
   

  <div class="input">
    
  <input type="text" v-model="comment" placeholder="type your comment..." >
  <button @click="addComment">Add</button>
</div>
</div>
  
</template>

<style scoped>
    .video__comments {
        padding: 0 1rem;
    }
</style>
