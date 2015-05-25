qx.Class.define("tweets.AppWindow1",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        var windowTitle = "First Window";
        this.base(arguments, windowTitle, "icon/16/apps/office-calendar.png");
        this.createWindow1();
    },
    members :
    {
        moveToPosition : function() {
            this.moveTo(320, 100);
        },
        createWindow1 : function()
        {
            var windowTitle = "First Window";
            this.setLayout(new qx.ui.layout.VBox(10));
            this.setShowStatusbar(true);
            this.setStatus("Demo loaded");
            this.moveToPosition();

            // Test for move listener
            this.addListener("move", function(e) {
                this.debug("Moved to: " + e.getData().left + "x" + e.getData().top);
            }, this);

            // Test for resize listener
            this.addListener("resize", function(e) {
                this.debug("Resized to: " + e.getData().width + "x" + e.getData().height);
            }, this);

            // Add an Atom
            var atom = new qx.ui.basic.Atom("Welcome to your first own Window.<br/>Have fun!", "icon/32/apps/office-address-book.png");
            atom.setRich(true);
            this.add(atom);

            // Add a TabView
            var tabView = new qx.ui.tabview.TabView;
            this.add(tabView, {
                flex : 1
            });
            var page1 = new qx.ui.tabview.Page("Page 1");
            tabView.add(page1);
            var page2 = new qx.ui.tabview.Page("Page 2");
            tabView.add(page2);
            var page3 = new qx.ui.tabview.Page("Page 3");
            tabView.add(page3);
        }
    }
});
