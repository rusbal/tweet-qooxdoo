qx.Class.define("erp.customers.create.pages.Data", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.shortcuts.MForm,
        erp.customers.create.pages.validators.MData
    ],

    construct: function() {
        this.base(arguments, "Data");
        this.setLayout(new qx.ui.layout.HBox(10));

        this.initFields();

        this.prepareLayout();
        this.basicInformation();
    },

    members: {
        group: null,

        __username  : null,
        __email     : null,
        __password1 : null,
        __password2 : null,
        __accepted  : null,

        initFields: function() {
            this.__username  = this._(new qx.ui.form.TextField(), true, "username");
            this.__email     = this._(new qx.ui.form.TextField(), false, "email address");
            this.__password1 = this._(new qx.ui.form.TextField(), false, "password");
            this.__password2 = this._(new qx.ui.form.TextField(), false, "password");
            this.__accepted  = this._(new qx.ui.form.CheckBox("Accept"), true, "");
        },

        prepareLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);
            // layout.setColumnAlign(0, "right", "column");
            // layout.setColumnAlign(2, "right", "column");
            layout.setColumnWidth(0, 100);
            layout.setColumnWidth(1, 400);
            // layout.setColumnWidth(2, 72);
            // layout.setColumnWidth(3, 108);

            this.group = new qx.ui.groupbox.GroupBox("Basic information");
            this.group.setLayout(layout);
            this.add(this.group, {
                flex: 1
            });
        },

        basicInformation: function() {
            this.group.add(this.__username, { row: 1, column: 0 }); 
            this.group.add(this.__email, { row: 2, column: 0 }); 
            this.group.add(this.__password1, { row: 3, column: 0 }); 
            this.group.add(this.__password2, { row: 4, column: 0 });
            this.group.add(this.__accepted, { row: 6, column: 0 });


            // create the form manager
            var manager = new qx.ui.form.validation.Manager();
            manager.add(this.__username, new erp.customers.create.pages.helpers.Username);
            manager.add(this.__email, qx.util.Validate.email());
            manager.add(this.__password1, this.passwordLengthValidator);
            manager.add(this.__password2, this.passwordLengthValidator);
            manager.add(this.__accepted);

            // add a validator to the manager itself (passwords mut be equal)
            var password1 = this.__password1;
            var password2 = this.__password2;

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
            this.group.add(send, { row: 7, column: 0 });
            send.addListener("execute", function() {
                // return type can not be used because of async validation
                manager.validate()
            }, this);


            // add a listener to the form manager for the validation complete
            manager.addListener("complete", function() {
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
            this.group.add(notEmptyDescription, { row: 0, column: 0, colSpan: 2 });
        }
    }
});
