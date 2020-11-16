<template>
  <div id="app">
    <div class="container main-layer">
      <h1 class="main-title">Thermostat</h1>
      <subTemp></subTemp>
    </div>
  </div>
</template>

<script>
import subTemp from './components/subTemp'

export default {
  name: 'App',
  components: {
    subTemp
  },
  mounted () {
    this.$mqtt.subscribe('thermostat/#')
  }
}
</script>

<style>
body {
  background-image: url(assets/bg1.jpeg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.main-layer {
  background-color: #000000a8;
  color: rgb(224, 224, 224);
  padding: 1em;
  padding-bottom: 10em;
}
.main-title {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
