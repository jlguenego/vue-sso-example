<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      message: "Hello World"
    };
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
