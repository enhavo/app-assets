<template>
    <div class="modal">
        <div class="modal-form-container" v-show="!modal.loading">
            <div :ref="(el) => output = el" style="color: #fff; overflow-y: scroll; width: 500px; height: 500px; background-color: #000"><pre v-html="convert(modal.output)"></pre></div>
            <div class="buttons">
                <button @click="modal.close()" class="modal-btn">{{ modal.closeLabel }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {watch, ref} from "vue";
import OutputStreamModal from "@enhavo/app/modal/model/OutputStreamModal"
import * as Convert from "ansi-to-html";
import $ from "jquery";

const props = defineProps<{
    modal: OutputStreamModal
}>()

const modalOutput = ref(props.modal.output);
let output: HTMLElement = null;

watch(modalOutput, async() => {
    window.setTimeout(() => {
        $(output).scrollTop($(output).height());
    }, 100);
});

function convert(value: string): string
{
    const convert = new Convert();
    return convert.toHtml(value)
}
</script>
