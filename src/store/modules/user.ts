import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    username: 'Razvan Stoenescu',
    email:'@rstoenescu'
  }),
  getters: {},
  actions: {},
});

