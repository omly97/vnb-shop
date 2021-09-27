<template>
    <nb-container :style="{ backgroundColor: '#fff' }">
        <!-- Header -->
        <nb-header>
            <nb-left>
                <nb-button transparent :onPress="() => this.props.navigation.goBack()">
                <nb-icon name="arrow-back" />
                </nb-button>
            </nb-left>
            <nb-body>
                <nb-title>Detail</nb-title>
            </nb-body>
            <nb-right />
        </nb-header>

        <!-- Content -->
        <nb-content padder>
            <nb-card transparent>
                <nb-card-item>
                    <image :source="{ uri: product.image }" :style="styles.image" />
                </nb-card-item>

                <nb-card-item class="flex-column">
                    <nb-text :style="styles.title">{{ product.title }}</nb-text>
                    <nb-badge :style="styles.category">
                        <nb-text>{{ product.category }}</nb-text>
                    </nb-badge>
                    <nb-text :style="styles.price">{{ `Price: ${product.price * 100} fcfa` }}</nb-text>
                    <nb-text :style="styles.count">{{ `Stock: ${product.rating.count}` }}</nb-text>
                    <nb-text :style="styles.description">{{ product.description }}</nb-text>
                </nb-card-item>

                <nb-badge v-if="isOnCart" success class="badge">
                    <nb-text>ADDED TO CART</nb-text>
                </nb-badge>
                <nb-button v-else warning block rounded iconLeft :onPress="addToCart">
                    <nb-icon name="cart" />
                    <nb-text>Add to cart</nb-text>
                </nb-button>
            </nb-card>
        </nb-content>
    </nb-container>
</template>

<script>
import { Toast } from "native-base";

export default {
    name: 'Detail',
    props: {
        navigation: { type: Object }
    },
    data() {
        return {
            isLoading: false,
            product: {
                rating: {}
            },
            styles: this.$theme.productLargeCard
        }
    },
    computed: {
        isOnCart() {
            return this.$store.getters['cart/isOnCart'](this.product)
        }
    },
    created() {
        this.fetchProduct();
    },
    methods: {
        fetchProduct() {
            this.isLoading = true;
            this.$axios.get(`products/${this.navigation.state.params.id}`)
                .then(response => {
                    this.product = response;
                })
                .catch(error => {
                    // alert(error.message);
                })
                .finally(() => {
                    this.isLoading = false
                })
        },
        addToCart() {
            this.$store.dispatch('cart/addProduct', this.product).then(() => {
                Toast.show({
                    text: "Added to cart successfully",
                    buttonText: "Ok",
                    type: "success",
                    position: "top"
                });
            });
        }
    },
}
</script>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
}

.badge {
    width: 100%;
    height: 45;
    text-transform: uppercase;
}
</style>
