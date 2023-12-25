import axios from "axios";
const instance = axios.create({
  baseURL: "https://portfolio-backend-app.onrender.com",
});
export default instance;
