import Axios from "axios";
import { configure } from "axios-hooks";
import LRU from "lru-cache";
// configure axios
const axios = Axios.create({
  baseURL: "https://api.slickco.io/v0",
  timeout: 1000,
  headers: {
    "api-key": "464c4771-f603-4a58-a7ae-ae16b1d2782a",
    Accept: "application/json",
  },
});
const cache = new LRU({ max: 10 });
configure({ axios, cache });

export default axios;
