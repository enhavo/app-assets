<template>
    <div class="app-view">
        <view-view></view-view>
        <flash-messages></flash-messages>
        <modal-component></modal-component>
        <action-bar></action-bar>
        <grid-grid></grid-grid>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import '@enhavo/app/assets/fonts/enhavo-icons.font'
import '@enhavo/app/assets/styles/view.scss'

@Options({})
export default class extends Vue {

}
</script>
