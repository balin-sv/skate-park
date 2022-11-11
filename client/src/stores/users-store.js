import { defineStore } from "pinia";
import axios from "axios";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),

  actions: {
    getTableHeaders() {
      const tableHeaders = [];
      Object.entries(this.users.table_headers).forEach(([key, value]) => {
        tableHeaders.push({ value: key, title: value });
      });
      return tableHeaders;
    },
    getTableUserList() {
      return this.users.data;
    },

    async getUsers() {
      return new Promise((resolve, reject) => {
        axios
          .get("http://localhost:5000/users")
          .then((res) => {
            this.users = res.data;
            console.log(this.users);
          })
          .catch((err) => reject(err))
          .finally(() => {
            resolve(true);
          });
      });
    },
  },
  //   persist: true,
});
