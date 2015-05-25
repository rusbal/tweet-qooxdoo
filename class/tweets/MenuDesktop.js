qx.Class.define("tweets.MenuDesktop",
{
    extend : qx.ui.window.Desktop,
    construct : function(windowManager)
    {
        this.base(arguments, windowManager);
        this.setBackground();
        // this.setHomeButton();
    },
    members : {
        setBackground : function()
        {
            var decorator = new qx.ui.decoration.Decorator();
            decorator.setBackgroundImage("resource/tweets/image-company-logo.png");
            this.setDecorator(decorator);
        }
        // setHomeButton : function()
        // {
        //     var label = new qx.ui.basic.Label().set({
        //         "rich"  : true,
        //         "value" : "<div><a href='#' style='color:black;text-decoration:none;' onClick='alert(1); return false;'>Home</a>"
        //     });
        //     this.add(label, { left : 150, top : 8 }); 
        // }
    }
});

