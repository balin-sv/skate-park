import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
    userToken: "",
  }),

  actions: {
    getUserToken() {
      return this.userToken;
    },
    getUserRol() {
      return this.user.is_admin;
    },
    getUser() {
      return this.user;
    },
    logIn(email, password) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:5000/login", {
            email,
            password,
          })
          .then((result) => {
            if (result) {
              console.log(result.data);
              this.user = result.data.user;
              this.userToken = result.data.token;
              resolve(true);
            } else {
              resolve(false);
            }
          })
          .catch((error) => {
            resolve(false);
            reject(error);
          });
      });
    },
  },
  persist: true,
});
