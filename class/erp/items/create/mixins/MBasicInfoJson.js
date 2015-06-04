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
                manufacturer     : context._getSelectedValue(context._manufacturer),
                itemName         : context._itemName.getValue(),
                itemNumber       : context._itemNumber.getValue(),
                active           : context._active.getValue(), 
                variants         : context._variants.getValue(),
                vat              : context._getSelectedValue(context._vat),
                template         : context._getSelectedValue(context._template),
                activePriceGroup : context._activePriceGroup.getValue(),
                selectPriceGroup : context._getSelectedValue(context._selectPriceGroup),

                description      : context._description.getValue(),

                title            : context._title.getValue(),
                shortDescription : context._shortDescription.getValue(),
                keywords         : context._keywords.getValue(),

                freiText1        : context._freiText1.getValue(),
                freiText2        : context._freiText2.getValue(),
                kommentar        : context._kommentar.getValue()
            };
        }
    }
});

