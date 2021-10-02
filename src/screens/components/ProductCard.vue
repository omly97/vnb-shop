<template>
    <nb-card class="container">
        <nb-card-item button :onPress="() => showProduct(product.id)" class="flex-column">
            <image :source="{uri: product.image}" class="image" />

            <view class="flex-column mt-20">
                <nb-text class="title">{{ product.title.substring(0, 25) }}...</nb-text>
                <nb-text class="price">{{ `${product.price * 100} F` }}</nb-text>
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

.mt-20 {
    margin-top: 20;
}

.container {
    height: 280;
    width: 150;
    border-bottom-width: 5;
}

.image {
    width: 100%;
    height: 160;
}

.title {
    font-weight: bold;
    font-size: 13;
    text-align: center;
    color: #1B263B;
}

.price {
    margin-top: 5;
    font-weight: bold;
    font-size: 15;
    text-align: center;
    color: #415A77;
}
</style>
