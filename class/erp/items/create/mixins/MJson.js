qx.Mixin.define("erp.items.create.mixins.MJson",
{
    include : [
        erp.items.create.mixins.MBasicInfoJson
    ],

    members :
    {
        /**
         * Called from MAjax.js
         */
        itemCreateJson : function()
        {
            return { 
                // email         : this._email.getValue(),
                // customerGroup : this._getSelectedValue(this._customerGroup),
            };
        }
    }
});

