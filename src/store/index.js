import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: []
  },
  getters: {
    retrieveInventory (state) {
      return state.inventory
    }
  },
  mutations: {
    retrieveInventory (state, payload) {
      state.inventory = payload
    }
  },
  actions: {
    async retrieveInventory (context) {
      try {
        await new Promise((resolve, reject) => {
          axios.get('http://inventory.test:8080/api/inventory')
            .then(response => {
              this.inventory = response.data
              context.commit('retrieveInventory', this.inventory)
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
      } catch (error) {
      }
    }
  },
  modules: {
  }
})
