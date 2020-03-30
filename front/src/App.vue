<template>
  <div id="app">
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
