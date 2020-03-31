<template>
  <div id="app">
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
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
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "../node_modules/normalize.css/normalize.css";

*,
*::before,
*::after {
  box-sizing: border-box;
}

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

main {
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 40em;
  align-items: center;
  padding: 0.5em;
}

h1 {
  margin: 0;
}

button {
  background: #eee;
  border: 0.1em solid #eee;
  padding: 0.5em 1em;

  &:not(:disabled) {
    cursor: pointer;
    &:hover {
      border-color: #ddd;
      background: #ddd;
    }
    &:active {
      border-color: #ccc;
      background: #ccc;
    }

    &.primary {
      border-color: #333;
      background: #333;
      color: white;
      &:hover {
        border-color: #444;
        background: #444;
      }
      &:active {
        border-color: #555;
        background: #555;
      }
    }
  }
}

form {
  display: flex;
  flex-flow: column;
  width: 100%;
}

label {
  display: flex;
  flex-flow: column;
  padding-bottom: 1em;
}

input {
  padding: 0.5em 1em;
  border: 0.1em solid #eee;
  width: 100%;
}

$color1: #555;
$color2: #333;

button.async-btn-working:not(:disabled),
button.async-btn-working:not(:disabled):hover,
button.async-btn-working:not(:disabled):active {
  position: relative;
  z-index: 0;
  background: transparent;
  overflow: hidden;
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: -2em;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      45deg,
      $color1 25%,
      $color1 50%,
      $color2 50%,
      $color2 75%
    );
    background-size: 2em 2em;
    animation: asyncAnim 2s linear infinite;
  }
}

@keyframes asyncAnim {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(2em);
  }
}
</style>
