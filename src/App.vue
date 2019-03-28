<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PermissionComponent />
  </div>
</template>

<script>
import PermissionComponent from './components/PermissionComponent.vue'

export default {
  name: 'app',
  components: {
    PermissionComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
