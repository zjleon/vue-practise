<template>
  <baidu-map
    class="map"
    :ak=bmapKey
    :center=center
    :zoom=zoom
    :ready=ready
  ></baidu-map>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import BaiduMap from 'vue-baidu-map/components/map/Map'
export default Vue.extend({
  name: 'bmap',
  data() {
    return {
      center: {lng: 116.404, lat: 39.915},
      zoom: 14,
    }
  },
  components: {
    'baidu-map': BaiduMap,
  },
  methods: {
    ready(BMap, map) {
      console.log(111, BMap, map)
    },
  },
  computed: {
    ...mapState([
      'bmapKey',
    ]),
    // ...mapGetters([
    // ]),
  },
})
</script>

<style>
.map {
  width: 100%;
  height: 300px;
}
</style>