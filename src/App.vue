<template>
  <div id="app">
    <finhead/>
    <transition name="fade">
    <router-view></router-view>
    </transition>
    <finfoot/>
  </div>
</template>

<script>
import finhead from "./components/finhead/index.vue";
import finfoot from "./components/finfoot/index.vue";
export default {
  name: "app",
  components: {
    finhead,
    finfoot
  }
};
</script>

<style>
</style>
