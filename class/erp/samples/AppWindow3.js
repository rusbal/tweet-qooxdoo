qx.Class.define("erp.samples.AppWindow3",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        var windowTitle = "Third Window";
        this.base(arguments, windowTitle, "icon/16/apps/internet-telephony.png");
        this.createWindow3();
    },
    members :
    {
        moveToPosition : function() {
            this.moveTo(330, 400);
        },
        createWindow3 : function()
        {
            var windowTitle = "Third Window";

            // this = new qx.ui.window.Window(windowTitle, "icon/16/apps/internet-telephony.png");
            this.setLayout(new qx.ui.layout.VBox);
            this.setMinWidth(200);
            this.setMaxWidth(450);
            this.setMaxHeight(400);
            this.moveToPosition();
            this.setAllowMaximize(false);
            var wm1 = this.getModalWindow1();
            var btn1 = new qx.ui.form.Button("Open Modal Dialog 1", "icon/16/apps/office-calendar.png");
            btn1.addListener("execute", wm1.open, wm1);
            this.add(btn1);
        },
        getModalWindow1 : function()
        {
            var wm1 = new qx.ui.window.Window("First Modal Dialog");
            wm1.setLayout(new qx.ui.layout.VBox(10));
            wm1.setModal(true);
            wm1.moveTo(150, 150);

            // this.getRoot().add(wm1);
            var wm2 = this.getModalWindow2();
            var btn2 = new qx.ui.form.Button("Open Modal Dialog 2", "icon/16/apps/office-calendar.png");
            btn2.addListener("execute", wm2.open, wm2);
            wm1.add(btn2);
            var chkm1 = new qx.ui.form.CheckBox("Modal");
            chkm1.setValue(true);
            wm1.add(chkm1);
            chkm1.addListener("changeValue", function(e) {
                wm1.setModal(e.getData());
            });
            return wm1;
        },

        /**
         *
         * @return {qx.ui.window.Window} modal window
         * @lint ignoreDeprecated(alert)
         */
        getModalWindow2 : function()
        {
            var wm2 = new qx.ui.window.Window("Second Modal Dialog");
            wm2.setLayout(new qx.ui.layout.VBox(10));
            wm2.setModal(true);
            wm2.setShowClose(false);
            wm2.moveTo(300, 300);

            // this.getRoot().add(wm2);
            var warn1 = new qx.ui.basic.Atom("Do you want to fly to Berlin?", "icon/32/status/dialog-error.png");
            wm2.add(warn1);
            var box = new qx.ui.container.Composite;
            box.setLayout(new qx.ui.layout.HBox(10, "right"));
            wm2.add(box);
            var btn3 = new qx.ui.form.Button("Yes", "icon/16/actions/dialog-ok.png");
            btn3.addListener("execute", function(e) {
                wm2.close();
            });
            box.add(btn3);
            var btn4 = new qx.ui.form.Button("No", "icon/16/actions/dialog-cancel.png");
            btn4.addListener("execute", function(e) {
                alert("Sorry, please tap 'Yes'!");
            });
            box.add(btn4);
            return wm2;
        }
    }
});
