<template>
    <div class="app-toolbar" v-bind:class="{ 'menu-collapsed':!menuManager.data.open}">
        <div class="toolbar-item branding">
            <div class="branding-container" v-bind:style="brandingImageStyles" @click="home"></div>
        </div>

        <div class="toolbar-item" @click="menuManager.toogleMenu()">
            <div v-if="menuManager.data.open" class="menu-toggle">
                <span class="icon icon-chevron_left"></span>
            </div>
            <div v-if="!menuManager.data.open" class="menu-toggle">
                <span class="icon icon-chevron_right"></span>
            </div>
            <div v-if="menuManager.data.open" class="mobile-menu-toggle">
                <span class="icon icon-close"></span>
            </div>
            <div v-if="!menuManager.data.open" class="mobile-menu-toggle">
                <span class="icon icon-menu"></span>
            </div>
        </div>

        <div class="toolbar-item left">
            <template v-for="widget in widgetManager.primary">
                <component class="widget-container" v-bind:is="widget.component" v-bind:data="widget"></component>
            </template>
        </div>

        <div class="toolbar-item right">
            <template v-for="widget in widgetManager.secondary">
                <component class="widget-container" v-bind:is="widget.component" v-bind:data="widget"></component>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Options, Inject} from "vue-property-decorator";
import * as URI from 'urijs';
import MainApp from "@enhavo/app/main/MainApp";
import MenuManager from "@enhavo/app/menu/MenuManager";
import WidgetManager from "@enhavo/app/toolbar/widget/WidgetManager";

@Options({})
export default class extends Vue
{
    @Inject()
    mainApp: MainApp

    @Inject()
    menuManager: MenuManager

    @Inject()
    widgetManager: WidgetManager

    get brandingImageStyles() {
        if (this.mainApp.data.branding.logo) {
            return {
                backgroundImage: 'url(' + this.mainApp.data.branding.logo + ')',
            }
        }
        return {};
    }

    home() {
        let uri = new URI(window.location.href);
        window.location.href = uri.path()
    }
}
</script>
