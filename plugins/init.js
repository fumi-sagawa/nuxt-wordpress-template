// https://qiita.com/snjssk/items/4322ddfbb6271cb212f9
import axios from "axios";
export default async ({ store, $config }) => {
  const { data } = await axios.get($config.baseUrl);
  store.commit("setPosts", data);
};
