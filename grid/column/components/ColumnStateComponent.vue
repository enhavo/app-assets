<template>
    <div :class="{'view-table-col-text': true, 'text-wrap': column.wrap}" :style="getStyle()">
        {{ data.value }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import StateColumn from "@enhavo/app/grid/column/model/StateColumn";

    @Component
    export default class ColumnTextComponent extends Vue
    {
        name: string = 'column-state';

        @Prop()
        data: any;

        @Prop()
        column: StateColumn;

        getStyle() {
            return 'color: '+this.data.color;
        }
    }
</script>






