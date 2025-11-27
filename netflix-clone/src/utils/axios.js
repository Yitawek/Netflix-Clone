import axios from "axois";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
