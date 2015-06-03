/**
 * @lint ignoreDeprecated(alert)
 */
qx.Class.define("erp.customers.create.Index",
{
    extend : qx.ui.window.Window,

    construct : function()
    {
        this.base(arguments, "Create new customer", "icon/16/apps/internet-feed-reader.png");
        this.setLayout(new qx.ui.layout.VBox());
        this.addTabs();
    },

    members :
    {
        addTabs : function()
        { 
            var tabView = new qx.ui.tabview.TabView;
            tabView.add(new erp.customers.create.pages.Data);
            this.add(tabView);
        }
    }
});

