<template>
    <div v-bind:class="['grid', list.data.cssClass]">
        <div class="view-table">
            <div class="view-table-head">
                <div class="view-table-head-columns">
                    <div
                        v-for="column in columnManager.columns"
                        v-bind:key="column.key"
                        v-bind:style="getColumnStyle(column)"
                        class="view-table-col"
                        >
                        {{ column.label }}
                    </div>
                </div>
            </div>

            <template v-if="!list.data.loading">
                <template v-if="list.data.sortable">
                    <draggable
                        v-model="list.data.items"
                        group="list"
                        item-key="id"
                        v-on:change="save($event, null)"
                        @start="list.data.dragging = true"
                        @end="list.data.dragging = false"
                        :class="{'dragging': list.data.dragging}"
                    >
                        <template #item="{ element }">
                            <div class="list-group-item">
                                <list-item v-bind:data="element"></list-item>
                            </div>
                        </template>
                    </draggable>
                </template>
                <template v-else>
                    <template v-for="item in list.data.items">
                        <list-item v-bind:data="item"></list-item>
                    </template>
                </template>
            </template>

            <template v-else>
                <div class="loading-placeholder">
                    <div class="loading-indicator">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Options, Inject} from "vue-property-decorator";
import List from "@enhavo/app/list/List";
import ColumnManager from "@enhavo/app/grid/column/ColumnManager";

@Options({})
export default class extends Vue
{
    @Inject()
    list: List;

    @Inject()
    columnManager: ColumnManager;

    calcColumnWidth(parts: number): string {
        return (100 / 12 * parts) + '%';
    }

    getColumnStyle(column: any): object {
        return Object.assign(
            {},
            column.style,
            {width: this.calcColumnWidth(column.width)}
        );
    }

    save(event, parent)
    {
        if(event.added) {
            this.list.save(parent);
        } else if(event.moved) {
            this.list.save(parent);
        }
    }
}
</script>
