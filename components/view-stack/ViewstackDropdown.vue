<template>
    <div class="viewstack-dropdown-container" v-if="getHasMoreThanOneView()" v-click-outside="close" v-bind:class="{'selected': isOpen}">
        <div class="dropdown-trigger" @click="toggle()">
            <span class="icon icon-more_horiz"></span>
        </div>
        <ul v-if="isOpen" class="viewstack-dropdown">
            <template v-for="view in viewStack.data.views">
                <li v-if="!view.removed" @click="maximize(view);close();">{{ view.label }}</li>
            </template>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import ViewStack from "../../view-stack/ViewStack";

const viewStack = inject<ViewStack>('viewStack');
let isOpen: boolean = false;

function toggle(): void 
{
    isOpen = !isOpen;
}

function getHasMoreThanOneView() 
{
    let count = 0;
    for (let i = 0; i < viewStack.data.views.length; i++) {
        if (viewStack.data.views[i].removed == false) {
            count++;
        }
    }
    return count > 1;
}

function maximize(element) 
{
    for (let view of viewStack.data.views) {
        view.minimize = true;
        view.focus = false;
    }
    element.minimize = false;
    element.focus = true;
}

function close(): void 
{
    isOpen = false;
}
</script>
