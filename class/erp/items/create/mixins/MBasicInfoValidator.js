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
        manager : new qx.ui.form.validation.Manager(),

        validation: function() {

            this.manager.add(this._email, qx.util.Validate.email());
            // SELECT: this._customerGroup;
            this.manager.add(this._shop);
            this.manager.add(this._password, this.passwordLengthValidator);

            var _this = this;

            this.manager.setValidator(function(items) {
                var valid = true;

                var msgRequired = "This field is required";
                // if (!_this._getSelectedValue(_this._customerGroup)) {
                //     valid = false;
                //     _this._customerGroup.setInvalidMessage(msgRequired);
                //     _this._customerGroup.setValid(false);
                // }
                return valid;
            });

            // add a listener to the form manager for the validation complete
            this.manager.addListener("complete", function() {
                if (this.manager.getValid()) {
                    console.log("Submitting data...");
                    this.submitData("items.create");
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


