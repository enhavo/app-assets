import {MenuManager} from '@enhavo/app/menu/MenuManager';
import {Branding} from '@enhavo/app/model/Branding';
import {ToolbarWidgetManager} from "@enhavo/app/toolbar/ToolbarWidgetManager";
import {ToolbarWidgetInterface} from "@enhavo/app/toolbar/ToolbarWidgetInterface";
import {Router} from "@enhavo/app/routing/Router";
import {FrameStackSubscriber} from "@enhavo/app/frame/FrameStackSubscriber";
import {FrameStateManager} from "@enhavo/app/frame/FrameStateManager";
import {FrameManager} from "@enhavo/app/frame/FrameManager";
import {Frame} from "@enhavo/app/frame/Frame";
import {FlashMessenger} from "@enhavo/app/flash-message/FlashMessenger";
import {UiManager} from "@enhavo/app/ui/UiManager";

export class MainManager
{
    public loading: boolean = true;
    public branding: Branding;
    public primaryToolbarWidgets: ToolbarWidgetInterface[];
    public secondaryToolbarWidgets: ToolbarWidgetInterface[];
    private defaultTitle: string = ''

    constructor(
        private frameSubscriber: FrameStackSubscriber,
        private frameStateManager: FrameStateManager,
        private frameManager: FrameManager,
        private menuManager: MenuManager,
        private widgetManager: ToolbarWidgetManager,
        private router: Router,
        private flashMessenger: FlashMessenger,
        private uiManager: UiManager,
    ) {
    };

    async load()
    {
        this.defaultTitle = document.title;

        this.frameManager.setMainFrame(true);
        this.frameStateManager.subscribe();
        this.frameSubscriber.subscribe();
        this.flashMessenger.subscribe();
        this.subscribe();

        await this.frameStateManager.loadState();

        let url = this.router.generate('enhavo_app_admin_api_main');

        const response = await fetch(url);

        if (!response.ok) {
            this.uiManager.alert({
                message: 'Error Loading'
            });
            alert('Error Loading');
            return;
        }

        const data = await response.json();

        this.primaryToolbarWidgets = this.widgetManager.createToolbarWidgets(data['toolbarWidgetsPrimary']);
        this.secondaryToolbarWidgets = this.widgetManager.createToolbarWidgets(data['toolbarWidgetsSecondary']);
        this.branding = data['branding'];

        let menuItems = this.menuManager.createMenuItems(data['menu']);
        this.menuManager.setMenuItems(menuItems);

        let frames = await this.frameManager.getFrames();
        if (frames.length === 0) {
            this.menuManager.start();
        }

        this.loading = false;
    }

    private subscribe()
    {
        this.frameManager.on('frame_updated', async (event) => {
            this.updateTitle()
        });

        this.frameManager.on('frame_removed', async (event) => {
            this.updateTitle()
        });

        this.frameManager.on('frame_added', async (event) => {
            this.updateTitle()
        });
    }

    private updateTitle()
    {
        this.frameManager.getFrames().then((frames: Frame[]) => {
            for (let frame of frames) {
                if (frame.focus) {
                    document.title = frame.label != '' ? frame.label : this.defaultTitle;
                }
            }
        });
    }
}
