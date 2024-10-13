<template>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="$emit('delete-task', index)">Delete</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array,
    },
  };
  </script>
  
  <style scoped>
  li {
    margin-bottom: 5px;
  }
  button {
    margin-left: 10px;
  }
  </style>
  