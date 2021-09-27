<template>
    <nb-card :style="styles.product.container">
        <nb-card-item button :onPress="() => showProduct(product.id)" class="flex-column">
            <image :source="{uri: product.image}" :style="styles.product.image" />

            <view class="flex-column detail">
                <nb-text :style="styles.product.title">{{ product.title.substring(0, 25) }}...</nb-text>
                <nb-text :style="styles.product.price">{{ `${product.price * 100} F` }}</nb-text>
            </view>
        </nb-card-item>
    </nb-card>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
        navigation: {
            type: Object
        }
    },
    data() {
        return {
            styles: {
                product: this.$theme.productSmallCard,
            },
        }
    },
    methods: {
        showProduct(id) {
            this.navigation.navigate('Detail', { id: id })
        }
    },
}
</script>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
}

.detail {
    margin-top: 20;
}
</style>
