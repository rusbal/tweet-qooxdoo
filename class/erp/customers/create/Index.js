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

        var tabView = new qx.ui.tabview.TabView;
        this.add(tabView);

        this.addTabs(tabView);
    },

    members :
    {
        addTabs : function(tabView)
        { 
            tabView.add(new erp.customers.create.pages.Data);
        }
    }
});

