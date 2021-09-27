<template>
    <view>
        <nb-h1>Welcome</nb-h1>

        <nb-grid>
            <nb-row v-for="(section, i) in productSections" :key="i" class="flex-column">
                <nb-text :style="styles.heading.h6">{{ section.sectionName }}</nb-text>
                <scroll-view horizontal>
                    <nb-grid>
                        <nb-col v-for="product in section.products" :key="product.id">
                            <product-card :product="product" :navigation="navigation" />
                        </nb-col>
                    </nb-grid>
                </scroll-view>
            </nb-row>
        </nb-grid>
    </view>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
    name: 'Welcome',
    props: {
        navigation: { type: Object }
    },
    components: {
        ProductCard
    },
    data() {
        return {
            styles: {
                heading: this.$theme.heading,
            },
            isLoading: false,
            products: [],
        }
    },
    computed: {
        productSections() {
            return [
                {
                    sectionName: 'Popular',
                    products: this.products.slice(0, 6)
                },
                {
                    sectionName: 'New Add',
                    products: this.products.slice(15, 20)
                }
            ]
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
    }
}
</script>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
}
</style>
