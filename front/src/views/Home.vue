<template>
  <main v-if="!state.user">
    <h1>Welcome !</h1>
    <p>
      We have a secret...<br />
      and if you want to know it please connect...
    </p>
    <router-link class="primary" tag="button" to="/login" v-focus>
      Go to login page &gt;
    </router-link>
  </main>
  <main v-else>
    <h2>
      Welcome <br />
      {{ state.user.displayName }}!
    </h2>
  </main>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store, { User, State } from "../store";

@Component
export default class Home extends Vue {
  public state: State = store.state;
}
</script>



<style scoped lang="scss">
p, h1, h2 {
  text-align: center;
}
</style>



