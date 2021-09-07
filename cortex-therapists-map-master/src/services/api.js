import axios from "axios";

export default axios.create({
  baseURL: "https://cortex-academy.herokuapp.com/api/v1",
  // baseURL: "http://localhost:3300/api/v1",
});
