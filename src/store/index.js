import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import state from '@/store/state'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import actions from '@/store/actions'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins:[createPersistedState()]

})

export default store
