import axios from "axios";
import { USERS_DATA } from "../.././data/api/data";
export default {
  get() {
    axios
      .get(USERS_DATA)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error, "lỗi get api");
        return [];
      });
  },
  post(data) {
    axios
      .post(USERS_DATA, data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  },
  delete(id) {
    axios
      .delete(USERS_DATA, id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  },
};
