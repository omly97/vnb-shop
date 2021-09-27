<template>
    <view>
        <nb-h1>Cart</nb-h1>

        <swipe-list-view
            :data="products"
            disableRightSwipe
            :rightOpenValue="-75"
            :stopRightSwipe="-100"
            :keyExtractor="item => item.id.toString()"
        >
            <!-- SwipeListView Visible Item -->
            <nb-view
                render-prop-fn="renderItem"
                arguments="data"
                :style="{
                    padding: 20,
                    height: 120,
                    backgroundColor: '#fff',
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1
                }"
            >
                <nb-grid>
                    <nb-col :size="1">
                        <image :source="{uri: data.item.image}" :style="{ height: '100%' }"  />
                    </nb-col>
                    <nb-col :size="3" :style="{ marginLeft: 20 }">
                        <nb-text :style="styles.productTitle">{{ data.item.title }}</nb-text>
                        <nb-text :style="styles.productPrice">{{ `${data.item.price * 100} fcfa` }}</nb-text>
                    </nb-col>
                </nb-grid>
            </nb-view>

            <!-- SwipeListView Hidden Item -->
            <view
                render-prop-fn="renderHiddenItem"
                arguments="data"
                :style="{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 120
                }"
            >
                <nb-button danger :onPress="() => removeProduct(data.item)" :style="styles.swipeBtnRight">
                    <view :style="styles.swipeBtnIconContainer">
                        <nb-icon name="trash" :style="styles.swipeBtnIcon" />
                    </view>
                </nb-button>
            </view>
        </swipe-list-view>

        <view class="checkout-container">
            <view>
                <nb-text class="checkout-title">Total</nb-text>
                <nb-text class="checkout-price">{{ `${totalPrice} F` }}</nb-text>
            </view>
            <nb-button warning :onPress="checkOut">
                <nb-text>Chech Out</nb-text>
            </nb-button>
        </view>
    </view>
</template>

<script>
import { SwipeListView } from "react-native-swipe-list-view";

export default {
    name: 'Cart',
    components: {
        SwipeListView
    },
    data() {
        return {
            styles: {
                swipeBtnRight: {
                    flex: 1,
                    height: "100%",
                    justifyContent: "flex-end",
                    borderRadius: 0
                },
                swipeBtnIconContainer: {
                    height: "100%",
                    width: 75,
                    justifyContent: "center",
                    alignItems: "center"
                },
                swipeBtnIcon: {
                    fontSize: 30
                },
                productTitle: {
                    fontWeight: "bold",
                    fontSize: 13,
                    color: "#1B263B",
                },
                productPrice: {
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "#415A77",
                    marginTop: 5,
                }
            }
        };
    },
    computed: {
        products() {
            return this.$store.getters['cart/products'];
        },
        totalPrice() {
            return this.$store.getters['cart/totalPrice'];
        },
    },
    methods: {
        removeProduct(product) {
            this.$store.dispatch('cart/removeProduct', product);
        },
        checkOut() {
            alert("Goood Job")
        }
    }
}
</script>

<style scoped>
.checkout-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20;
}

.checkout-title {
    font-weight: bold;
    font-size: 15;
    text-align: center;
    color: #1B263B;
}

.checkout-price {
    font-weight: bold;
    font-size: 20;
    text-align: center;
    color: #415A77;
}
</style>
