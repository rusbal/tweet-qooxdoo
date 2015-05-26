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

            this.statusBar.add(button);
            console.log("status btn: ", button);
            var listener = win.addListener("beforeClose", function(e) {
                this.statusBar.remove(button);
                win.removeListenerById(listener);
            }, this);
        }
    }
});

