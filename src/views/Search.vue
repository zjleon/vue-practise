<template>
  <v-row>
    <v-card
      class="mx-100"
    >

    </v-card>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Single-line item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Two-line item</v-list-item-title>
          <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  VBtn,
  VList,
  VListItem,
  VListItemContent,
  VListItemSubtitle,
  VListItemTitle,
} from 'vuetify/lib/components'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'search',
  components: {
    'v-btn': VBtn,
    'v-list': VList,
    'v-list-item': VListItem,
    'v-list-item-content': VListItemContent,
    'v-list-item-title': VListItemTitle,
    'v-list-item-subtitle': VListItemSubtitle,
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
