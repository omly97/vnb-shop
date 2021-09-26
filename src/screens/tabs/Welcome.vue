<template>
    <view>
        <nb-h1>Welcome</nb-h1>

        <nb-grid>
            <nb-row v-for="(section, i) in productSections" :key="i" class="flex-column">
                <nb-text class="section-name">{{ section.sectionName }}</nb-text>
                <scroll-view horizontal>
                    <nb-grid>
                        <nb-col
                            v-for="product in section.products" :key="product.id"
                            button :onPress="() => showProduct(product.id)"
                        >
                            <nb-card>
                                <nb-card-item>
                                    <image :source="{uri: product.image}" class="product-image" />
                                </nb-card-item>
                                <nb-card-item class="flex-column">
                                    <nb-text class="product-title">{{ product.title.substring(0, 15) }}...</nb-text>
                                    <nb-text class="product-price">{{ `${product.price * 100} F` }}</nb-text>
                                </nb-card-item>
                            </nb-card>
                        </nb-col>
                    </nb-grid>
                </scroll-view>
            </nb-row>
        </nb-grid>
    </view>
</template>

<script>
export default {
    name: 'Welcome',
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
        showProduct(id) {
            this.navigation.navigate('Detail', { id: id })
        }
    }
}
</script>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
}

.section-name {
    font-weight: bold;
    font-size: 16;
    margin-top: 10;
    margin-bottom: 10;
}

.product-image {
    width: 100%;
    height: 150;
    background-color: transparent;
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
