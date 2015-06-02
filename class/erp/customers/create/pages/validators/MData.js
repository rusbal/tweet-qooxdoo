/**
 * @lint ignoreDeprecated(alert)
 */
qx.Mixin.define("erp.customers.create.pages.validators.MData",
{
    members :
    {
        passwordLengthValidator : function(value, item)
        {
            var valid = value != null && value.length > 2;
            if (!valid) {
                item.setInvalidMessage("Please enter a password at with least 3 characters.");
            }
            return valid;
        }
    }
});

