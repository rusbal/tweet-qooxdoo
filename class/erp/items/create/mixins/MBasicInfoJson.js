qx.Mixin.define("erp.items.create.mixins.MBasicInfoJson",
{
    members :
    {
        /**
         * Called from MAjax.js
         */
        basicInfoJsonData : function(context)
        {
            return { 
                // email         : context._email.getValue(),
                // customerGroup : context._getSelectedValue(context._customerGroup),
            };
        }
    }
});

