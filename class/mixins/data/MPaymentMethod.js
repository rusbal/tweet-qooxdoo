qx.Mixin.define("mixins.data.MPaymentMethod",
{
    members :
    {
        selectPaymentMethod : function()
        {
            return [
                "Debit",
                "On delivery",
                "Invoice",
                "Prepayment",
                "SEPA"
            ];
        }
    }
});

