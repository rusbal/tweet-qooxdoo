qx.Class.define("containers.toolbars.Menu",
{
    extend : qx.ui.toolbar.ToolBar,
    include : [mixins.MStatus],
    construct : function()
    {
        this.base(arguments);
        
        var mainMenu = new qx.ui.toolbar.MenuButton("Menu");
        this.add(mainMenu);
        this.buildMenu1(); 
        mainMenu.setMenu(this.menu);
    },
    members :
    {
        menu : null,
        buildMenu1 : function()
        { 
            this.menu = new qx.ui.menu.Menu();

            this.menu.add(this.itemsMenu()); 
            this.menu.add(new qx.ui.menu.Separator());

            this.menu.add(this.customersMenu()); 
            this.menu.add(new qx.ui.menu.Separator());
        },

        itemsMenu : function()
        { 
            var sub1 = new qx.ui.menu.Button("Create", "icon/16/actions/format-justify-left.png");
            var sub2 = new qx.ui.menu.Button("Overview", "icon/16/actions/format-justify-right.png");
            var sub3 = new qx.ui.menu.Button("Categories", "icon/16/actions/format-justify-center.png");
            var sub4 = new qx.ui.menu.Button("Properties", "icon/16/actions/format-justify-fill.png");
            var sub5 = new qx.ui.menu.Button("Manufacturers", "icon/16/actions/format-justify-fill.png");
            var sub6 = new qx.ui.menu.Button("Customer reviews", "icon/16/actions/format-justify-fill.png");

            var win1 = new erp.items.create.Index;

            sub1.addListener("execute", function(){this.openWindow(win1, "Items Create")}, this);
            sub2.addListener("execute", this.saySomething);
            sub3.addListener("execute", this.saySomething);
            sub4.addListener("execute", this.saySomething);
            sub5.addListener("execute", this.saySomething);
            sub6.addListener("execute", this.saySomething);

            var submenu = new qx.ui.menu.Menu;
            submenu.add(sub1);
            submenu.add(new qx.ui.menu.Separator());
            submenu.add(sub2);
            submenu.add(new qx.ui.menu.Separator());
            submenu.add(sub3);
            submenu.add(new qx.ui.menu.Separator());
            submenu.add(sub4);
            submenu.add(new qx.ui.menu.Separator());
            submenu.add(sub5);
            submenu.add(new qx.ui.menu.Separator());
            submenu.add(sub6);

            return new qx.ui.menu.Button("Items", "icon/16/actions/format-justify-fill.png", null, submenu);
        },

        customersMenu : function()
        { 
            var sub1 = new qx.ui.menu.Button("Create", "icon/16/actions/format-justify-left.png");
            var sub2 = new qx.ui.menu.Button("Customers", "icon/16/actions/format-justify-right.png");
            var sub3 = new qx.ui.menu.Button("Orders", "icon/16/actions/format-justify-center.png");

            sub1.addListener("execute", this.saySomething);
            sub2.addListener("execute", this.saySomething);
            sub3.addListener("execute", this.saySomething);

            var submenu = new qx.ui.menu.Menu;
            submenu.add(sub1);
            submenu.add(new qx.ui.menu.Separator());
            submenu.add(sub2);
            submenu.add(new qx.ui.menu.Separator());
            submenu.add(sub3);

            return new qx.ui.menu.Button("Customers", "icon/16/actions/format-justify-fill.png", null, submenu);
        },

        saySomething : function() {
            alert("A simple alert...");
        }
    }
});
