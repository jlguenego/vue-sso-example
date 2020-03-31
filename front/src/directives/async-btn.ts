import Vue from "vue";

const sleep = (t: number) => new Promise(f => setTimeout(f, t));

Vue.directive("async-btn", {
  bind: function(el, binding, vnode, oldnode) {
    console.log("vnode: ", vnode);
    console.log("binding: ", binding);
    console.log("el: ", el);

    el.addEventListener("click", async function() {
      el.classList.add("async-btn-working");
      const asyncFn = binding.value;
      console.log("asyncFn: ", asyncFn);
    //   await sleep(10000);
      await asyncFn();
      el.classList.remove("async-btn-working");
    });
  },
});
