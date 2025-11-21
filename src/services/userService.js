import axios from "axios";

const API = "http://localhost:3000/api/users";

export function getProfile() {
  return axios
    .get(`${API}/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => res.data);
}