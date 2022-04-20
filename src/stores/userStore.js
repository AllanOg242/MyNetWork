import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    user: null,
    isLogged: false,
  }),

  actions: {
    logout() {
      this.$patch({
        user: null,
        isLogged: false,
      });
    },

    setUser(u) {
      this.$patch({
        user: u,
        isLogged: true,
      });
    },
  },
});
