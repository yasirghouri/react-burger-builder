import axios from "axios";

const baseURL = process.env.REACT_APP_DB_URL;
const instance = axios.create({
  baseURL,
});

export default instance;
