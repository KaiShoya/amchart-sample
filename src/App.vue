<template>
  <div id="app" class="columns">
    <Menu class="column is-one-quarter"></Menu>
    <WorldMap class="column"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import WorldMap from './components/WorldMap.vue'
import JapanMap from './components/JapanMap.vue'

export default {
  name: 'app',
  components: {
    Menu,
    WorldMap,
    JapanMap,
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
