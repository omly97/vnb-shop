<template>
    <nb-card :style="styleObj.container">
        <nb-card-item button :onPress="() => showProduct(product.id)" class="flex-column">
            <image :source="{uri: product.image}" :style="styleObj.image" />

            <view class="flex-column mt-20">
                <nb-text :style="styleObj.title">{{ product.title.substring(0, 25) }}...</nb-text>
                <nb-text :style="styleObj.price">{{ `${product.price * 100} F` }}</nb-text>
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
            styleObj: {
                container: {
                    height: 280,
                    width: 150,
                    borderBottomWidth: 5,
                },
                image: {
                    width: '100%',
                    height: 160,
                },
                title: {
                    fontWeight: 'bold',
                    fontSize: 13,
                    textAlign: 'center',
                    color: this.$theme.blueDark,
                },
                price: {
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'center',
                    color: this.$theme.blueDark,
                }
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

.mt-20 {
    margin-top: 20;
}
</style>
