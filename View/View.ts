import ViewData from "@enhavo/app/View/ViewData";
import Confirm from "@enhavo/app/View/Confirm";
import * as _ from 'lodash';
import EventDispatcher from "@enhavo/app/ViewStack/EventDispatcher";
import ClickEvent from "@enhavo/app/ViewStack/Event/ClickEvent";
import ClearEvent from "@enhavo/app/ViewStack/Event/ClearEvent";
import CreateEvent from "@enhavo/app/ViewStack/Event/CreateEvent";

export default class View
{
    private readonly id: number|null;
    private data: ViewData;
    private eventDispatcher: EventDispatcher;

    constructor(data: ViewData, eventDispatcher: EventDispatcher)
    {
        this.eventDispatcher = eventDispatcher;
        this.id = this.getIdFromUrl();
        _.extend(data, new ViewData);
        this.data = data;
        this.data.id = this.id;

        window.addEventListener('click', () => {
            this.eventDispatcher.dispatch(new ClickEvent(this.id));
        });
    }

    private getIdFromUrl(): number|null
    {
        let url = new URL(window.location.href);
        let id = parseInt(url.searchParams.get("view_id"));
        if(id > 0) {
            return id
        }
        return 0;
    }

    getId(): number|null
    {
        return this.id;
    }

    isRoot()
    {
        return this.id == 0;
    }

    confirm(confirm: Confirm)
    {
        if(confirm == null) {
            this.data.confirm = null;
        } else if(this.data.confirm == null) {
            confirm.setView(this);
            this.data.confirm = confirm;
        }
    }

    alert(message: string)
    {
        if(this.data.alert == null) {
            this.data.alert = message;
        }
    }

    loading()
    {
        this.data.loading = true;
    }

    loaded()
    {
        this.data.loading = false;
    }

    openView()
    {

    }
}