import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore(
  "auth",
  {
    state: () => ({
      user: {},
    }),

    actions: {
      getUserStatus() {
        return this.isAuthenticated;
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
                this.user = result.data[0];
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
  },
  { persist: true }
);
