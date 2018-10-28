<template>
  <div id="app">
    <finhead/>
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import finhead from "./components/finhead/index.vue";
// import finbody1 from "./components/finbody1/index.vue";
export default {
  name: "app",
  components: {
    finhead,
    // finbody1
  }
};
</script>

<style>
</style>
