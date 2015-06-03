qx.Class.define("erp.customers.create.pages.Data", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.MAjax,
        mixins.shortcuts.MForm,
        mixins.data.MCustomer,
        erp.customers.create.pages.validators.MData
    ],

    construct: function() {
        this.base(arguments, "Data");
        this.setLayout(new qx.ui.layout.VBox(10));

        this.basicInformation();
        this.comment();

        this.validation();
    },

    members: {

        /**
         * Called from MAjax.js
         */
        customerCreateJson : function()
        {
            return { 
                email         : this._email.getValue(),
                customerGroup : this._getSelectedValue(this._customerGroup),
                shop          : this._getSelectedValue(this._shop),
                active        : this._active.getValue(),
                password      : this._password.getValue(),
                comment       : this._comment.getValue()
            };
        },

        /**
         * Basic information
         */
        _basicGroup: null,

        _email           : null,
        _customerGroup   : null,
        _shop            : null,
        _active          : null,
        _password        : null,
        _confirmPassword : null,

        basicInformationLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);

            layout.setColumnAlign(0, "right", "middle");
            layout.setColumnAlign(2, "right", "middle");

            layout.setColumnFlex(1, 1);
            layout.setColumnMinWidth(1, 200);
            layout.setColumnFlex(3, 1);
            layout.setColumnMinWidth(3, 200);

            layout.setColumnWidth(0, 130);
            layout.setColumnWidth(1, 200);
            layout.setColumnWidth(2, 140);
            layout.setColumnWidth(3, 200);

            this._basicGroup = new qx.ui.groupbox.GroupBox("Basic information");
            this._basicGroup.setLayout(layout);
            this.add(this._basicGroup);
        },

        basicInformationInitFields: function() {
            this._email           = this._(new qx.ui.form.TextField(), true);
            this._customerGroup   = this._(this.makeSelection(this.selectCustomerGroup()), true);
            this._shop            = this._(this.makeSelection(this.selectShop(), true, "0"), false);
            this._active          = this._(new qx.ui.form.CheckBox("Mark the account as active"), false);
            this._password        = this._(new qx.ui.form.PasswordField(), true);
            this._confirmPassword = this._(new qx.ui.form.PasswordField(), true);
        },

        basicInformation: function() {

            this.basicInformationLayout();
            this.basicInformationInitFields();

            this._basicGroup.add(this.makeLabel("Email", true),            { row: 0, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Customer group", true),   { row: 1, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Shop", false),            { row: 2, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Active", false),          { row: 0, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Password", true),         { row: 1, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Confirm password", true), { row: 2, column: 2 }); 

            this._basicGroup.add(this._email,           { row: 0, column: 1 }); 
            this._basicGroup.add(this._customerGroup,   { row: 1, column: 1 }); 
            this._basicGroup.add(this._shop,            { row: 2, column: 1 });
            this._basicGroup.add(this._active,          { row: 0, column: 3 });
            this._basicGroup.add(this._password,        { row: 1, column: 3 }); 
            this._basicGroup.add(this._confirmPassword, { row: 2, column: 3 });
        },

        /**
         * Comment
         */
        _commentGroup: null,

        _comment : null,

        commentLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);
            layout.setColumnFlex(0, 1);
            
            this._commentGroup = new qx.ui.groupbox.GroupBox("Comment");
            this._commentGroup.setLayout(layout);
            this.add(this._commentGroup);
        },

        commentInitFields: function() {
            this._comment = this._(new qx.ui.form.TextArea(), false);
        },

        comment: function() {

            this.commentLayout();
            this.commentInitFields();

            this._commentGroup.add(this._comment, { row: 0, column: 0 }); 

            var helpLabel = new qx.ui.basic.Label("<i>For internal use only</i>");
            helpLabel.setRich(true);
            this._commentGroup.add(helpLabel, { row: 1, column: 0 }); 
        },

        /**
         * Validation
         */
        validation: function() {

            var manager = new qx.ui.form.validation.Manager();

            manager.add(this._email, qx.util.Validate.email());
            manager.add(this._customerGroup);
            manager.add(this._shop);
            manager.add(this._active);
            manager.add(this._password, this.passwordLengthValidator);
            manager.add(this._confirmPassword, this.passwordLengthValidator);

            // add a validator to the manager itself (passwords mut be equal)
            var password = this._password;
            var confirmPassword = this._confirmPassword;

            manager.setValidator(function(items) {
                var valid = password.getValue() == confirmPassword.getValue();
                if (!valid) {
                    var message = "Passwords must be equal.";
                    password.setInvalidMessage(message);
                    confirmPassword.setInvalidMessage(message);
                    password.setValid(false);
                    confirmPassword.setValid(false);
                }
                return valid;
            });

            /**
             * Create button row
             */
            var btnRow = new qx.ui.container.Composite();
            btnRow.setMarginTop(5);

            var hbox = new qx.ui.layout.HBox();
            hbox.setAlignX("right");
            hbox.setSpacing(5);
            btnRow.setLayout(hbox);

            this.add(btnRow);

            var saveBtn = new qx.ui.form.Button("Save");
            saveBtn.setWidth(100);
            btnRow.add(saveBtn);
            saveBtn.addListener("execute", function() {
                // return type can not be used because of async validation
                manager.validate()
            }, this);

            // add a listener to the form manager for the validation complete
            manager.addListener("complete", function() {
                if (manager.getValid()) {
                    console.log("Submitting data...");
                    this.submitData("customers.create");
                } else {
                    console.log(manager.getInvalidMessages().join("\n"));
                }
            }, this);
        }
    }
});
