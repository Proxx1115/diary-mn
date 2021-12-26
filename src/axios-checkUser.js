import axios from "axios";

const instance = axios.create({
  baseURL: "https://historysaver-mn-default-rtdb.firebaseio.com/",
});

export default instance;
