<template>
    <div class="view-table-col-sub">
        <template v-for="row in rows">
            <component 
                class="view-table-col-child" 
                :is="row.component"
                :data="getRowData(row.key)"></component>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";

@Options({})
export default class ColumnSubComponent extends Vue
{
    @Prop()
    data: any;

    @Prop()
    column: any;

    get rows(): object {
        if( this.column.hasOwnProperty('rows') ) {
            return this.column['rows'];
        }
        return null;
    }

    getRowData(row: string): any {
        if( this.data.hasOwnProperty(row) ) { // TODO check if clause
            return this.data[row];
        }
        return null;
    }
}
</script>

<style lang="scss" scoped>
    .view-table-col-sub { 
        background-color: seagreen;

        .view-table-col-child {
            margin-bottom: 5px; padding-top: 5px; padding-bottom: 5px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>
