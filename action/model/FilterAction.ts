import AbstractAction from "@enhavo/app/action/model/AbstractAction";
import * as $ from "jquery";

export default class FilterAction extends AbstractAction
{
    private open: boolean = false;

    execute(): void
    {
        this.open = !this.open;
        $(document).trigger('gridFilter', this.open);
    }
}