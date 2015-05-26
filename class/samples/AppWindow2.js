qx.Class.define("samples.AppWindow2",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        var windowTitle = "Second Window";
        this.base(arguments, windowTitle, "icon/16/apps/internet-feed-reader.png");
        this.createWindow2();
    },
    members :
    {
        moveToPosition : function() {
            this.moveTo(600, 100);
        },
        createWindow2 : function()
        {
            var windowTitle = "Second Window";

            // var this = new qx.ui.window.Window(windowTitle, "icon/16/apps/internet-feed-reader.png");
            this.setLayout(new qx.ui.layout.VBox(10));
            this.setStatus("Application is ready");
            this.moveToPosition();
            var atom = new qx.ui.basic.Atom("The second window", "icon/22/apps/utilities-calculator.png");
            this.add(atom);
            var box = new qx.ui.container.Composite;
            box.setLayout(new qx.ui.layout.HBox(10));
            this.add(box, {
                flex : 1
            });
            var basicSettings = new qx.ui.groupbox.GroupBox("Basics");
            basicSettings.setLayout(new qx.ui.layout.VBox(4));
            box.add(basicSettings, {
                flex : 1
            });
            var showClose = new qx.ui.form.CheckBox("Show Close");
            showClose.setValue(true);
            showClose.addListener("changeValue", function(e) {
                this.setShowClose(e.getData());
            });
            basicSettings.add(showClose);
            var showMaximize = new qx.ui.form.CheckBox("Show Maximize");
            showMaximize.setValue(true);
            showMaximize.addListener("changeValue", function(e) {
                this.setShowMaximize(e.getData());
            });
            basicSettings.add(showMaximize);
            var showMinimize = new qx.ui.form.CheckBox("Show Minimize");
            showMinimize.setValue(true);
            showMinimize.addListener("changeValue", function(e) {
                this.setShowMinimize(e.getData());
            });
            basicSettings.add(showMinimize);
            var allowClose = new qx.ui.form.CheckBox("Allow Close");
            allowClose.setValue(true);
            allowClose.addListener("changeValue", function(e) {
                this.setAllowClose(e.getData());
            });
            basicSettings.add(allowClose);
            var allowMaximize = new qx.ui.form.CheckBox("Allow Maximize");
            allowMaximize.setValue(true);
            allowMaximize.addListener("changeValue", function(e) {
                this.setAllowMaximize(e.getData());
            });
            basicSettings.add(allowMaximize);
            var allowMinimize = new qx.ui.form.CheckBox("Allow Minimize");
            allowMinimize.setValue(true);
            allowMinimize.addListener("changeValue", function(e) {
                this.setAllowMinimize(e.getData());
            });
            basicSettings.add(allowMinimize);
            var showStatusbar = new qx.ui.form.CheckBox("Show Statusbar");
            showStatusbar.setValue(false);
            showStatusbar.addListener("changeValue", function(e) {
                this.setShowStatusbar(e.getData());
            });
            basicSettings.add(showStatusbar);
            var resize = new qx.ui.groupbox.GroupBox("Resizable");
            resize.setLayout(new qx.ui.layout.VBox(4));
            box.add(resize, {
                flex : 1
            });
            var resizeFrame = new qx.ui.form.CheckBox("Use resize frame");
            resizeFrame.setValue(true);
            resizeFrame.addListener("changeValue", function(e) {
                this.setUseResizeFrame(e.getData());
            });
            resize.add(resizeFrame);
            var edges = ["top", "right", "bottom", "left"];
            for (var i = 0; i < edges.length; i++)
            {
                var edge = edges[i];
                var resizable = new qx.ui.form.CheckBox("Resizable " + edge).set( {
                    value : true
                });
                resizable.bind("value", this, "resizable" + qx.lang.String.firstUp(edge));
                resize.add(resizable);
            }
            var move = new qx.ui.groupbox.GroupBox("Moveable");
            move.setLayout(new qx.ui.layout.VBox(4));
            box.add(move, {
                flex : 1
            });
            var movable = new qx.ui.form.CheckBox("Movable");
            movable.setValue(true);
            movable.addListener("changeValue", function(e) {
                this.setMovable(e.getData());
            });
            move.add(movable);
            var moveFrame = new qx.ui.form.CheckBox("Use move frame");
            moveFrame.addListener("changeValue", function(e) {
                this.setUseMoveFrame(e.getData());
            });
            move.add(moveFrame);
        }
    }
});
