import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone-backend-69.herokuapp.com",
});

export default instance;
