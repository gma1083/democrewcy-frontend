import axios from "axios";

let baseURL = "http://localhost:8000/";
export default axios.create({
  baseURL,
  timeout: 5000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  withCredentials: true
});
