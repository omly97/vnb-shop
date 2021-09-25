<template>
    <root>
        <app-navigation></app-navigation>
    </root>
</template>

<script>
import { createAppContainer, createStackNavigator, createDrawerNavigator } from "vue-native-router";
import { Root } from "native-base";

import IndexScreen from "./screens/Index.vue";

const StackNavigator = createStackNavigator(
    {
        Index: { screen: IndexScreen },
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
