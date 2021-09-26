import Vue from 'vue-native-core';
import Vuex from 'vuex';

import moduleAuth from './modules/auth';
import moduleCart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: moduleAuth,
        cart: moduleCart,
    }
})
