<template>
  <div class="search">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {VBtn, VList, VListItem} from 'vuetify/lib/components'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'search',
  components: {
    'v-btn': VBtn,
    'v-list': VList,
    'v-list-item': VListItem,
  },
  methods: {
    ...mapMutations('search', [
      'addImage',
    ]),
  },
  computed: {
    ...mapState('search', [
      'title',
      'todos',
    ]),
    // mix the getters into computed with object spread operator
    ...mapGetters('home', [
      'doneTodos',
    ]),
  },
})
</script>
