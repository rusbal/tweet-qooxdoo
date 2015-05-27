qx.Class.define("erp.items.create.Index",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        this.base(arguments, "Items : Create : Index", "icon/16/apps/internet-feed-reader.png");
        this.moveTo(170, 220);
        this.setWidth(750);
        this.setHeight(300);
        this.createWindow();
    },
    members :
    {
        createWindow : function()
        {
            this.setLayout(new qx.ui.layout.VBox(10));
            var tabView = new qx.ui.tabview.TabView;
            this.add(tabView, {
                flex : 1
            });

            var tab1 = new qx.ui.tabview.Page("Basic info");
            tabView.add(tab1);
            // this.basicInfo(tab1);

            var tab2 = new qx.ui.tabview.Page("Categories");
            tabView.add(tab2);

            var tab3 = new qx.ui.tabview.Page("Images");
            tabView.add(tab3);

            var tab4 = new qx.ui.tabview.Page("Variants");
            tab4.setEnabled(false);
            tabView.add(tab4);

            var tab5 = new qx.ui.tabview.Page("ESD");
            tab5.setEnabled(false);
            tabView.add(tab5);

            var tab6 = new qx.ui.tabview.Page("Statistics");
            tab6.setEnabled(false);
            tabView.add(tab6);
        }

        // basicInfo : function(tab)
        // {
        //     var box = new qx.ui.container.Composite;
        //     box.setLayout(new qx.ui.layout.HBox(10));
        //     tab.add(box, {
        //         flex : 1
        //     });
        //
        //     var basicSettings = new qx.ui.groupbox.GroupBox("Basic info");
        //     basicSettings.setLayout(new qx.ui.layout.VBox(4));
        //     box.add(basicSettings, {
        //         flex : 1
        //     });
        //     var showClose = new qx.ui.form.CheckBox("Show Close");
        //     showClose.setValue(true);
        //     showClose.addListener("changeValue", function(e) {
        //         this.setShowClose(e.getData());
        //     });
        //     basicSettings.add(showClose);
        //     var showMaximize = new qx.ui.form.CheckBox("Show Maximize");
        //     showMaximize.setValue(true);
        //     showMaximize.addListener("changeValue", function(e) {
        //         this.setShowMaximize(e.getData());
        //     });
        //     basicSettings.add(showMaximize);
        //     var showMinimize = new qx.ui.form.CheckBox("Show Minimize");
        //     showMinimize.setValue(true);
        //     showMinimize.addListener("changeValue", function(e) {
        //         this.setShowMinimize(e.getData());
        //     });
        //     basicSettings.add(showMinimize);
        //     var allowClose = new qx.ui.form.CheckBox("Allow Close");
        //     allowClose.setValue(true);
        //     allowClose.addListener("changeValue", function(e) {
        //         this.setAllowClose(e.getData());
        //     });
        //     basicSettings.add(allowClose);
        //     var allowMaximize = new qx.ui.form.CheckBox("Allow Maximize");
        //     allowMaximize.setValue(true);
        //     allowMaximize.addListener("changeValue", function(e) {
        //         this.setAllowMaximize(e.getData());
        //     });
        //     basicSettings.add(allowMaximize);
        //     var allowMinimize = new qx.ui.form.CheckBox("Allow Minimize");
        //     allowMinimize.setValue(true);
        //     allowMinimize.addListener("changeValue", function(e) {
        //         this.setAllowMinimize(e.getData());
        //     });
        //     basicSettings.add(allowMinimize);
        //     var showStatusbar = new qx.ui.form.CheckBox("Show Statusbar");
        //     showStatusbar.setValue(false);
        //     showStatusbar.addListener("changeValue", function(e) {
        //         this.setShowStatusbar(e.getData());
        //     });
        //     basicSettings.add(showStatusbar);
        // }
    }
});

