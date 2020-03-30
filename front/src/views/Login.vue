<template>
  <main>
    <h1>Login page</h1>
    <button class="primary">Connect with SSO</button>
    <div class="or"><span>or</span></div>
    <form>
      <label>
        <div>Login</div>
        <input type="text" />
      </label>
      <label>
        <div>Password</div>
        <input type="password" />
      </label>
      <button>Connect</button>
    </form>
  </main>
</template>

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