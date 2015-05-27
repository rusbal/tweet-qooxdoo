qx.Mixin.define("mixins.MStatus",
{
    members :
    {
        statusAddToBar : function(winName, name)
        {
            var win = window.$_erp[winName];
            var button = new qx.ui.form.Button(name);
            button.addListener("execute", function(e) {
                win.restore()
            }, this);

            window.$_statusBar.add(button);
            var listener = win.addListener("beforeClose", function(e) {
                window.$_statusBar.remove(button);
                delete window.$_erp[winName];
                win.removeListenerById(listener);
            }, this);
        },

        addToMenu : function(win, name, menu, icon)
        {
            var btn = new qx.ui.menu.Button(name, icon);
            btn.addListener("execute", function() {
                this.openWindow(win, name);
            }, this);
            menu.menu.add(btn);
        },

        openWindow : function(winName, name)
        {
            // if (win.getMode() === "minimized" || win.getMode() === "closed")
            if (window.$_erp[winName] === undefined)
            {
                /**
                 * Create window
                 */
                var exec = "window.$_erp[\"" + winName + "\"] = new erp." + winName + ";";
                var win = ( new Function( 'return ' + exec ) )();

                console.log("> ADDING status bar")
                this.statusAddToBar(winName, name);
                window.$_desktop.add(win);

                // TODO: Improve auto-positioning of windows
                win.moveTo(100, 100);
            } else
            {
                console.log(".NO status bar")
            }
            window.$_erp[winName].restore();
        }
    }
});
