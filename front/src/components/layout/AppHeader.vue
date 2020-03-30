<template>
  <header>
    <a href="#">
      <span>Vue SSO Example</span>
    </a>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {}
</script>

<style scoped lang="scss">
header {
  background: #eee;
  height: 3em;
  display: flex;
  align-items: center;
  padding: 0 0.5em;
  span {
    font-weight: bold;
    font-size: 1.2em;
  }
}
</style>