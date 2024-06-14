import axios from "axios";

const http = axios.create({
  baseURL: "https://freetestapi.com/api/v1"
});

export default http;