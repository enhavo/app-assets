import MainApp from "@enhavo/app/Main/MainApp";
import AbstractApplication from "@enhavo/app/AbstractApplication";
import AppInterface from "@enhavo/app/AppInterface";
import ViewStack from "@enhavo/app/ViewStack/ViewStack";
import MenuManager from "@enhavo/app/Menu/MenuManager";
import FrameStorage from "@enhavo/app/ViewStack/FrameStorage";
import ViewRegistry from "@enhavo/app/ViewStack/ViewRegistry";

export class MainApplication extends AbstractApplication
{
    protected viewStack: ViewStack;
    protected menuManager: MenuManager;
    protected frameStorage: FrameStorage;
    protected viewRegistry: ViewRegistry;

    public getApp(): AppInterface
    {
        if(this.app == null) {
            this.app = new MainApp(this.getDataLoader(), this.getViewStack());
        }
        return this.app;
    }

    public getViewStack(): ViewStack
    {
        if(this.viewStack == null) {
            this.viewStack = new ViewStack(
                this.getDataLoader().load().view_stack,
                this.getMenuManager(),
                this.getEventDispatcher(),
                this.getViewRegistry()
            );
        }
        return this.viewStack;
    }

    public getMenuManager(): MenuManager
    {
        if(this.menuManager == null) {
            this.menuManager = new MenuManager(this.getDataLoader().load().menu);
        }
        return this.menuManager;
    }

    public getFrameStorage(): FrameStorage
    {
        if(this.frameStorage == null) {
            this.frameStorage = new FrameStorage(this.getEventDispatcher());
        }
        return this.frameStorage;
    }

    public getViewRegistry(): ViewRegistry
    {
        if(this.viewRegistry == null) {
            this.viewRegistry = new ViewRegistry();
            this.viewRegistry.load();
        }
        return this.viewRegistry;
    }
}

let application = new MainApplication();
export default application;