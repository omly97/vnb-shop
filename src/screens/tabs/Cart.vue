<template>
    <view>
        <nb-h1>Cart</nb-h1>

        <swipe-list-view
            :data="listData"
            :leftOpenValue="75"
            :stopLeftSwipe="100"
            :rightOpenValue="-75"
            :stopRightSwipe="-100"
            :keyExtractor="item => item.id.toString()"
        >
            <nb-view
                render-prop-fn="renderItem"
                arguments="data"
                :style="{
                    padding: 20,
                    height: 60,
                    backgroundColor: '#fff',
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1
                }"
            >
                <nb-text>{{ data.item.text }}</nb-text>
            </nb-view>
            <view
                render-prop-fn="renderHiddenItem"
                arguments="data"
                :style="{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 60
                }"
            >
                <nb-button success :onPress="() => alertAdd(data.item)" :style="styles.swipeBtnLeft">
                    <view :style="styles.swipeBtnIconContainer">
                        <nb-icon name="add" :style="styles.swipeBtnIcon" />
                    </view>
                </nb-button>
                <nb-button danger :onPress="() => alertTrash(data.item)" :style="styles.swipeBtnRight">
                    <view :style="styles.swipeBtnIconContainer">
                        <nb-icon name="trash" :style="styles.swipeBtnIcon" />
                    </view>
                </nb-button>
            </view>
        </swipe-list-view>
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
            listData: [
                {
                    id: 0,
                    text: "Swipe me to left and right"
                }
            ],
            styles: {
                swipeBtnLeft: {
                    flex: 1,
                    height: "100%",
                    justifyContent: "flex-start",
                    borderRadius: 0
                },
                swipeBtnRight: {
                    flex: 1,
                    height: "100%",
                    justifyContent: "flex-end",
                    borderRadius: 0
                },
                swipeBtnIconContainer: {
                    height: 60,
                    width: 75,
                    justifyContent: "center",
                    alignItems: "center"
                },
                swipeBtnIcon: {
                    fontSize: 30
                }
            }
        };
    },
    methods: {
        alertAdd (item) {
            alert("Add" + item.text);
        },
        alertTrash (item) {
            alert("Trash" + item.text);
        }
    }
}
</script>
