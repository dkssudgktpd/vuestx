import {createStore} from 'vuex'
import stxStore from './modules/stxStore.js'
export default createStore({
  modules: {
    stxStore
  }
})