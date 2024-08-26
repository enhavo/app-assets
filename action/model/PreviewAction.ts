import { AbstractAction } from "@enhavo/app/action/model/AbstractAction";
import ExistsData from "@enhavo/app/frame/ExistsData";
import DataStorageEntry from "@enhavo/app/frame/DataStorageEntry";
import View from "@enhavo/app/view/View";
import {FrameEventDispatcher} from "@enhavo/app/frame/FrameEventDispatcher";

export class PreviewAction extends AbstractAction
{
    public url: string;

    private static listenerLoaded = false;

    private readonly view: View;
    private readonly eventDispatcher: FrameEventDispatcher;

    constructor(view: View, eventDispatcher: FrameEventDispatcher) {
        super();
        this.view = view;
        this.eventDispatcher = eventDispatcher;
    }

    loadListener()
    {
        if(PreviewAction.listenerLoaded) {
            return;
        }

        PreviewAction.listenerLoaded = true;

        this.view.loadValue('preview-view', (id) => {
            let viewId = id ? parseInt(id) : null;
            if(viewId) {
                this.sendData(viewId);
            }
        });

        this.eventDispatcher.on('loaded', (event: LoadedEvent) => {
            this.view.loadValue('preview-view', (id) => {
                let viewId = id ? parseInt(id) : null;
                if(event.id == viewId) {
                    this.sendData(viewId);
                }
            });
        });
    }

    execute(): void
    {
        this.open(this.url, 'preview-view');
    }

    private sendData(id :number)
    {
        let data = $('form').serializeArray();
        this.eventDispatcher.dispatch(new DataEvent(id, data));
    }

    private open(url: string, key: string = null, label: string = null)
    {
        this.eventDispatcher.dispatch(new LoadDataEvent(key)).then((data: DataStorageEntry) => {
            let viewId: number = null;
            if(data) {
                viewId = data.value;
            }
            if(viewId != null) {
                this.eventDispatcher.dispatch(new ExistsEvent(viewId)).then((data: ExistsData) => {
                    if(data.exists) {
                        this.sendData(viewId);
                    } else {
                        this.view.openView(url, key, label);
                    }
                });
            } else {
                this.view.openView(url, key, label);
            }
        });
    }
}
