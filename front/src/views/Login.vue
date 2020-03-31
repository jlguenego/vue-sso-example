<template>
  <main>
    <h1>Login page</h1>
    <button class="primary" v-focus v-async-btn="connectWithSSO">
      Connect with SSO
    </button>
    <div class="or"><span>or</span></div>
    <form @submit.prevent="noop">
      <label>
        <div>Login</div>
        <input
          type="text"
          placeholder="Enter your windows login"
          v-model="login"
        />
      </label>
      <label>
        <div>Password</div>
        <input
          type="password"
          placeholder="and its password"
          v-model="password"
        />
      </label>
      <button type="submit" v-async-btn="submit">Connect</button>
      <p class="error">{{ error }}</p>
    </form>
  </main>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "../store";
import { HttpResponse } from "vue-resource/types/vue_resource";

@Component
export default class Login extends Vue {
  login = "";
  password = "";
  error = "";
  async connectWithSSO() {
    try {
      const response = await this.$http.get("/action/connect-with-sso");
      const json = await response.json();
      store.commit("connect", json.user);
      this.$router.push("/");
    } catch (error) {
      console.error("error: ", error);
    }
  }

  noop() {
    // do nothing
  }

  async submit() {
    console.log("submit");
    this.error = "";
    try {
      const response = await this.$http.post("/action/connect", {
        login: this.login,
        password: this.password,
      });
      const json = await response.json();
      store.commit("connect", json.user);
      this.$router.push("/");
    } catch (error) {
      console.log("error: ", error);
      if (error.status === 500) {
        this.error = error.statusText;
      }
      if (error.status === 401) {
        this.error = "Bad login/password.";
      }
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

.error {
  text-align: center;
  color: red;
}
</style>