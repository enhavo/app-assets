<template>
    <div class="view-stack" :ref="(el) => updateWidth(el)">
        <div class="view-container" v-bind:class="{'has-viewstack-dropdown': getHasMoreThanOneView()}">
            <template v-for="view in viewStack.views">
                <view-stack-view v-bind:data="view" v-if="!view.removed"></view-stack-view>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import {inject, ref, onMounted} from "vue";
import ViewStack from "@enhavo/app/view-stack/ViewStack";

const viewStack = inject<ViewStack>('viewStack');

function updateWidth(container: HTMLElement)
{
    viewStack.data.width = container.clientWidth;
}

function getHasMoreThanOneView() 
{
    let count = 0;
    for (let i = 0; i < viewStack.views.length;i++) {
        if (viewStack.views[i].removed == false) {
            count++;
        }
    }
    return count > 1;
}
</script>

<style lang="scss" scoped>
.view-stack {width:100%;flex:1 0 0;
    .view-container {height:100%;display:flex;}
}
</style>






