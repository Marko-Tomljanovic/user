import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/api/users";

class UserService {
  getUsers() {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return axios.get(USERS_REST_API_URL);
  }
}

export default new UserService();
