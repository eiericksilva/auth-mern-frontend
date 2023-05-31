import Cookies from "js-cookie";
import api from "../services/api";

export const setToken = async () => {
  const token = Cookies.get("token");

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
};
