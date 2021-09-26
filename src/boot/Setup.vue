<template>
    <view class="container">
        <app-loading v-if="!isAppReady"> </app-loading>
        <app v-if="isAppReady"></app>
    </view>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import AppLoading from "expo-app-loading";
import App from "../App.vue";

// plugins
import axios from "../plugins/axios";
import store from "../store/index";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

// registering all plugins
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;

export default {
    components: { App, AppLoading },
    data() {
        return {
            isAppReady: false
        };
    },
    created() {
        this.loadFonts();
    },
    methods: {
        async loadFonts() {
            try {
                this.isAppReady = false;
                await Font.loadAsync({
                    Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
                    Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
                    ionicons: Ionicons.font["ionicons"]
                });
                this.isAppReady = true;
            } catch (error) {
                console.log("some error occured", error);
                this.isAppReady = true;
            }
        }
    }
};
</script>

<style>
.container {
    flex: 1;
}
</style>
