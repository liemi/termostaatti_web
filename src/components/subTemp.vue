<template>
  <div>
    <div class="row temp-row">
      <div class="col-8 label">
        <img class="icons" src="../assets/thermometer.png">
        Current temperature
      </div>
      <div class="col value">
        {{current_temp}} °C
      </div>
    </div>
    <div class="row temp-row">
      <div class="col-8 label">
        <img class="icons" src="../assets/target.png">
        Target temperature
      </div>
      <div class="col value">
        {{targe_temp}} °C
      </div>
    </div>
    <div class="label heater-text" v-if="heating_on > 0">
      <b>Heater ON</b>
      <img class="heater_icon" src="../assets/heater.png">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      targe_temp: '',
      current_temp: '',
      heating_on: 0,
    }
  },
  mqtt: {
    'thermostat/targetTemp' (data) {
      if (JSON.parse(data).value > 1) {
        this.targe_temp = JSON.parse(data).value; 
      }
    },
    'thermostat/currentTemp' (data) {
      if (JSON.parse(data).value > 1) {
        this.current_temp = JSON.parse(data).value;
      }
    },
    'thermostat/heaterOn' (data) {
      this.heating_on = JSON.parse(data).value;
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
.heater_icon {
  width: 33px;
  margin-left: 12px;
  margin-bottom: 10px;
}
.heater-text {
  margin-top: 30px;
  color: rgb(207, 56, 56);
  text-align: center;
}
</style>