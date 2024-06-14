import axios from "axios";

const http = axios.create({
  baseURL: "https://freetestapi.com/apis"
});

export default http;