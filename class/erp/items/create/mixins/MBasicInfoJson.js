qx.Mixin.define("erp.items.create.mixins.MBasicInfoJson",
{
    members :
    {
        /**
         * Called from MAjax.js
         */
        customerCreateJson : function()
        {
            return { 
                // email         : this._email.getValue(),
                // customerGroup : this._getSelectedValue(this._customerGroup),
            };
        }
    }
});

