<template>
    <div>
      <input
        type="text"
        v-model="newTask"
        @keyup.enter="submitTask"
        placeholder="Add a new task"
      />
      <button @click="submitTask">Add Task</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
      };
    },
    methods: {
      submitTask() {
        if (this.newTask.trim()) {
          this.$emit('add-task', this.newTask);
          this.newTask = ''; 
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-right: 10px;
  }
  </style>
  