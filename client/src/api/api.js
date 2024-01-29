import axios from "axios";

const apijson = axios.create({
  baseURL: "http://localhost:1000/",
});

export default apijson;
