import { defineStore } from 'pinia'
interface State {items: Array<unknown>}
export const useItemStore = defineStore('items', {
  state: (): State => {
    return {
      items: []
    }
  },
  getters: {
    getItems: (state) => state.items
  },
  actions: {
    addItem (payload: unknown) {
      this.items.push(payload)
    }
  }
})
