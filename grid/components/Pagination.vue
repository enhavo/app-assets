<template>
    <div class="view-table-pagination">
        <div class="pagination-select">
            <div class="label">{{ translator.trans('enhavo_app.grid.label.entry_per_page') }}:</div>
            <v-select v-model="grid.configuration.pagination" :options="getOptions()" :clearable="false" :searchable="false" :reduce="value => value.code"></v-select>
        </div>

        <div class="pagination-nav">
            <div v-if="grid.configuration.count" v-on:click="clickPrev" v-bind:class="['pagination-nav-item', 'button', 'button--prev', {'disabled': !hasPrevPage()}]">
                <i class="icon icon-navigate_before"></i>
            </div>

            <template v-if="!isFirstSegment()">
                <div class="pagination-nav-item number" v-on:click="clickFirst">1</div>
                <div class="pagination-nav-item spacer">...</div>
            </template>

            <div
                v-for="page in grid.configuration.pages"
                v-bind:key="page"
                v-bind:class="['pagination-nav-item', 'number', {active: getCurrentPage() === page}]"
                v-on:click="clickPage(page)">
                {{ page }}
            </div>

            <template v-if="!isLastSegment()">
                <div class="pagination-nav-item spacer">...</div>
                <div class="pagination-nav-item number" v-on:click="clickLast">{{ getLastPage() }}</div>
            </template>

            <div v-if="grid.configuration.count" v-on:click="clickNext" v-bind:class="['pagination-nav-item', 'button', 'button--next', {'disabled': !hasNextPage()}]">
                <i class="icon icon-navigate_next"></i>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import {Vue, Options, Inject, Watch} from "vue-property-decorator";
import Grid from "@enhavo/app/grid/Grid";
import Translator from "@enhavo/core/Translator";

@Options({})
export default class extends Vue
{
    @Inject()
    grid: Grid

    @Inject()
    translator: Translator

    itemsAround: number = 2;

    @Watch('grid.configuration.pagination')
    changePagination(value: number) {
        this.grid.changePagination(value);
    }

    getOptions() {
        let steps = [];
        for (let step of this.grid.configuration.paginationSteps) {
            steps.push({
                label: step,
                code: step
            })
        }
        return steps;
    }

    getCurrentPage(): number {
        return this.grid.configuration.page;
    }

    getLastPage(): number {
        if(!this.grid.configuration.count || !this.grid.configuration.pagination) {
            return 1;
        }
        return Math.ceil(this.grid.configuration.count/this.grid.configuration.pagination);
    }

    isFirstPage(): boolean {
        return this.getCurrentPage() == 1;
    }

    isLastPage(): boolean {
        return this.getCurrentPage() == this.getLastPage();
    }

    hasPrevPage(): boolean {
        return this.getCurrentPage() !== 1;
    }

    hasNextPage(): boolean {
        return this.getLastPage() !== this.getCurrentPage();
    }

    getSegmentLength(): number {
        return this.itemsAround * 2 + 1; // 2 items each side plus the current page
    }

    isFirstSegment(): boolean {
        return this.getCurrentPage() <= this.getSegmentLength();
    }

    isLastSegment(): boolean {
        return this.getCurrentPage() > (this.getLastPage() - this.getSegmentLength());
    }

    clickFirst(): void {
        this.clickPage(1);
    }

    clickLast(): void {
        this.clickPage(this.getLastPage());
    }

    clickPrev(): void {
        let page = this.getCurrentPage();
        if(page > 1) {
            this.clickPage(page - 1);
        }
    }

    clickNext(): void {
        let page = this.getCurrentPage();
        if(page < this.getLastPage()) {
            this.clickPage(page + 1);
        }
    }

    clickPage(page: number): void {
        this.grid.changePage(page);
    }
}
</script>
