import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import cart from './modules/cart'
new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    cart
  }
})
