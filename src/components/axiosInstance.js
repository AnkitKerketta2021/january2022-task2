import axios from "axios";
const HTTP = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
export default HTTP;
