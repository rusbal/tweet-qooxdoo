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

            // this.vManager.add(context._email, qx.util.Validate.email());
            // // SELECT: context._customerGroup;
            // this.vManager.add(context._shop);

            /**
             * Add a validator to the this.vManager itself (passwords mut be equal)
             */
            // var _this = this;

            this.vManager.setValidator(function(items) {
                var valid = true;

                var msgRequired = "This field is required";
                // if (!context._getSelectedValue(context._customerGroup)) {
                //     valid = false;
                //     context._customerGroup.setInvalidMessage(msgRequired);
                //     context._customerGroup.setValid(false);
                // }
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


