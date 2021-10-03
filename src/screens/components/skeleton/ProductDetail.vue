<template>
    <view class="content">
        <view class="image skeleton" />
        <view class="text skeleton" />
        <view class="badge skeleton" />
        <view class="text skeleton" />
        <view class="text skeleton" />
        <view class="button skeleton" />
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

.content {
    /*height: 230;
    width: 150;*/
    padding: 15;
    display: flex;
    flex-direction: column;
}

.image {
    height: 250;
    margin-bottom: 25;
}

.badge {
    height: 15;
    width: 90;
    align-self: center;
    border-radius: 5;
    margin-bottom: 5;
}

.text {
    height: 20;
    border-radius: 5;
    margin-bottom: 5;
}

.button {
    height: 30;
    border-radius: 5;
    margin-top: 25;
    margin-bottom: 5;
}
</style>
