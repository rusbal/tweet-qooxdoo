/**
 * @tag noPlayground
 */
qx.Class.define("tweets.Application",
{
    extend : qx.application.Standalone,
    members :
    {
        main : function()
        {
            this.base(arguments);
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
        },
        contentWindow : null,
        menu : null,
        topRowHeight : 100,
        bottomRowHeight : 30,
        contentRowHeight : null,
        __handleResize : function()
        {
            var contentRowHeight = window.innerHeight - (this.topRowHeight + this.bottomRowHeight) - 2;
            this.contentWindow.setHeight(contentRowHeight);
        },
        getGrid : function()
        {
            this.contentRowHeight = window.innerHeight - (this.topRowHeight + this.bottomRowHeight) - 2;

            // flex columns
            var container = new qx.ui.container.Composite().set(
            {
                decorator : "main",
                backgroundColor : "#000000",
                allowShrinkX : false,
                allowShrinkY : false
            });
            var layout = new qx.ui.layout.Grid();
            layout.setColumnFlex(1, 2);
            layout.setRowFlex(1, 3);
            layout.setSpacing(0);
            container.setLayout(layout);

            this.getGrid1(container);
            this.getGrid2(container);
            this.getGrid3(container);

            return container;
        },
        getGrid1 : function(container)
        {
            /**
             * Header Menu
             */

            // var topLeft = new qx.ui.core.Widget().set({ height: this.topRowHeight, decorator: "main", backgroundColor: "#ffffff" });
            this.menu = new tweets.Menu().set(
            {
                height : this.topRowHeight,
                decorator : "main",
                backgroundColor : "#ffffff"
            });
            ;

            // menu.addListenerOnce("appear", function() { 
            //     var target = menu.getContentElement().getDomElement(); 
            //     qx.bom.element.Style.set(target,"backgroundColor","red"); 
            // }, this); 
            // topLeft.add(menu, {left: 0, top: 0, right: 0});
            
            container.add(this.menu,
            {
                row : 0,
                column : 0
            });
            container.add(new qx.ui.core.Widget().set(
            {
                decorator : "main",
                backgroundColor : "#ffffff"
            }),
            {
                row : 0,
                column : 1
            });
            container.add(new qx.ui.core.Widget().set(
            {
                decorator : "main",
                backgroundColor : "#ffffff"
            }),
            {
                row : 0,
                column : 2
            });
            container.add(new qx.ui.core.Widget().set(
            {
                decorator : "main",
                backgroundColor : "#ffffff"
            }),
            {
                row : 0,
                column : 3
            });
        },
        getGrid2 : function(container)
        {
            /**
             * Content Window
             */
            this.contentWindow = new qx.ui.core.Widget().set(
            {
                decorator : "main",
                backgroundColor : "#eeeeee",
                height : this.contentRowHeight
            });
            var decorator = new qx.ui.decoration.Decorator();
            decorator.setBackgroundImage("resource/tweets/blue-background.jpg");
            this.contentWindow.setDecorator(decorator);
            container.add(this.contentWindow,
            {
                row : 1,
                column : 0,
                colSpan : 4
            });
        },
        getGrid3 : function(container)
        { 
            /**
             * Footer
             */
            container.add(new qx.ui.core.Widget().set(
            {
                height : this.bottomRowHeight,
                decorator : "main",
                backgroundColor : "#ffffff"
            }),
            {
                row : 2,
                column : 0,
                colSpan : 4
            });
            this.otherMain();
        },

        statusBar : null,

        otherMain : function()
        {
            var basic = new tweets.BasicWindow();
            this.addToStatusBar(basic, "Basic");
            this.addToMenu(basic, "Basic", this.menu, "icon/16/actions/document-open.png");
            basic.open();
            basic.moveTo(50, 150);

            var window1 = new tweets.AppWindow1();
            this.addToStatusBar(window1, "First");
            this.addToMenu(window1, "First", this.menu, "icon/16/actions/document-open.png");
            window1.open();
            window1.moveTo(350, 150);

            var window2 = new tweets.AppWindow2();
            this.addToStatusBar(window2, "Second");
            this.addToMenu(window2, "Second", this.menu, "icon/16/actions/document-open.png");
            window2.open();
            window2.moveTo(650, 150);

            var window3 = new tweets.AppWindow3();
            this.addToStatusBar(window3, "Third");
            this.addToMenu(window3, "Third", this.menu, "icon/16/actions/document-open.png");
            window3.open();
            window3.moveTo(250, 550);
        },
        addToMenu : function(win, name, menu, icon)
        {
            var btn = new qx.ui.menu.Button(name, icon);
            btn.addListener("execute", function() {
                if (win.getMode() === "minimized" || win.getMode() === "closed")
                {
                    console.log("ADDING status bar: " + win.getMode())
                    this.addToStatusBar(win, name);
                    win.restore();
                    win.moveTo(100, 100);  // Improve
                } else
                {
                    console.log("NO status bar: " + win.getMode())
                }
            }, this);
            menu.menu.add(btn);
        },
        addToStatusBar : function(win, name)
        {
            var button = new qx.ui.form.Button(name);
            button.addListener("execute", function(e) {
                win.restore()
            }, this);

            // this.statusBar.add(button);
            console.log("status btn: ", button);
            var listener = win.addListener("beforeClose", function(e) {
                // this.statusBar.remove(button);
                win.removeListenerById(listener);
            }, this);
        }
    }
});
