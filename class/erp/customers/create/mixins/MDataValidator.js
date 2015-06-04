/**
 * @lint ignoreDeprecated(alert)
 */
qx.Mixin.define("erp.customers.create.mixins.MDataValidator",
{
    members :
    {
        /**
         * Validation
         */
        vManager : new qx.ui.form.validation.Manager(),

        setValidation: function(context) {

            this.vManager.add(context._email, qx.util.Validate.email());
            // SELECT: context._customerGroup;
            this.vManager.add(context._shop);
            this.vManager.add(context._active);
            this.vManager.add(context._password, this.passwordLengthValidator);
            this.vManager.add(context._confirmPassword, this.passwordLengthValidator);

            // SELECT: context._title;
            this.vManager.add(context._firstName);
            this.vManager.add(context._lastName);
            this.vManager.add(context._street);
            this.vManager.add(context._streetNumber);
            this.vManager.add(context._zipCode);
            this.vManager.add(context._city);
            // SELECT: context._country;

            // SELECT: context._paymentMethod;

            /**
             * Add a validator to the this.vManager itself (passwords mut be equal)
             */
            // var _this = this;

            this.vManager.setValidator(function(items) {
                var valid = true;

                var msgRequired = "This field is required";
                if (!context._getSelectedValue(context._customerGroup)) {
                    valid = false;
                    context._customerGroup.setInvalidMessage(msgRequired);
                    context._customerGroup.setValid(false);
                }
                if (!context._getSelectedValue(context._title)) {
                    valid = false;
                    context._title.setInvalidMessage(msgRequired);
                    context._title.setValid(false);
                }
                if (!context._getSelectedValue(context._country)) {
                    valid = false;
                    context._country.setInvalidMessage(msgRequired);
                    context._country.setValid(false);
                }
                if (!context._getSelectedValue(context._paymentMethod)) {
                    valid = false;
                    context._paymentMethod.setInvalidMessage(msgRequired);
                    context._paymentMethod.setValid(false);
                }

                if (context._password.getValue() !== context._confirmPassword.getValue()) {
                    valid = false;
                    var message = "Passwords must be equal.";
                    context._password.setInvalidMessage(message);
                    context._confirmPassword.setInvalidMessage(message);
                    context._password.setValid(false);
                    context._confirmPassword.setValid(false);
                }
                return valid;
            });

            // add a listener to the form manager for the validation complete
            this.vManager.addListener("complete", function() {
                if (this.vManager.getValid()) {
                    console.log("Submitting data...");
                    this.submitData("customers.create", context);
                } else {
                    console.log(this.vManager.getInvalidMessages().join("\n"));
                }
            }, this);
        },

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

