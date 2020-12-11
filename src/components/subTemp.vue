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
    <div class="row">
      <div class="col "></div>
      <div class="col-6 status-bar">
        <img class="status-icon heater-icon" src="../assets/heater.png" v-if="heating_on > 0">
        <img class="status-icon" src="../assets/controls.png" v-if="override_on > 0">
      </div>
      <div class="col "></div>
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
      override_on: 0,
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
    },
    'thermostat/overrideOn' (data) {
      this.override_on = JSON.parse(data).value;
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
.status-icon {
  width: 33px;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 3px;
}
.status-bar {
  margin-top: 30px;
  background-color: rgba(234, 240, 241, 0.356);
  min-height: 40px;
}
</style>