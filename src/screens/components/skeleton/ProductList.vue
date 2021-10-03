<template>
    <view>
        <nb-grid v-if="horizontal">
            <nb-row v-for="i in 2" :key="i">
                <view class="hContent">
                    <view class="hImage skeleton" />
                    <view class="hRight">
                        <view class="text skeleton" />
                        <view class="text skeleton" />
                        <view class="text skeleton" />
                    </view>
                </view>
            </nb-row>
        </nb-grid>

        <nb-grid v-else>
            <nb-row v-for="i in 3" :key="i">
                <nb-col v-for="j in 2" :key="j">
                    <view class="vContent">
                        <view class="vImage skeleton" />
                        <view class="text skeleton" />
                        <view class="text skeleton" />
                    </view>
                </nb-col>
            </nb-row>
        </nb-grid>
    </view>
</template>

<script>
export default {
    name: 'ProductSkeleton',
    props: {
        horizontal: {
            default: false
        }
    }
}
</script>

<style scoped>
.skeleton {
    background-color: #E1E9EE;
}

.vContent {
    height: 230;
    width: 150;
    padding: 5;
    display: flex;
    flex-direction: column;
}

.vImage {
    height: 150;
    margin-bottom: 10;
}

.hContent {
    height: 100;
    width: 100%;
    padding: 5;
    display: flex;
    flex-direction: row;
    margin-bottom: 10;
}

.hImage {
    height: 100;
    width: 100;
}

.hRight {
    height: 100;
    width: 70%;
    padding: 10;
    display: flex;
    flex-direction: column;
}

.text {
    height: 20;
    border-radius: 5;
    margin-bottom: 5;
}
</style>
