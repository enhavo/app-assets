import Vue from "vue";
import AppComponent from "./Components/App.vue";
import { App } from "./App";

export class VueLoader
{
    private id: string;

    private vue: Vue;

    private app: App;

    constructor(id: string, app: App)
    {
        this.id = id;
        this.app = app;
    }

    load() {
        Vue.component('app', AppComponent);
        let self = this;
        this.vue = new Vue({
            el: '#' + this.id,
            data: this.app.getData(),
            render: function(createElement) {
                return createElement(AppComponent, {
                    'props': {
                        'menu': self.app.getData().menu,
                        'views': self.app.getData().views
                    }
                })
            }
        });

        return this.vue;
    }
}


