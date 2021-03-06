<template>
    <view>
        <nb-h1>Cart</nb-h1>

        <swipe-list-view
            :data="products"
            :leftOpenValue="75"
            :stopLeftSwipe="100"
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
                        <nb-text :style="styleObj.productText1">{{ data.item.title.substring(0, 45) }}</nb-text>
                        <nb-text :style="styleObj.productText2">{{ `${data.item.price * 100} fcfa` }}</nb-text>
                        <nb-text :style="styleObj.productText2">{{ `Qte: ${data.item.cart_count}` }}</nb-text>
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
                <view :style="styleObj.swipeViewLeft">
                    <nb-button transparent :onPress="() => increment(data.item)" :style="styleObj.swipeBtnLeft">
                        <view :style="styleObj.swipeBtnIconContainer">
                            <nb-icon type="FontAwesome" name="plus" />
                        </view>
                    </nb-button>
                    <nb-button transparent :onPress="() => decrement(data.item)" :style="styleObj.swipeBtnLeft">
                        <view :style="styleObj.swipeBtnIconContainer">
                            <nb-icon type="FontAwesome" name="minus" />
                        </view>
                    </nb-button>
                </view>
                <nb-button danger :onPress="() => remove(data.item)" :style="styleObj.swipeBtnRight">
                    <view :style="styleObj.swipeBtnIconContainer">
                        <nb-icon name="trash" :style="styleObj.swipeBtnIcon" />
                    </view>
                </nb-button>
            </view>
        </swipe-list-view>

        <view v-if="products.length" class="checkout-container">
            <view>
                <nb-text class="checkout-text1">Total</nb-text>
                <nb-text class="checkout-text2">{{ `${totalPrice} F` }}</nb-text>
            </view>
            <nb-button warning :onPress="checkOut">
                <nb-text>Check Out</nb-text>
            </nb-button>
        </view>

        <view v-else class="empty-container">
            <nb-icon name="cart" class="empty-icon" />
            <nb-text class="empty-text">Empty Cart</nb-text>
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
            styleObj: {
                swipeViewLeft: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: "100%",
                },
                swipeBtnLeft: {
                    flex: 1,
                    height: "100%",
                    justifyContent: "flex-start",
                    borderRadius: 0,
                },
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
                productText1: {
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: "#1B263B",
                },
                productText2: {
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: "#415A77",
                    marginTop: 2,
                }
            }
        };
    },
    computed: {
        products() {
            return this.$store.getters['cart/products'];
        },
        cartCount() {
            return this.$store.getters['cart/cartCount'];
        },
        totalPrice() {
            return this.$store.getters['cart/totalPrice'];
        },
    },
    methods: {
        increment(product) {
            this.$store.dispatch('cart/incrementProductCartCount', product);
        },
        decrement(product) {
            this.$store.dispatch('cart/decrementProductCartCount', product);
        },
        remove(product) {
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

.checkout-text1 {
    font-weight: bold;
    font-size: 15;
    text-align: center;
    color: #1B263B;
}

.checkout-text2 {
    font-weight: bold;
    font-size: 20;
    text-align: center;
    color: #415A77;
}

.empty-container {
    margin-top: 25%;
    align-self: auto;
    height: 100%;
}

.empty-icon {
    font-size: 200;
    color: #d3d4d4;
    text-align: center;
}

.empty-text {
    font-size: 30;
    font-weight: bold;
    text-align: center;
    color: #d3d4d4;
}
</style>
