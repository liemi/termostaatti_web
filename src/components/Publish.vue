<template>
  <div class="publish">
    <button @click="publish1">Publish1 (Sub1 + Sub3)</button>
    <button @click="publish2">Publish2 (Sub2 + Sub3)</button>
  </div>
</template>

<script>
export default {
  methods: {
    publish1 () {
      this.$mqtt.publish('thermostat/publish1', 'message to Sub1')
    },
    publish2 () {
      this.$mqtt.publish('thermostat/publish2', 'message to Sub2')
    }
  },
  mqtt: {
    'thermostat/publish1' (data, topic) {
      console.log(topic + ': ' + String.fromCharCode.apply(null, data))
    },
    'thermostat/publish2' (data, topic) {
      console.log(topic + ': ' + String.fromCharCode.apply(null, data))
    }
  }
}
</script>