<template>
    <span v-bind:class="['menu-notification', cssClass]">
        {{ label }}
    </span>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component()
    export default class MenuNotificationComponent extends Vue {
        name: string = 'menu-notification';

        @Prop()
        data: Object;

        get label(): string {
            return (this.data && this.data.label) ? this.data.label : '';
        }

        get cssClass(): string {
            return (this.data && this.data.class) ? this.data.class : '';
        }
    }
</script>

<style lang="scss" scoped>
    .menu-notification { 
        background-color: gold;
    }
</style>






