/**
 * @lint ignoreDeprecated(alert)
 */
qx.Class.define("erp.customers.create.pages.helpers.SampleUsername",
{
    extend : qx.ui.form.validation.AsyncValidator,

    construct: function() {
        this.base(arguments,
            function(validator, value) {
                // use a timeout instad of a server request (async)
                window.setTimeout(function() {
                    if (value == null || value.length == 0) {
                        validator.setValid(false, "Server said no!");
                    } else {
                        validator.setValid(true);
                    }
                }, 1000);
            }
        );
    }
});


