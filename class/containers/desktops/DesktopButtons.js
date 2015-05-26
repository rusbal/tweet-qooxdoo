qx.Class.define("containers.desktops.DesktopButtons",
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
            var dashLabel = new qx.ui.basic.Label().set({ "rich"  : true, "value" : "<h1>My Dashboard</h1>" });
            this.add(dashLabel, { left : 20, top : -10 });

            var appLabel = new qx.ui.basic.Label().set({ "rich"  : true, "value" : "<h2>CreoERP Ver 0.01</h2>" });
            this.add(appLabel, { right : 0, top : -4 });


            var dashMenu = new qx.ui.toolbar.ToolBar().set({marginTop: 35, marginLeft: 20});
            dashMenu.setSpacing(10);
            
            // var dec1 = new qx.ui.decoration.Decorator();
            // dec1.setRadius(10, 10, 10, 10);
            // var btn1 = new qx.ui.menu.Button("Launch Pad").set({
            //     height: 50,
            //     width: 50
            // });
            // btn1.setDecorator(dec1);
            // btn1.addListener("execute", function() { alert("Nice alert here..."); }, this);
            // dashMenu.add(btn1);


            var btn1 = new qx.ui.form.Button("Launch").set({height: 60, width: 60});
            btn1.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn1);

            dashMenu.add(new qx.ui.toolbar.Separator());

            var btn2 = new qx.ui.form.Button("Btn2").set({height: 60, width: 60});
            btn2.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn2);

            var btn3 = new qx.ui.form.Button("Btn3").set({height: 60, width: 60});
            btn3.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn3);

            var btn4 = new qx.ui.form.Button("Btn4").set({height: 60, width: 60});
            btn4.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn4);

            var btn5 = new qx.ui.form.Button("Btn5").set({height: 60, width: 60});
            btn5.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn5);

            var btn6 = new qx.ui.form.Button("Btn6").set({height: 60, width: 60});
            btn6.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn6);

            var btn7 = new qx.ui.form.Button("Btn7").set({height: 60, width: 60});
            btn7.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn7);

            var btn8 = new qx.ui.form.Button("Btn8").set({height: 60, width: 60});
            btn8.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn8);

            var btn9 = new qx.ui.form.Button("Btn9").set({height: 60, width: 60});
            btn9.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn9);

            var btn10 = new qx.ui.form.Button("Btn10").set({height: 60, width: 60});
            btn10.addListener("execute", function(e) {
                alert("Hello World!");
            });
            dashMenu.add(btn10);

            this.add(dashMenu, { left : 0, top : 0 });
        }
    }
});

