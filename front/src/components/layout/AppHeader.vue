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
}
</style>