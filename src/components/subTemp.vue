<template>
  <div>
    <div class="row temp-row">
      <div class="col-9 label">
        <img class="icons" src="../assets/thermometer.png">
        Current temperature
      </div>
      <div class="col value">
        {{current_temp}} °C
      </div>
    </div>
    <div class="row temp-row">
      <div class="col-9 label">
        <img class="icons" src="../assets/target.png">
        Target temperature
      </div>
      <div class="col value">
        {{targe_temp}} °C
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      targe_temp: '0',
      current_temp: '0'
    }
  },
  mqtt: {
    'thermostat/targetTemp' (data) {
      this.targe_temp = JSON.parse(data).value; 
    },
    'thermostat/currentTemp' (data) {
      this.current_temp = JSON.parse(data).value
    }
  }
}
</script>

<style>
.temp-row {
  margin-bottom: 1em;
}
.label {
  font-size: 20px;
}
.value {
  font-size: 20px;
  text-align: left;
}
.icons {
  width: 25px;
  margin-right: 10px;
}
</style>