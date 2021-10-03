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
                <nb-title>My Shop</nb-title>
            </nb-body>
            <nb-right />
        </nb-header>

        <!-- Content -->
        <nb-content padder>
            <welcome-tab v-if="tab1" :navigation="navigation" />
            <search-tab v-if="tab2" :navigation="navigation" />
            <cart-tab v-if="tab3" :navigation="navigation" />
            <account-tab v-if="tab4" :navigation="navigation" />
        </nb-content>

        <!-- Footer -->
        <nb-footer>
            <nb-footer-tab>
                <nb-button :active="tab1" :onPress="toggleTab1">
                    <nb-icon name="apps" :active="tab1" />
                </nb-button>

                <nb-button :active="tab2" :onPress="toggleTab2">
                    <nb-icon name="camera" :active="tab2" />
                </nb-button>

                <nb-button :active="tab3" :onPress="toggleTab3">
                    <nb-icon name="compass" :active="tab3" />
                </nb-button>

                <nb-button :active="tab4" :onPress="toggleTab4">
                    <nb-icon name="call" :active="tab4" />
                </nb-button>
            </nb-footer-tab>
        </nb-footer>
    </nb-container>
</template>

<script>
import WelcomeTab from "./components/tabs/Welcome.vue";
import SearchTab from "./components/tabs/Search.vue";
import CartTab from "./components/tabs/Cart.vue";
import AccountTab from "./components/tabs/Account.vue";

export default {
    name: "Index",
    props: {
        navigation: { type: Object }
    },
    components: { WelcomeTab, SearchTab, CartTab, AccountTab },
    data() {
        return {
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false
        };
    },
    methods: {
        toggleTab1() {
            this.tab1 = true;
            this.tab2 = false;
            this.tab3 = false;
            this.tab4 = false;
        },
        toggleTab2() {
            this.tab1 = false;
            this.tab2 = true;
            this.tab3 = false;
            this.tab4 = false;
        },
        toggleTab3() {
            this.tab1 = false;
            this.tab2 = false;
            this.tab3 = true;
            this.tab4 = false;
        },
        toggleTab4() {
            this.tab1 = false;
            this.tab2 = false;
            this.tab3 = false;
            this.tab4 = true;
        }
    }
}
</script>
