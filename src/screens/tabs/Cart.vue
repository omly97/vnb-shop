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
                        <nb-text :style="styles.productText1">{{ data.item.title.substring(0, 45) }}</nb-text>
                        <nb-text :style="styles.productText2">{{ `${data.item.price * 100} fcfa` }}</nb-text>
                        <nb-text :style="styles.productText2">{{ `Qte: ${data.item.cart_count}` }}</nb-text>
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
                <view :style="styles.swipeViewLeft">
                    <nb-button transparent :onPress="() => increment(data.item)" :style="styles.swipeBtnLeft">
                        <view :style="styles.swipeBtnIconContainer">
                            <nb-icon type="FontAwesome" name="plus" />
                        </view>
                    </nb-button>
                    <nb-button transparent :onPress="() => decrement(data.item)" :style="styles.swipeBtnLeft">
                        <view :style="styles.swipeBtnIconContainer">
                            <nb-icon type="FontAwesome" name="minus" />
                        </view>
                    </nb-button>
                </view>
                <nb-button danger :onPress="() => remove(data.item)" :style="styles.swipeBtnRight">
                    <view :style="styles.swipeBtnIconContainer">
                        <nb-icon name="trash" :style="styles.swipeBtnIcon" />
                    </view>
                </nb-button>
            </view>
        </swipe-list-view>

        <view class="checkout-container">
            <view>
                <nb-text :style="styles.checkoutText1">Total</nb-text>
                <nb-text :style="styles.checkoutText2">{{ `${totalPrice} F` }}</nb-text>
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
            styles: this.$theme.cart
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
</style>
