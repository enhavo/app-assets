import $ from "jquery";
import { AbstractAction } from "@enhavo/app/action/model/AbstractAction";

export class EventAction extends AbstractAction
{
    public event: string;

    execute(): void
    {
        $(document).trigger(this.event);
    }
}