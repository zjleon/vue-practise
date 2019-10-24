<template>
  <bm-marker :position="position" @click="onMarkerClick">
    <bm-label
      :content="text"
      :labelStyle="{color: 'blue', fontSize : '24px'}"
      :offset="{width: -35, height: 30}"
       @click="onMarkerClick"
      />
  </bm-marker>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MarkerWithText',
  props: {
    position: Object,
    text: String,
    onClick: Function,
  },
  methods: {
    onMarkerClick(e: Event) {
      const endPoint = {
        lng: this.position.lng,
        lat: this.position.lat,
      }
      this.onClick(e, endPoint)
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
