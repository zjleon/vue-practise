<template>
  <baidu-map
    class="map"
    :ak="bmapKey"
    :center=center
    :zoom=zoom
    @ready=ready
  >
    <p @click=infoWindowOpen>open info window</p>
    <p @click=showRoute>show route</p>
    <bm-marker :position="{lng: 116.434, lat: 39.915}" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="marker1" :labelStyle="{color: 'blue', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
    <bm-info-window
      :position="parking.position"
      :title="parking.name"
      :show="parking.showInfo"
      @close="infoWindowClose"
      @open="infoWindowOpen"
    >
      <p>{{parking.stall_state}}</p>

      <button @click="clear">Clear</button>
    </bm-info-window>
    <bm-traffic :predictDate="{weekday: 5, hour: 14}">
    </bm-traffic>
    <bm-driving
      v-if="route.show"
      :start="route.start"
      :end="route.end"
      startCity="北京"
      endCity="北京"
      :auto-viewport="true"
      :panel=false
      @searchcomplete="onSearchResult"
      ></bm-driving>
    <bm-view class="mapView"></bm-view>
  </baidu-map>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import {GeoPoint, BMapModule} from '@/store/BMap'
import bmap from 'vue-baidu-map'

Vue.use(bmap, {
  ak: BMapModule.state.bMapKey,
})

export default Vue.extend({
  name: 'bmap',
  data() {
    return {
      center: {lng: 116.404, lat: 39.915},
      zoom: 14,
      parking: {
        showInfo: true,
        name: 'Recommand parking place 1',
        type: 0,
        price: 2,
        charge_period: 0.5,
        position: {lng: 116.404, lat: 39.925},
        stall_state: 'sufficent stall',
      },
      route: {
        show: false,
        start: {lng: 116.404, lat: 39.915},
        end: {lng: 116.444, lat: 39.965},
      },
    }
  },
  methods: {
    ready({BMap, map}: {BMap: any, map: any}) {
      // console.log(111, BMap, map)
    },
    onSearchResult(results: any) {
      console.log(333, results)
    },
    infoWindowClose(e: Event) {
      this.parking.showInfo = false
    },
    infoWindowOpen(e: Event) {
      this.parking.showInfo = true
    },
    showRoute(e: Event, endPoint: GeoPoint, startPoint: GeoPoint) {
      const newRoute = Object.assign({}, this.route)
      newRoute.show = true
      if (startPoint) {
        newRoute.start = startPoint
      }
      if (endPoint) {
        newRoute.end = endPoint
      }
    },
    clear() {
      this.parking.stall_state = ''
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
}
.mapView {
  height: 300px;
}
</style>