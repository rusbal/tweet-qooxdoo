qx.Class.define("tweets.TestWindow",
{
    extend : qx.ui.window.Desktop,
    construct : function(windowManager)
    {
        this.base(arguments, windowManager);
        this.setBackground();
        // this.createWindow();
        //
        // var decorator = new qx.ui.decoration.Decorator();
        // decorator.setBackgroundImage("resource/tweets/blue-background.jpg");
        // this.setDecorator(decorator);
    },
    members : {
        setBackground : function()
        {
            var decorator = new qx.ui.decoration.Decorator();
            decorator.setBackgroundImage("resource/tweets/blue-background.jpg");
            this.setDecorator(decorator);
        }
        // createWindow : function()
        // {
        //     var aWindow = new qx.ui.window.Window("Normal Window").set( {
        //         width : 300
        //     });
        //     this.add(aWindow);
        //     aWindow.open();
        // }
    }
});

