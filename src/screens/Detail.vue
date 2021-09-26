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
                    <image :source="{ uri: product.image }" :style="stylesObj.cardItemImage" class="image" />
                </nb-card-item>
                <nb-card-item class="properties">
                    <nb-text class="title">{{ product.title }}</nb-text>
                    <nb-badge primary class="category">
                        <nb-text>{{ product.category }}</nb-text>
                    </nb-badge>
                    <nb-text class="price">{{ `Price: ${product.price * 100} fcfa` }}</nb-text>
                    <nb-text class="count">{{ `Stock: ${product.rating.count}` }}</nb-text>
                    <nb-text class="description">{{ product.description }}</nb-text>
                </nb-card-item>
            </nb-card>
        </nb-content>
    </nb-container>
</template>

<script>
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
            stylesObj: {
                cardItemImage: {
                    resizeMode: "cover"
                }
            }
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
        }
    },
}
</script>

<style scoped>
.image {
    height: 350;
    width: 100%;
}

.properties {
    display: flex;
    flex-direction: column;
}

.title {
    font-weight: bold;
    font-size: 17;
    text-align: left;
    color: #191a1b;
}

.category {
    margin-top: 5;
    margin-bottom: 5;
    background-color: #191a1b;
    font-size: 1;
}

.price {
    margin-top: 10;
    font-weight: bold;
    font-size: 25;
    text-align: left;
    color: #415A77;
}

.count {
    font-size: 18;
    font-weight: bold;
    color: #1B263B;
}

.description {
    margin-top: 10;
    text-align: left;
    color: #1B263B;
}
</style>
