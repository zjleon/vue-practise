<template>
  <baidu-map
    class="map"
    :ak=bmapKey
    :center=center
    :zoom=zoom
    :ready=ready
  >
    <p>text</p>
    <bm-marker :position="{lng: 116.404, lat: 39.915}" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="Tiananmen" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
    <bm-traffic :predictDate="{weekday: 5, hour: 14}">
    </bm-traffic>
    <bm-driving
      :start=center
      end="新街口"
      startCity="北京"
      endCity="北京"
      :auto-viewport="true"
      :panel=false
      @searchcomplete="onSearchResult"
      ></bm-driving>
    <bm-view class="mapView"></bm-view>
  </baidu-map>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import BaiduMap from 'vue-baidu-map/components/map/Map'
import MapView from 'vue-baidu-map/components/map/MapView'
import Marker from 'vue-baidu-map/components/overlays/Marker'
import Label from 'vue-baidu-map/components/overlays/Label'
import Driving from 'vue-baidu-map/components/search/Driving'
import Traffic from 'vue-baidu-map/components/layers/Traffic'
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
    'bm-view': MapView,
    'bm-marker': Marker,
    'bm-label': Label,
    'bm-driving': Driving,
    'bm-traffic': Traffic,
  },
  methods: {
    ready(BMap, map) {
      console.log(111, BMap, map)
    },
    onSearchResult(results) {
      console.log(333, results)
    }
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
}
.mapView {
  height: 300px;
}
</style>