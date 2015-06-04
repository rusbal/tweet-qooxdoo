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
        prepareJsonData : function(context)
        {
            return this.merge(
                this.basicInfoJsonData(context)
            );
        },

        merge : function() {
            var obj = {},
                i = 0,
                il = arguments.length,
                key;
            for (; i < il; i++) {
                for (key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key)) {
                        obj[key] = arguments[i][key];
                    }
                }
            }
            return obj;
        }
    }
});

