qx.Mixin.define("mixins.MDesktop",
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

        moveToX : 400,

        getMoveToX : function()
        {
            return this.moveToX = (this.moveToX >= 400 ? 0 : this.moveToX += 100);
        },

        openWindow : function(winName, name)
        {
            window.$_activeWindow = winName;

            if (window.$_erp[winName] === undefined) {

                /**
                 * Create window
                 */
                (new Function( 
                    "window.$_erp[\"" + winName + "\"] = new erp." + winName + ";"
                ))();

                this.statusAddToBar(winName, name);
                window.$_desktop.add(window.$_erp[winName]);
            }

            window.$_erp[winName].restore();

            // TODO: Improve auto-positioning of windows
            window.$_erp[winName].moveTo(this.getMoveToX(), 0);
        }
    }
});
