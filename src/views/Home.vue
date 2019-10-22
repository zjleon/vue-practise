<template>
  <div class="home">
    <a-button type="primary" @click="addImage">2521421</a-button>
    <h4>{{title}}</h4>
    <img alt="Vue logo" src="../assets/logo.png">
    <a-list
      itemLayout="horizontal"
      :dataSource="todos"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <a slot="title" href="https://vue.ant.design1/">{{item.text}}, {{index}}</a>
        </a-list-item-meta>
        <img :src="require('@/assets/' + item.image)" />
      </a-list-item>
    </a-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { Button, List } from 'ant-design-vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

Vue.use(Button)
Vue.use(List)

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
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
