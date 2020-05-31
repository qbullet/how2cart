const getDefaultState = () => ({
  cart: {
    uid: '',
    items: []
  }
})

const state = {
  cart: {
    uid: '',
    items: []
  }
}

const actions = {
  setCart ({ commit }, payload) {
    commit('SET_CART', payload)
  },
  resetCartState ({ commit }) {
    commit('RESET_CART')
  }
}

const mutations = {
  SET_CART (state, data) {
    state.cart = {
      ...state.cart,
      ...data
    }
  },
  RESET_CART (state) {
    Object.assign(state, getDefaultState())
  }
}

const getters = {
  cart: state => state.cart
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
