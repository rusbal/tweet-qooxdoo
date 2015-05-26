qx.Class.define("erp.items.create.Index",
{
    extend : qx.ui.window.Window,
    construct : function()
    {
        this.base(arguments, "Items : Create : Index", "icon/16/apps/internet-feed-reader.png");
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

