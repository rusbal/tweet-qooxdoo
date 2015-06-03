/**
 * @lint ignoreDeprecated(alert)
 */
qx.Class.define("erp.customers.create.Index",
{
    extend : qx.ui.window.Window,

    include : [
        mixins.MSettings
    ],

    construct : function()
    {
        this.base(arguments, "Create new customer", "icon/16/apps/internet-feed-reader.png");

        this.moveTo(170, 220);
        this.setHeight(this.availableWindowHeight());

        this.setLayout(new qx.ui.layout.VBox());

        this.container = new qx.ui.tabview.TabView;
        this.add(this.container, {
            flex : 1
        });

        this.tabs();
    },
    members :
    {
        container : null,

        tabs : function()
        { 
            this.container.add(new erp.customers.create.pages.Data);
            // this.container.add(new erp.customers.create.pages.Data2);
        }
    }
});

