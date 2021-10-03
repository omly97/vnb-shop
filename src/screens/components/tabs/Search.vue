<template>
    <view>
        <nb-h1>Search</nb-h1>

        <nb-grid>
            <nb-row v-for="row in rowsCount" :key="row">
                <nb-col v-for="(product, i) in sliceProducts(row-1)" :key="i">
                    <product-card :product="product" :navigation="navigation" />
                </nb-col>
            </nb-row>
        </nb-grid>
    </view>
</template>

<script>
import ProductCard from '../ProductCard.vue';

export default {
    name: 'Search',
    props: {
        navigation: { type: Object }
    },
    components: {
        ProductCard
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
    },
}
</script>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
}
</style>
