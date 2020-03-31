import Vue from "vue";

// const sleep = (t: number) => new Promise(f => setTimeout(f, t));

Vue.directive("async-btn", {
  bind: function(el, binding) {
    el.addEventListener("click", async function() {
      el.classList.add("async-btn-working");
      try {
        //   await sleep(10000);
        await binding.value();
      } catch (error) {
        console.error("error: ", error);
      } finally {
        el.classList.remove("async-btn-working");
      }
    });
  },
});
