export default {
    namespaced: true,

    state: () => ({
        products: [],
    }),

    mutations: {
        setProducts(state, products) {
            state.products = products
        }
    },

    getters: {
        products(state) {
            return state.products
        }
    },

    actions: {
        addProduct(state, product) {
            state.products.push(product)
        },

        removeProduct(context, state, product) {
            context.commit('setProducts', 
                state.products.filter(item => {
                    item.id != product.id
                })
            );
        }
    }
}
