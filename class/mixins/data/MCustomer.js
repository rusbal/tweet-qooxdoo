qx.Mixin.define("mixins.data.MCustomer",
{
    include : [
        mixins.data.MPerson,
        mixins.data.places.MCountry,
        mixins.data.MShop
    ],
    
    members :
    {
        selectCustomerGroup : function()
        {
            return [
                "Default",
                "Händler"
            ];
        }
    }
});

