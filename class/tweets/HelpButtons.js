qx.Class.define("tweets.HelpButtons",
{
    extend : qx.ui.window.Desktop,
    construct : function()
    {
        var mgr = new qx.ui.window.Manager();
        this.base(arguments, mgr);
        this.buildMenu();
    },
    members : { 
        buildMenu : function() 
        { 
            var dashLabel = new qx.ui.basic.Label().set({ "rich" : true, "value" : "<h3>Help</h3>" });
            this.add(dashLabel, { left : 20, top : -4 });

            var dashMenu = new qx.ui.toolbar.ToolBar().set({marginTop: 35, marginLeft: 20});
            dashMenu.setSpacing(10);
            
            var btn1 = new qx.ui.form.Button("Help").set({height: 60, width: 60});
            btn1.addListener("execute", function(e) {
                alert("Help is here!");
            });
            dashMenu.add(btn1);

            this.add(dashMenu, { left : 0, top : 0 });
        }
    }
});

