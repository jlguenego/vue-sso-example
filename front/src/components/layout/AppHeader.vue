<template>
  <header>
    <router-link to="/">
      <img src="../../assets/logo.svg" alt="Logo" />
      <span>Vue SSO Example</span>
    </router-link>
  </header>
</template>

<style scoped lang="scss">
header {
  background: #eee;
  height: 3em;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
  }
  img {
    height: 2em;
    padding-right: 0.5em;
  }
  span {
    font-weight: bold;
    font-size: 1.2em;
  }
}
</style>
