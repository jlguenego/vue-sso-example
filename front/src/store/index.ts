import Vue from "vue";
import Vuex from "vuex";

interface ADUser {
  sn: string;
  givenName: string;
}

export interface User {
  displayName: string;
  adUser: ADUser;
}

export interface State {
  user?: User;
}

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {},
  mutations: {
    connect(state: State, user: User) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
