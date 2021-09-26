export default {
    namespaced: true,

    state: () => ({
        authenticated: false,
        user: null,
    }),

    mutations: {
        setAuthenticated (state, value) {
            state.authenticated = value
        },
        setUser (state, value) {
            state.user = value
        },
    },

    getters: {
        authenticated(state) {
            return state.authenticated
        },
        user(state) {
            return state.user
        }
    },

    actions: {
        logout (context) {
            context.commit('setAuthenticated', false);
            context.commit('setUser', null);
        }
    }
}
