<template>
    <div class="menu style-compact">
        <template v-for="item in menuManager.data.items">
            <component class="menu-child" v-bind:is="item.component" v-bind:data="item"></component>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Inject } from "vue-property-decorator";
import MenuManager from "@enhavo/app/menu/MenuManager";

@Options({})
export default class extends Vue
{
    @Inject()
    menuManager: MenuManager;
}
</script>
