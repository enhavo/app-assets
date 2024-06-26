import ViewData from "@enhavo/app/view/ViewData";
import Confirm from "@enhavo/app/view/Confirm";
import * as _ from 'lodash';
import EventDispatcher from "@enhavo/app/view-stack/EventDispatcher";
import ClickEvent from "@enhavo/app/view-stack/event/ClickEvent";
import CreateEvent from "@enhavo/app/view-stack/event/CreateEvent";
import ExistsEvent from "@enhavo/app/view-stack/event/ExistsEvent";
import ExistsData from "@enhavo/app/view-stack/ExistsData";
import CloseEvent from "@enhavo/app/view-stack/event/CloseEvent";
import ViewInterface from "@enhavo/app/view-stack/ViewInterface";
import LoadDataEvent from "@enhavo/app/view-stack/event/LoadDataEvent";
import LoadGlobalDataEvent from "@enhavo/app/view-stack/event/LoadGlobalDataEvent";
import DataStorageEntry from "@enhavo/app/view-stack/DataStorageEntry";
import SaveDataEvent from "@enhavo/app/view-stack/event/SaveDataEvent";
import SaveGlobalDataEvent from "@enhavo/app/view-stack/event/SaveGlobalDataEvent";
import SaveStateEvent from "@enhavo/app/view-stack/event/SaveStateEvent";
import RemoveEvent from "@enhavo/app/view-stack/event/RemoveEvent";
import LoadedEvent from "@enhavo/app/view-stack/event/LoadedEvent";
import LoadingEvent from "@enhavo/app/view-stack/event/LoadingEvent";
import ChangeUrlEvent, {ChangeUrlData} from "@enhavo/app/view-stack/event/ChangeUrlEvent";
import ComponentRegistryInterface from "@enhavo/core/ComponentRegistryInterface";
import Translator from "@enhavo/core/Translator";
import Router from "@enhavo/core/Router";

export default class View
{
    public data: ViewData;

    private readonly componentRegistry: ComponentRegistryInterface;
    private readonly router: Router;
    private readonly translator: Translator;
    private eventDispatcher: EventDispatcher;
    private initialized: boolean = false;

    constructor(
        data: ViewData,
        router: Router,
        translator: Translator,
        componentRegistry: ComponentRegistryInterface
    ) {
        this.data = data;
        this.router = router;
        this.translator = translator;
        this.componentRegistry = componentRegistry;
    }

    public static initView(label: string = '')
    {
        (new EventDispatcher()).dispatch(new LoadedEvent(View.getIdFromUrl(), label, true));
    }

    init() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;

        if(this.data === null) {
            this.data = new ViewData;
        } else {
            this.data = _.assignWith(this.data, new ViewData, (objValue, srcValue) => {
                return _.isUndefined(objValue) ? srcValue : objValue;
            });
        }

        if(this.data.id == null) {
            this.data.id = View.getIdFromUrl();
        } else if(typeof this.data.id === 'string') {
            this.data.id = parseInt(this.data.id);
        }

        this.componentRegistry.registerStore('view', this);
        this.componentRegistry.registerStore('translator', this.translator);
        this.componentRegistry.registerStore('router', this.router);
        this.data = this.componentRegistry.registerData(this.data);

        window.addEventListener('click', () => {
            this.eventDispatcher.dispatch(new ClickEvent(this.getId()));
        });

        this.bindEventHandlerLinksWithTargetView();
    }

    private static getIdFromUrl(): number|null
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
        return this.data.id;
    }

    isRoot()
    {
        return this.data.id == 0;
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

    public open(url: string, key: string = null, label: string = null): Promise<ViewInterface>
    {
        return new Promise((resolve, reject) => {
            if(key) {
                this.eventDispatcher.dispatch(new LoadDataEvent(key)).then((data: DataStorageEntry) => {
                    let viewId: number = null;
                    if(data != null) {
                        viewId = data.value;
                    }
                    if(viewId != null) {
                        this.eventDispatcher.dispatch(new ExistsEvent(viewId)).then((data: ExistsData) => {
                            if(data.exists) {
                                this.eventDispatcher.dispatch(new CloseEvent(viewId))
                                    .then(() => {
                                        this.openView(url, key, label).then((view: ViewInterface) => {
                                            resolve(view)
                                        }).catch(() => {
                                            reject();
                                        });
                                    })
                                    .catch(() => {})
                                ;
                            } else {
                                this.openView(url, key, label).then((view: ViewInterface) => {
                                    resolve(view)
                                }).catch(() => {
                                    reject();
                                });
                            }
                        });
                    } else {
                        this.openView(url, key, label).then((view: ViewInterface) => {
                            resolve(view)
                        }).catch(() => {
                            reject();
                        });
                    }
                });
            } else {
                this.openView(url, null, label).then((view: ViewInterface) => {
                    resolve(view)
                }).catch(() => {
                    reject();
                });
            }
        })
    }

    public openView(url: string, key: string = null, label: string = null): Promise<ViewInterface>
    {
        return new Promise((resolve, reject) => {
            this.eventDispatcher.dispatch(new CreateEvent({
                label: label,
                component: 'iframe-view',
                url: url
            }, this.getId())).then((view: ViewInterface) => {
                if (key) {
                    this.storeValue(key, view.id);
                }
                resolve(view);
                this.eventDispatcher.dispatch(new SaveStateEvent())
            }).catch(() => {
                reject();
            });
        });
    }

    public storeValue(key: string, value: any, callback: () => void = () => {})
    {
        return new Promise((resolve, reject) => {
            this.eventDispatcher.dispatch(new SaveDataEvent(key, value)).then(() => {
                callback();
                resolve();
            }).catch(() => {
                reject();
            });
        })
    }

    public loadValue(key: string, callback: (value: string) => void): Promise<string>
    {
        return new Promise((resolve, reject) => {
            this.eventDispatcher.dispatch(new LoadDataEvent(key)).then((data: DataStorageEntry) => {
                let value = null;
                if (data != null) {
                    value = data.value;
                }
                resolve();
                callback(value);
            })
            .catch(() => {
                reject();
            });
        });
    }

    public storeGlobalValue(key: string, value: any, callback: () => void = () => {})
    {
        return new Promise((resolve, reject) => {
            this.eventDispatcher.dispatch(new SaveGlobalDataEvent(key, value)).then(() => {
                callback();
                resolve();
            }).catch(() => {
                reject();
            });
        });
    }

    public loadGlobalValue(key: string, callback: (value: string) => void): Promise<string>
    {
        return new Promise((resolve, reject) => {
            this.eventDispatcher.dispatch(new LoadGlobalDataEvent(key))
                .then((data: DataStorageEntry) => {
                    let value = null;
                    if (data != null) {
                        value = data.value;
                    }
                    resolve();
                    callback(value);
                })
                .catch(() => {
                    reject();
                });
        });
    }

    public addDefaultCloseListener(): void
    {
        this.eventDispatcher.on('close', (event: CloseEvent) => {
            if(this.getId() === event.id) {
                event.resolve();
                this.eventDispatcher.dispatch(new RemoveEvent(this.getId(), event.saveState));
            }
        });
    }

    public ready()
    {
        this.eventDispatcher.dispatch(new LoadedEvent(this.getId(), this.data.label, this.data.closeable));
    }

    public exit()
    {
        this.eventDispatcher.dispatch(new LoadingEvent(this.getId()));
    }

    public setEventDispatcher(dispatcher: EventDispatcher)
    {
        this.eventDispatcher = dispatcher;
    }

    public checkUrl(clearStorage: boolean = false)
    {
        let uri = new URL(window.location.href);
        uri.searchParams.delete('view_id');

        this.eventDispatcher.dispatch(new ChangeUrlEvent(this.getId(), uri.toString(), clearStorage))
            .then((data: ChangeUrlData) => {
                if(data.changed) {
                    this.eventDispatcher.dispatch(new SaveStateEvent());
                }
            }
        );
    }

    private bindEventHandlerLinksWithTargetView()
    {
        let self = this;
        document.addEventListener('click', (event) => {
            if (event.target.closest('a[target="_view"]')) {
                event.preventDefault();
                self.openView(this.getAttribute('href'));
            }
        });
    }
}
