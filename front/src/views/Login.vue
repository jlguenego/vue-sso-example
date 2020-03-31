<template>
  <main>
    <h1>Login page</h1>
    <button class="primary" v-focus v-async-btn="connectWithSSO">
      Connect with SSO
    </button>
    <div class="or"><span>or</span></div>
    <form>
      <label>
        <div>Login</div>
        <input type="text" placeholder="Enter your windows login" />
      </label>
      <label>
        <div>Password</div>
        <input type="password" placeholder="and its password" />
      </label>
      <button>Connect</button>
    </form>
  </main>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "../store";

@Component
export default class Login extends Vue {
  async connectWithSSO() {
    try {
      const response = await this.$http.get("/action/connect");
      const json = await response.json();
      store.commit("connect", json.user);
      this.$router.push("/");
    } catch (error) {
      console.error("error: ", error);
    }
  }
}
</script>



<style scoped lang="scss">
main {
  width: 20em;
}

h1 {
  margin-bottom: 1em;
}

button {
  width: 100%;
}

.or {
  position: relative;
  z-index: 0;
  width: 100%;
  margin: 0.5em 0;
  text-align: center;
  &::before {
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 0;
    top: 50%;
    content: "";
    border: 0.1em solid #eee;
  }
  span {
    padding: 0.5em;
    background: white;
  }
}
</style>