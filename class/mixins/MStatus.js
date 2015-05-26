qx.Mixin.define("mixins.MStatus",
{
    members :
    {
        statusAddToBar : function(win, name)
        {
            var button = new qx.ui.form.Button(name);
            button.addListener("execute", function(e) {
                win.restore()
            }, this);

            window.$_statusBar.add(button);
            console.log("status btn: ", button);
            var listener = win.addListener("beforeClose", function(e) {
                window.$_statusBar.remove(button);
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

        openWindow : function(win, name)
        {
            if (win.getMode() === "minimized" || win.getMode() === "closed")
            {
                console.log("> ADDING status bar: " + win.getMode())
                this.statusAddToBar(win, name);
                window.$_desktop.add(win);
                win.restore();

                // TODO: Improve auto-positioning of windows
                win.moveTo(100, 100);
            } else
            {
                console.log(".NO status bar: " + win.getMode())
            }
        }
    }
});
