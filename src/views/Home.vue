<template>
  <div class="home">
    <v-button type="primary" @click="addImage">2521421</v-button>
    <h4>{{title}}</h4>
    <img alt="Vue logo" src="../assets/logo.png">
    <v-list
      itemLayout="horizontal"
      :dataSource="todos"
    >
      <v-list-item slot="renderItem" slot-scope="item, index">
        <img :src="require('@/assets/' + item.image)" />
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {VBtn, VList, VListItem} from 'vuetify/lib/components'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'home',
  components: {
    'v-button': VBtn,
    'v-list': VList,
    'v-list-item': VListItem,
  },
  methods: {
    ...mapMutations('home', [
      'addImage',
    ]),
  },
  computed: {
    ...mapState('home', [
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
