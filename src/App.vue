<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <SearchEngine></SearchEngine>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SearchEngine from './components/SearchEngineOld.vue'
import SearchEngine from './components/SearchEngine.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SearchEngine
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  background: url('~@/assets/background.png') no-repeat;
  background-size: 100% 100%
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
