import { createStore } from 'vuex'
import axios from "axios";

const apiUrl = "http://localhost:3000/constituents";

export const store = createStore({
  state () {
    return {
      constituents: [],
    }
  },
  mutations: {
    setConstituents (state, {payload}) {
      state.constituents = payload;
    }
  },
  actions: {
    getConstituents (context) {
      const response = axios.get(apiUrl);
      context.commit('setConstituents', response.data);
    }
  },
})
