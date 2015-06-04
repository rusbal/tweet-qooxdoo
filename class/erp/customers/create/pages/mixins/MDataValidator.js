/**
 * @lint ignoreDeprecated(alert)
 */
qx.Mixin.define("erp.customers.create.pages.mixins.MDataValidator",
{
    members :
    {
        /**
         * Validation
         */
        manager : new qx.ui.form.validation.Manager(),

        validation: function() {

            this.manager.add(this._email, qx.util.Validate.email());
            // SELECT: this._customerGroup;
            this.manager.add(this._shop);
            this.manager.add(this._active);
            this.manager.add(this._password, this.passwordLengthValidator);
            this.manager.add(this._confirmPassword, this.passwordLengthValidator);

            // SELECT: this._title;
            this.manager.add(this._firstName);
            this.manager.add(this._lastName);
            this.manager.add(this._street);
            this.manager.add(this._streetNumber);
            this.manager.add(this._zipCode);
            this.manager.add(this._city);
            // SELECT: this._country;

            // SELECT: this._paymentMethod;

            /**
             * Add a validator to the this.manager itself (passwords mut be equal)
             */
            var _this = this;

            this.manager.setValidator(function(items) {
                var valid = true;

                var msgRequired = "This field is required";
                if (!_this._getSelectedValue(_this._customerGroup)) {
                    valid = false;
                    _this._customerGroup.setInvalidMessage(msgRequired);
                    _this._customerGroup.setValid(false);
                }
                if (!_this._getSelectedValue(_this._title)) {
                    valid = false;
                    _this._title.setInvalidMessage(msgRequired);
                    _this._title.setValid(false);
                }
                if (!_this._getSelectedValue(_this._country)) {
                    valid = false;
                    _this._country.setInvalidMessage(msgRequired);
                    _this._country.setValid(false);
                }
                if (!_this._getSelectedValue(_this._paymentMethod)) {
                    valid = false;
                    _this._paymentMethod.setInvalidMessage(msgRequired);
                    _this._paymentMethod.setValid(false);
                }

                if (_this._password.getValue() !== _this._confirmPassword.getValue()) {
                    valid = false;
                    var message = "Passwords must be equal.";
                    _this._password.setInvalidMessage(message);
                    _this._confirmPassword.setInvalidMessage(message);
                    _this._password.setValid(false);
                    _this._confirmPassword.setValid(false);
                }
                return valid;
            });

            // add a listener to the form manager for the validation complete
            this.manager.addListener("complete", function() {
                if (this.manager.getValid()) {
                    console.log("Submitting data...");
                    this.submitData("customers.create");
                } else {
                    console.log(this.manager.getInvalidMessages().join("\n"));
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

