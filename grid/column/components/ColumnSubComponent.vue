<template>
    <div class="view-table-col-sub">
        <template v-for="row in rows">
            <component 
                class="view-table-col-child" 
                v-bind:is="row.component" 
                v-bind:key="row.key"
                v-bind:data="getRowData(row.key)"></component>
        </template>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class ColumnSubComponent extends Vue {
        name: string = 'column-sub';

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






