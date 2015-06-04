/**
 * @tag noPlayground
 */
qx.Class.define("tweets.Application",
{
    extend : qx.application.Standalone,
    include : [mixins.MDesktop],
    members :
    {
        contentWindow : null,
        menu : null,
        topRowHeight : 100,
        bottomRowHeight : 30,
        contentRowHeight : null,

        initGlobals : function()
        {
            window.$_erp = [];
            window.$_desktop = null;
            window.$_statusBar = null;
            window.$_activeWindow = null;
        },

        initWindows : function()
        {
            /**
             * Required for the generator to include these files
             *  else, they will not be included in the build.
             */

            // Items
            erp.items.create.Index;

            // Customers
            erp.customers.create.Index;

            // Samples
            erp.samples.AppWindow1;
            erp.samples.AppWindow2;
            erp.samples.AppWindow3;
            erp.samples.BasicWindow;
        },

        main : function()
        {
            this.base(arguments);

            this.initGlobals();
            this.initWindows();

            var doc = this.getRoot()
            var scroll = new qx.ui.container.Scroll();
            doc.add(scroll, {
                edge : 0
            });
            var container = new qx.ui.container.Composite(new qx.ui.layout.VBox()).set( {
                padding : 0
            })
            scroll.add(container);
            container.add(this.getGrid());
            doc.addListener("resize", function() {
                this.__handleResize();
            }, this);

            this.__handleResize();
        },

        __handleResize : function()
        {
            this.contentRowHeight = window.innerHeight - (this.topRowHeight + this.bottomRowHeight) - 2;
            window.$_desktop.setHeight(this.contentRowHeight);
        },

        getGrid : function()
        {
            this.contentRowHeight = window.innerHeight - (this.topRowHeight + this.bottomRowHeight) - 2;

            // flex columns
            var container = new qx.ui.container.Composite().set(
            {
                decorator : "main",
                backgroundColor : "#EFEFEF"
            });
            var layout = new qx.ui.layout.Grid();
            layout.setColumnFlex(1, 2);
            layout.setRowFlex(1, 3);
            layout.setSpacing(0);
            container.setLayout(layout);

            window.$_statusBar = new containers.toolbars.StatusBar();
            this.buildHeader(container); 
            this.buildContent(container);
            this.buildFooter(container);

            return container;
        },

        buildContent : function(container)
        {
            var windowManager = new qx.ui.window.Manager(); 
            window.$_desktop = new containers.desktops.ContentDesktop(windowManager); 
            this.setDefaultWindows();

            container.add(window.$_desktop,
            {
                row : 1,
                column : 0,
                colSpan : 4
            });
        },

        menuContainer : null,

        buildHeader : function(container)
        {
            /**
             * Header Menu
             */

            this.menu = new containers.toolbars.Menu().set(
            {
                paddingLeft : 10,
                height : 10,
                width : 200,
                decorator : "main",
                backgroundColor : "#EFEFEF"
            });

            // menu.addListenerOnce("appear", function() { 
            //     var target = menu.getContentElement().getDomElement(); 
            //     qx.bom.element.Style.set(target,"backgroundColor","red"); 
            // }, this); 
            // topLeft.add(menu, {left: 0, top: 0, right: 0}); 
            // container.add(this.menu, { row : 0, column : 0 }); 

            /**
             * Logo, Menu
             */
            var mgr = new qx.ui.window.Manager();
            this.menuContainer = new containers.desktops.MenuDesktop(mgr).set({ height: this.topRowHeight });
            this.menuContainer.add(this.menu); 
            var label = new qx.ui.basic.Label().set({
                "rich"  : true,
                "value" : "<a href='#' style='color:black;text-decoration:none;' onClick='alert(1); return false;'>Home</a>"
            });
            this.menuContainer.add(label, { right : 14, top : 8 });
            container.add(this.menuContainer, { row : 0, column : 0 }); 

            /**
             * Dashboard Buttons
             */
            var dashboard = new containers.desktops.DesktopButtons().set({ height: this.topRowHeight }); 
            container.add(dashboard, { row : 0, column : 1 }); 

            /**
             * Help
             */
            var help = new containers.desktops.HelpButtons().set({ height: this.topRowHeight }); 
            container.add(help, { row : 0, column : 2 });

            /**
             * Logout
             */
            var logout = new containers.desktops.LogoutButtons().set({ height: this.topRowHeight }); 
            container.add(logout, { row : 0, column : 3 });
        },

        buildFooter : function(container)
        { 
            /**
             * Footer
             */
            container.add(window.$_statusBar.set(
            {
                height : this.bottomRowHeight,
                decorator : "main",
                backgroundColor : "#EFEFEF"
            }),
            {
                row : 2,
                column : 0,
                colSpan : 4
            });
        },

        setDefaultWindows : function()
        {
            // var window2 = window.$_erp["samples.AppWindow2"] = new erp.samples.AppWindow2;
            // this.statusAddToBar("samples.AppWindow2", "Second");
            // window.$_desktop.add(window2);
            // window2.open();
            // window2.moveTo(10, 590);
            
            // var index = window.$_erp["customers.create.Index"] = new erp.customers.create.Index;
            // this.statusAddToBar("customers.create.Index", "Customers create");
            // window.$_desktop.add(index);
            // index.open();
            // index.moveTo(10, 10);
        }
    }
});
