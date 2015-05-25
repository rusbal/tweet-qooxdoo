qx.Class.define("tweets.Menu",
{
    extend : qx.ui.toolbar.ToolBar,
    construct : function()
    {
        this.base(arguments);
        this.menu = new qx.ui.menu.Menu();

        // var btn = new qx.ui.toolbar.MenuButton("Windows");

        // this.add(btn);

        // btn.setMenu(this.menu);
        this.buildMenu1();

        // this.buildMenu2();

        // this.buildMenu3();
    },
    members :
    {
        menu : null,
        buildMenu1 : function()
        {
            var btn = new qx.ui.toolbar.MenuButton("Sample Menu");
            this.add(btn);
            var leftButton = new qx.ui.menu.Button("Sub 1", "icon/16/actions/format-justify-left.png");
            var rightButton = new qx.ui.menu.Button("Sub 2", "icon/16/actions/format-justify-right.png");
            var centeredButton = new qx.ui.menu.Button("Sub 3", "icon/16/actions/format-justify-center.png");
            var justifyButton = new qx.ui.menu.Button("Sub 4", "icon/16/actions/format-justify-fill.png");
            leftButton.addListener("execute", this.saySomething);
            rightButton.addListener("execute", this.saySomething);
            centeredButton.addListener("execute", this.saySomething);
            justifyButton.addListener("execute", this.saySomething);
            var submenu = new qx.ui.menu.Menu;
            submenu.add(leftButton);
            submenu.add(rightButton);
            submenu.add(centeredButton);
            submenu.add(justifyButton);
            var paragraphButton = new qx.ui.menu.Button("Submenu", null, null, submenu);
            this.menu.add(paragraphButton);
            this.menu.add(new qx.ui.menu.Separator());
            btn.setMenu(this.menu);
        },
        buildMenu2 : function()
        {
            var fileButton = new qx.ui.toolbar.MenuButton("Samples");
            this.add(fileButton);
            var fileMenu = new qx.ui.menu.Menu();

            // fileMenu.add(new qx.ui.menu.Button("New", null, null, this.__getNewMenu()));
            var leftButton = new qx.ui.menu.Button("Sub 1", "icon/16/actions/format-justify-left.png");
            var rightButton = new qx.ui.menu.Button("Sub 2", "icon/16/actions/format-justify-right.png");
            var centeredButton = new qx.ui.menu.Button("Sub 3", "icon/16/actions/format-justify-center.png");
            var justifyButton = new qx.ui.menu.Button("Sub 4", "icon/16/actions/format-justify-fill.png");
            leftButton.addListener("execute", this.saySomething);
            rightButton.addListener("execute", this.saySomething);
            centeredButton.addListener("execute", this.saySomething);
            justifyButton.addListener("execute", this.saySomething);
            var submenu = new qx.ui.menu.Menu;
            submenu.add(leftButton);
            submenu.add(rightButton);
            submenu.add(centeredButton);
            submenu.add(justifyButton);
            var paragraphButton = new qx.ui.menu.Button("Submenu", null, null, submenu);
            fileMenu.add(paragraphButton);
            fileMenu.add(new qx.ui.menu.Separator());
            var w1 = new qx.ui.menu.Button("Window 1");
            var w2 = new qx.ui.menu.Button("Window 2");
            var w3 = new qx.ui.menu.Button("Window 3");
            fileMenu.add(w1);
            fileMenu.add(w2);
            fileMenu.add(w3);
            w1.addListener("execute", this.saySomething);
            w2.addListener("execute", this.saySomething);
            w3.addListener("execute", this.saySomething);
            fileMenu.add(new qx.ui.menu.Separator());
            var w4 = new qx.ui.menu.Button("Sample Open...", "icon/16/actions/document-open.png");
            var w5 = new qx.ui.menu.Button("Sample Save", "icon/16/actions/document-save.png");
            var w6 = new qx.ui.menu.Button("Sample Save As...", "icon/16/actions/document-save-as.png");
            fileMenu.add(w4);
            fileMenu.add(w5);
            fileMenu.add(w6);
            w4.addListener("execute", this.saySomething);
            w5.addListener("execute", this.saySomething);
            w6.addListener("execute", this.saySomething);
            fileMenu.add(new qx.ui.menu.Separator());
            var w7 = new qx.ui.menu.Button("Sample Exit", "icon/16/actions/application-exit.png");
            w7.addListener("execute", this.saySomething);
            fileMenu.add(w7);
            fileButton.setMenu(fileMenu);
        },

        //

        // buildMenu3 : function()

        // {

        //     // Create "View" menu

        //     var viewButton = new qx.ui.toolbar.MenuButton("Another");

        //     this.add(viewButton);

        //     var viewMenu = new qx.ui.menu.Menu();

        //     // viewMenu.add(new qx.ui.menu.Button("Panes", null, null, this.__getPanesMenu()));

        //     // viewMenu.add(new qx.ui.menu.Button("Syntax", null, null, this.__getSyntaxMenu()));

        //     // viewMenu.add(new qx.ui.menu.Separator()); // First kind to add a separator

        //     viewMenu.add(new qx.ui.menu.CheckBox("Sample checkbox 1"));

        //     viewMenu.add(new qx.ui.menu.CheckBox("Sample checkbox 2"));

        //     viewMenu.addSeparator(); // A other kind to add a separator

        //

        //     var w7 = new qx.ui.menu.Button("Sample button");

        //     w7.addListener("execute", this.saySomething);

        //     viewMenu.add(w7);

        //

        //     viewButton.setMenu(viewMenu);

        // },
        saySomething : function() {
            alert("A simple alert...");
        }
    }
});
