import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

export function login(credentials) {
  return api.post("/login", credentials);
}

export function signup(credentials) {
  return api.post("/signup", credentials);
}

export function logout() {
  return api.post("/logout");
}

export function isLoggedIn() {
  return api.get("/login");
}
