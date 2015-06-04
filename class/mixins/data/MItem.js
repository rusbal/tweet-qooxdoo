qx.Mixin.define("mixins.data.MItem",
{
    members :
    {
        selectManufacturer : function()
        {
            return [
                "ABC Company",
                "Apple"
            ];
        },
        selectVat : function()
        {
            return [
                "19%",
                "7%"
            ];
        },
        selectTemplate : function()
        {
            return [
                "Standard"
            ];
        },
        selectPriceGroup : function()
        {
            return [
                "Standard"
            ];
        },
        selectUnit : function()
        {
            return [
                "Gramm",
                "Kilogram",
                "Ifm",
                "Liter",
                "Paket(e)",
                "Stuck"
            ];
        },
        selectCustomerGroups : function()
        {
            return [
                "Default",
                "Handler"
            ];
        }
    }
});

