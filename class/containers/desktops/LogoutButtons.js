qx.Class.define("containers.desktops.LogoutButtons",
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
            var dashLabel = new qx.ui.basic.Label().set({ "rich" : true, "value" : "<h3>Logged as Raymond</h3>" });
            this.add(dashLabel, { left : 20, top : -4 });

            var dashMenu = new qx.ui.toolbar.ToolBar().set({marginTop: 35, marginLeft: 20});
            dashMenu.setSpacing(10);
            
            var btn1 = new qx.ui.form.Button("Logout").set({height: 10, width: 60});
            btn1.addListener("execute", function(e) {
                alert("Logout");
            });
            dashMenu.add(btn1);

            this.add(dashMenu, { right : 0 });
        }
    }
});

