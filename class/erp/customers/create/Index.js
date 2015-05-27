qx.Class.define("erp.customers.create.Index",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        this.base(arguments, "Create new customer", "icon/16/apps/internet-feed-reader.png");
        this.moveTo(170, 220);
        this.setWidth(750);
        this.setHeight(600);
        this.createWindow();
    },
    members :
    {
        createWindow : function()
        {
            this.setLayout(new qx.ui.layout.VBox(10));
            var container = new qx.ui.tabview.TabView;
            this.add(container, {
                flex : 1
            });

            var page = new erp.customers.create.pages.Data;
            container.add(page);
        }
    }
});

