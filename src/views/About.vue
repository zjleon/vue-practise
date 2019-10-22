<template>
  <div class="about">
    <h1 v-on:click="increase">{{a}}, {{b}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      a: 1,
    }
  },
  computed: {
    b(): number {
      return this.a + 1
    },
  },
  watch: {
    a() {
      // console.log(this.a + 10);
    },
  },
  methods: {
    increase() {
      this.a += 1
    },
  },
})
</script>
