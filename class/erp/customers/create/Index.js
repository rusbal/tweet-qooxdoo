/**
 * @lint ignoreDeprecated(alert)
 */
qx.Class.define("erp.customers.create.Index",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        this.base(arguments, "Create new customer", "icon/16/apps/internet-feed-reader.png");

        this.moveTo(170, 220);
        this.setWidth(750);
        this.setHeight(800);

        this.setLayout(new qx.ui.layout.VBox());

        this.container = new qx.ui.tabview.TabView;
        this.add(this.container, {
            flex : 1
        });

        this.tabOne();
    },
    members :
    {
        container : null,

        tabOne : function()
        { 
            var page = new erp.customers.create.pages.Data;
            this.container.add(page);
        }
    }
});

