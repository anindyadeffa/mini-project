import axios from "axios";
const state = {
  lists: [],
  error: "",
  kategori: "health",
  totalResults: 0,
};

const mutations = {
  setNews(state, param) {
    state.lists = param.articles;
    state.totalResults = param.totalResults;
    // state.lists = param.articles;
  },
  setError(state, param) {
    state.error = param;
  },
  setCategory(state, param) {
    state.kategori = param;
  },  
};

const actions = {
  fetchListNews(store) {
    axios
      .get(
        // 'https://newsapi.org/v2/top-headlines?country=id&category=' +
        // store.state.kategori + '&q=' +
        // '&apiKey=c47208e37dc0497a98950af0b017de2b'

        'https://newsapi.org/v2/top-headlines?country=id&category=health' +
        '&q=makanan' + '&apiKey=c47208e37dc0497a98950af0b017de2b'
      )
      .then((response) => {
        // console.log("fetchListNews set global state");
        store.commit("setNews", response.data);
      })
      .catch((error) => {
        // console.log("fetchListNews set global state error", error.message);
        console.log("error status: ", error.response.status);
        store.commit("setError", error.msg);
      });
  },
  categoryListNews(store, payload) {
    store.commit('setCategory', payload);
    store.dispatch('fetchListNews');
  },
};

export default {
  state,
  mutations,
  actions,
};
