<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/bmap">BMap</router-link>
    </div>
    <router-view/>
  </div>
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
