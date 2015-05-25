qx.Class.define("tweets.MenuDesktop",
{
    extend : qx.ui.window.Desktop,
    construct : function(windowManager)
    {
        this.base(arguments, windowManager);
        this.setBackground();
    },
    members : {
        setBackground : function()
        {
            var decorator = new qx.ui.decoration.Decorator();
            decorator.setBackgroundImage("resource/tweets/image-company-logo.png");
            this.setDecorator(decorator);
        }
    }
});

