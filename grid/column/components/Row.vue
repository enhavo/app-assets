<template>
    <div :class="{'view-table-row': true, 'active': data.active, 'selected': data.selected, 'clickable': grid.isRowClickable()}" @click="open()">
        <div class="checkbox-container" v-if="batchManager.hasBatches()">
            <input type="checkbox" v-on:change="changeSelect" v-on:click.stop :checked="data.selected" />
            <span></span>
        </div>
        <div class="view-table-row-columns">
            <template v-for="column in columnManager.columns">
                <component
                    class="view-table-col"
                    v-if="column.display"
                    v-bind:is="column.component"
                    v-bind:key="column.key"
                    v-bind:column="column"
                    v-bind:style="getColumnStyle(column)"
                    v-bind:data="getColumnData(column.key)"></component>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop, Inject } from "vue-property-decorator";
import RowData from "@enhavo/app/grid/column/RowData";
import * as $ from "jquery";
import BatchManager from "@enhavo/app/grid/batch/BatchManager";
import ColumnManager from "@enhavo/app/grid/column/ColumnManager";
import Grid from "@enhavo/app/grid/Grid";

@Options({})
export default class extends Vue
{
    @Prop()
    data: RowData;

    @Inject()
    batchManager: BatchManager;

    @Inject()
    columnManager: ColumnManager;

    @Inject()
    grid: Grid;

    mounted() {
        $(window).resize(() => {
            this.grid.resize();
            this.$forceUpdate();
        });
    }

    changeSelect() {
        this.grid.changeSelect(this.data, !this.data.selected);
    }

    open() {
        if (this.grid.isRowClickable()) {
            this.grid.open(this.data);
        }
    }

    calcColumnWidth(parts: number): string {
        let totalWidth = 0;
        for(let column of this.columnManager.columns) {
            if(column.display) {
                totalWidth += column.width;
            }
        }
        return (100 / totalWidth * parts) + '%';
    }

    getColumnStyle(column: any): object {
        let styles: object = Object.assign(
            {},
            column.style,
            {width: this.calcColumnWidth(column.width)} );

        return styles;
    }

    getColumnData(column: string): object {
        if( this.data.data.hasOwnProperty(column) ) {
            return this.data.data[column];
        }
        return null;
    }
}
</script>
