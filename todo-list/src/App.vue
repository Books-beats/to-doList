<template>
  <div id="app">
    <header>
      <h1>Tick Off</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/add-task">Add Task</router-link> <!-- Link to Add Task -->
      </nav>
    </header>

    <main>
      <router-view /> <!-- Render the active route here -->
    </main>

    <footer>
      <p>© 2024 Tick Off. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
