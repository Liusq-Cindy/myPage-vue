<template>
  <div id="app">
    <!-- <router-view/> -->
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/blank">跳转空白页</router-link>
      <router-link to="/test">HelloLSQ路由切换</router-link>
      <router-link to="/validate">表单校验</router-link>
      <router-link to="/validate2">表单校验222</router-link>

    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
