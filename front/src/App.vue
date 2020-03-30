<template>
  <div id="app">
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/layout/AppHeader.vue";
import AppBody from "@/components/layout/AppBody.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBody,
    AppFooter
  }
};
</script>

<style lang="scss">

@import "../node_modules/normalize.css/normalize.css";

#app {
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  font-family: sans-serif;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
