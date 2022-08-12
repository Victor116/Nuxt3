import { defineStore } from 'pinia'

export const useAppStore = defineStore('main', {
  state: () => ({
    dark: false,
    navbar: 'Inicio'
  }),
  getters: {
    getMode: (state) => {
      return state.dark
    }
  },
  actions: {
    changeMode (bool) {
      this.dark = bool
    },
    setPositionNavbar (route) {
      this.navbar = route
    }
  }
})
