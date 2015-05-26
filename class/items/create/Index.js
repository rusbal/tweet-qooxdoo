qx.Class.define("items.create.Index",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        this.base(arguments, "Items : Create : Index");
        this.createWindow();
    },
    members :
    {
        moveToPosition : function() {
            this.moveTo(170, 220);
        },
        createWindow : function()
        {
            this.moveToPosition();
            this.setWidth(250);
            this.setHeight(300);
        }
    }
});

