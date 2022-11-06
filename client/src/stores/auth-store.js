import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  {
    state: () => ({
      user: {},
      isAuthenticated: true,
    }),

    actions: {
      getUserStatus() {
        return this.isAuthenticated;
      },
      logIn() {},
    },
  },
  { persist: true }
);
