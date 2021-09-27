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
        },

        isOnCart: (state) => (product) => {
            let isNotAdded = state.products.every(item => {
                if (item.id == product.id) {
                    return false;
                }
                return true;
            });
            return !isNotAdded
        },

        cartCount(state) {
            return state.products.length
        },

        totalPrice(state) {
            var total = 0;
            state.products.forEach(product => {
                total += product.cart_count * product.price * 100
            });
            return total;
        }
    },

    actions: {
        addProduct(context, product) {
            return new Promise((resolve, reject) => {
                product['cart_count'] = 1;
                context.state.products.push(product);
                resolve();
            })
        },

        updateProductCartCount(context, productId, newCartCount) {
            return new Promise((resolve, reject) => {
                context.state.products.every(product => {
                    if (product.id == productId) {
                        product.cart_count = newCartCount;
                        return false;
                    }
                    return true;
                });
                resolve();
            })
        },

        incrementProductCartCount({ dispatch }, product) {
            let newCartCount = product.cart_count == product.rating.count
                ? product.rating.count
                : product.cart_count++
            return dispatch('updateProductCartCount', product.id, newCartCount);
        },

        decrementProductCartCount({ dispatch }, product) {
            let newCartCount = product.cart_count == 0
                ? 0
                : product.cart_count--
            return dispatch('updateProductCartCount', product.id, newCartCount);
        },

        removeProduct(context, product) {
            return new Promise((resolve, reject) => {
                context.commit('setProducts', 
                    context.state.products.filter(item => {
                        return item.id != product.id
                    })
                );
                resolve();
            })
        }
    }
}
