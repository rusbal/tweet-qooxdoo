qx.Class.define("erp.customers.create.pages.DataValid", {
    extend: qx.ui.tabview.Page,
    construct: function() {
        this.base(arguments, "Data");
        this.setLayout(new qx.ui.layout.HBox(10));

        this.prepareLayout();
        this.groupForm();
    },
    members: {
        group: null,

        prepareLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);
            // layout.setColumnAlign(0, "right", "column");
            // layout.setColumnAlign(2, "right", "column");
            layout.setColumnWidth(0, 100);
            layout.setColumnWidth(1, 400);
            // layout.setColumnWidth(2, 72);
            // layout.setColumnWidth(3, 108);

            this.group = new qx.ui.groupbox.GroupBox("Basics");
            this.group.setLayout(layout);
            this.add(this.group, {
                flex: 1
            });
        },

        groupForm: function() {
            // create a field for a usernamen
            var username = new qx.ui.form.TextField();
            username.setPlaceholder("username");
            username.setRequired(true);
            this.group.add(username, {
                row: 1,
                column: 0
            });

            // create a textfield for the email address
            var email = new qx.ui.form.TextField();
            email.setPlaceholder("email address");
            this.group.add(email, {
                row: 2,
                column: 0
            });

            // cerate two textfields for a password
            var password1 = new qx.ui.form.TextField();
            password1.setPlaceholder("password");
            this.group.add(password1, {
                row: 3,
                column: 0
            });

            var password2 = new qx.ui.form.TextField();
            password2.setPlaceholder("password");
            this.group.add(password2, {
                row: 4,
                column: 0
            });

            // create a checkbox
            var accepted = new qx.ui.form.CheckBox("Accept");
            accepted.setRequired(true);
            this.group.add(accepted, {
                row: 6,
                column: 0
            });


            // create the form manager
            var manager = new qx.ui.form.validation.Manager();
            // create a validator function
            var passwordLengthValidator = function(value, item) {
                var valid = value != null && value.length > 2;
                if (!valid) {
                    item.setInvalidMessage("Please enter a password at with least 3 characters.");
                }
                return valid;
            };

            // create a async validator function
            var userNameValidator = new qx.ui.form.validation.AsyncValidator(
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

            // add the username with a async validator
            manager.add(username, userNameValidator);
            // add the email with a predefined email validator
            manager.add(email, qx.util.Validate.email());
            // add the password fields with the notEmpty validator
            manager.add(password1, passwordLengthValidator);
            manager.add(password2, passwordLengthValidator);
            // add the checkbox (required flag is set)
            manager.add(accepted);

            // add a validator to the manager itself (passwords mut be equal)
            manager.setValidator(function(items) {
                var valid = password1.getValue() == password2.getValue();
                if (!valid) {
                    var message = "Passwords must be equal.";
                    password1.setInvalidMessage(message);
                    password2.setInvalidMessage(message);
                    password1.setValid(false);
                    password2.setValid(false);
                }
                return valid;
            });

            var send = new qx.ui.form.Button("Send");
            this.group.add(send, {
                row: 7,
                column: 0
            });
            send.addListener("execute", function() {
                // configure the send button
                send.setEnabled(false);
                send.setLabel("Validating...");
                // return type can not be used because of async validation
                manager.validate()
            }, this);


            // add a listener to the form manager for the validation complete
            manager.addListener("complete", function() {
                // configure the send button
                send.setEnabled(true);
                send.setLabel("Send");
                // check the validation status
                if (manager.getValid()) {
                    alert("You can send...");
                } else {
                    alert(manager.getInvalidMessages().join("\n"));
                }
            }, this);

            /* ***********************************************
             * DESCRIPTIONS
             * ********************************************* */
            // List Selection sync description
            var notEmptyDescription = new qx.ui.basic.Label();
            notEmptyDescription.setRich(true);
            notEmptyDescription.setValue(
                "<b>Client side form validation</b><br/>"
                + "All fields are required. Some by a custom validator, some by a "
                + "predefined validator and some by the required flag."
            );
            this.group.add(notEmptyDescription, {
                row: 0,
                column: 0,
                colSpan: 2
            });
        }
    }
});
