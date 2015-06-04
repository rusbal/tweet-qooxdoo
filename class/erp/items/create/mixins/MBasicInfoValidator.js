/**
 * @lint ignoreDeprecated(alert)
 */
qx.Mixin.define("erp.items.create.mixins.MBasicInfoValidator",
{
    members :
    {
        /**
         * Validation
         */
        vManager : new qx.ui.form.validation.Manager(),

        setValidation: function(context) {

            this.vManager.add(context._itemName);
            this.vManager.add(context._itemNumber);

            this.vManager.setValidator(function(items) {
                var valid = true;

                var msgRequired = "This field is required";
                if (!context._getSelectedValue(context._manufacturer)) {
                    valid = false;
                    context._manufacturer.setInvalidMessage(msgRequired);
                    context._manufacturer.setValid(false);
                }
                if (!context._getSelectedValue(context._vat)) {
                    valid = false;
                    context._vat.setInvalidMessage(msgRequired);
                    context._vat.setValid(false);
                }
                if (!context._getSelectedValue(context._template)) {
                    valid = false;
                    context._template.setInvalidMessage(msgRequired);
                    context._template.setValid(false);
                }
                if (!context._getSelectedValue(context._selectPriceGroup)) {
                    valid = false;
                    context._selectPriceGroup.setInvalidMessage(msgRequired);
                    context._selectPriceGroup.setValid(false);
                }
                return valid;
            });

            // add a listener to the form manager for the validation complete
            this.vManager.addListener("complete", function() {
                if (this.vManager.getValid()) {
                    console.log("Submitting data...");
                    this.submitData("items.create", context);
                } else {
                    console.log(this.vManager.getInvalidMessages().join("\n"));
                }
            }, this);
        }
    }
});


