<template>
    <root>
        <app-navigation></app-navigation>
    </root>
</template>

<script>
import { createAppContainer, createStackNavigator, createDrawerNavigator } from "vue-native-router";
import { Root } from "native-base";

import IndexScreen from "./screens/Index.vue";
import DetailScreen from "./screens/Detail.vue";

const StackNavigator = createStackNavigator(
    {
        Index: { screen: IndexScreen },
        Detail: { screen: DetailScreen },
    },
    {
        initialRouteName: "Index",
        headerMode: "none"
    }
)

const AppNavigation = createAppContainer(StackNavigator);

export default {
    components: { Root, AppNavigation }
}
</script>
