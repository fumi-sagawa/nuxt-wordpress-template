// https://qiita.com/nunulk/items/0d50ac8cf7e16287f915
import axios from "axios";

export const state = () => ({
  user: "sagawa",
  posts: [],
  posts_sample: {
    id: 0,
    title: "sample_tile"
  }
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  }
};

export const actions = {
  async getPosts({ commit }, url) {
    const { data } = await axios.get(url);
    commit("setPosts", data);
  }
};
