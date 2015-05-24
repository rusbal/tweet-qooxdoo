
qx.Class.define("tweets.BasicWindow",
{
    extend : qx.ui.window.Window,

    construct : function()
    {
        this.base(arguments, "Basic Window");
        this.createWindow();
    },
    
    members :
    {
        moveToPosition : function()
        {
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
