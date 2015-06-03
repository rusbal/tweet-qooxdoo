qx.Mixin.define("mixins.MSettings",
{
    members :
    {
        topRowHeight : 100,
        bottomRowHeight : 30,

        lessTabAdjustment : 120,

        availableWindowHeight : function()
        {
            return window.innerHeight - (this.topRowHeight + this.bottomRowHeight) - 2;
        },

        availableTabWindowHeight : function()
        {
            return window.innerHeight - (this.topRowHeight + this.bottomRowHeight) - this.lessTabAdjustment;
        }
    }
});

