<template>
    <a :href="data.mainUrl" v-bind:class="{'menu-child-title menu-item': true, 'selected': data.selected}" @click="open($event)">
        <div class="symbol-container">
            <i v-bind:class="['icon', icon]" aria-hidden="true"></i>
        </div>
        <div class="label-container">
            {{ label }}
        </div>
        <menu-notification v-if="notification" v-bind:data="notification"></menu-notification>
    </a>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import MenuItem from '@enhavo/app/menu/model/MenuItem';

@Options({})
export default class extends Vue
{
    @Prop()
    data: MenuItem;

    get label(): string|boolean {
        return (this.data && this.data.label) ? this.data.label : false;
    }

    get icon(): string {
        return (this.data && this.data.icon) ? 'icon-' + this.data.icon : '';
    }

    get notification(): object {
        return (this.data && this.data.notification) ? this.data.notification : false;
    }

    open(event): void
    {
        event.preventDefault();
        this.data.open()
    }
}
</script>





