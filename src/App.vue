<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/bmap">BMap</router-link>
      <router-link to="/search">Search</router-link>
    </div>
    <router-view/>
  </v-app>
</template>
<style lang="less">

.bordered {
  border-top: dotted 1px green;
  border-bottom: solid 3px black;
}

#nav {
  .bordered()
}
</style>
