<template>
    <view>
        <nb-h1>Search</nb-h1>

        <nb-grid>
            <nb-row v-for="row in rowsCount" :key="row">
                <nb-col
                    v-for="(product, i) in sliceProducts(row-1)" :key="i"
                    button :onPress="() => showProduct(product.id)"
                >
                    <nb-card class="product-card">
                        <nb-card-item>
                            <image :source="{uri: product.image}" class="product-image" />
                        </nb-card-item>
                        <nb-card-item class="product-props">
                            <nb-text class="product-title">{{ product.title.substring(0, 25) }} ...</nb-text>
                            <nb-text class="product-price">{{ `${product.price * 100} fcfa` }}</nb-text>
                        </nb-card-item>
                    </nb-card>
                </nb-col>
            </nb-row>
        </nb-grid>
    </view>
</template>

<script>
export default {
    name: 'Search',
    props: {
        navigation: { type: Object }
    },
    data() {
        return {
            isLoading: false,
            products: [],
        }
    },
    computed: {
        rowsCount() {
            return (this.products.length % 2) + Math.floor(this.products.length / 2);
        }
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            this.isLoading = true;
            this.$axios.get('products')
                .then(response => {
                    this.products = response;
                })
                .catch(error => {
                    // alert(error.message);
                })
                .finally(() => {
                    this.isLoading = false
                })
        },
        sliceProducts(n) {
            return this.products.slice(2*n, 2*n + 2)
        },
        showProduct(id) {
            this.navigation.navigate('Detail', { id: id })
        }
    },
}
</script>

<style scoped>
.product-card {
    height: 270;
}

.product-image {
    width: 100%;
    height: 150;
    background-color: transparent;
}

.product-props {
    display: flex;
    flex-direction: column;
}

.product-title {
    font-weight: bold;
    font-size: 13;
    text-align: center;
    color: #1B263B;
}

.product-price {
    font-weight: bold;
    font-size: 15;
    text-align: center;
    color: #415A77;
}
</style>
