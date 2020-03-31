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
    <h2 v-if="!state.user.adUser">
      Welcome <br />
      {{ state.user.displayName }}!
    </h2>
    <h2 v-else>
      Welcome <br />
      {{ state.user.adUser.givenName[0] }} {{ state.user.adUser.sn[0] }}!
    </h2>
    <p>Note: info from Active Directory</p>
    <button @click="disconnect">Disconnect</button>
    <button v-if="secret === ''" class="primary" @click="showSecret">
      Show the secret
    </button>
    <button v-else class="primary" @click="hideSecret">Hide the secret</button>
    <p>{{ secret }}</p>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store, { State } from "../store";

@Component
export default class Home extends Vue {
  public state: State = store.state;
  public secret = "";

  async showSecret() {
    try {
      const response = await this.$http.get("/protected/secret");
      const json = await response.json();
      this.secret = JSON.stringify(json);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  hideSecret() {
    this.secret = "";
  }

  async disconnect() {
    try {
      await this.$http.get("/action/disconnect");
      store.commit("disconnect");
    } catch (error) {
      console.log("error: ", error);
    }
  }
}
</script>

<style scoped lang="scss">
main {
  justify-content: flex-start;
  height: 18em;
}

p,
h1,
h2 {
  text-align: center;
}

button {
  margin: 0.5em 0;
  width: 19em;
}
</style>
