qx.Class.define("erp.items.create.pages.BasicInfo", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.MAjax,
        mixins.MSettings,
        mixins.shortcuts.MForm
        // mixins.data.MItem,
        // erp.items.create.pages.validators.MData
    ],

    construct: function(manager) {
        this.base(arguments, "Data");
        this.setLayout(new qx.ui.layout.VBox());

        var scroller = new qx.ui.container.Scroll().set({
            height: this.availableTabWindowHeight(),
            width: 750,
            minWidth: 750
        });
        this.add(scroller);

        this.composite = new qx.ui.container.Composite()
        this.composite.setLayout(new qx.ui.layout.VBox(10));
        scroller.add(this.composite);

        this.basicInformation();

        this.validation(manager);
    },

    members: {

        composite : null,

        /**
         * Called from MAjax.js
         */
        itemCreateJson : function()
        {
            return { 
                email         : this._email.getValue(),
                active        : this._active.getValue(),
                password      : this._password.getValue()
            };
        },

        /**
         * Validation
         */
        validation: function(manager) {

            manager.add(this._email, qx.util.Validate.email());
            manager.add(this._active);
            manager.add(this._password, this.passwordLengthValidator);
            manager.add(this._confirmPassword, this.passwordLengthValidator);

            /**
             * Add a validator to the manager itself (passwords mut be equal)
             */
            var _this = this;

            manager.setValidator(function(items) {
                var valid = true;

                // var msgRequired = "This field is required";
                // if (!_this._getSelectedValue(_this._itemGroup)) {
                //     valid = false;
                //     _this._itemGroup.setInvalidMessage(msgRequired);
                //     _this._itemGroup.setValid(false);
                // }
                return valid;
            });

            // add a listener to the form manager for the validation complete
            manager.addListener("complete", function() {
                if (manager.getValid()) {
                    console.log("Submitting data...");
                    this.submitData("items.create");
                } else {
                    console.log(manager.getInvalidMessages().join("\n"));
                }
            }, this);
        },

        /**
         * Basic information
         */
        _basicGroup: null,

        _email           : null,
        _itemGroup   : null,
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
            this.composite.add(this._basicGroup);
        },

        basicInformationInitFields: function() {
            this._email           = this._(new qx.ui.form.TextField(), true);
            // this._itemGroup   = this._(this.makeSelection(this.selectItemGroup()), true);
            // this._shop            = this._(this.makeSelection(this.selectShop(), true, "0"), false);
            this._active          = this._(new qx.ui.form.CheckBox("Mark the account as active"), false);
            this._password        = this._(new qx.ui.form.PasswordField(), true);
            this._confirmPassword = this._(new qx.ui.form.PasswordField(), true);
        },

        basicInformation: function() {

            this.basicInformationLayout();
            this.basicInformationInitFields();

            this._basicGroup.add(this.makeLabel("Email", true),            { row: 0, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Item group", true),   { row: 1, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Shop", false),            { row: 2, column: 0 }); 

            this._basicGroup.add(this._email,           { row: 0, column: 1 }); 
            // this._basicGroup.add(this._itemGroup,   { row: 1, column: 1 }); 
            // this._basicGroup.add(this._shop,            { row: 2, column: 1 });

            this._basicGroup.add(this.makeLabel("Active", false),          { row: 0, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Password", true),         { row: 1, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Confirm password", true), { row: 2, column: 2 }); 

            this._basicGroup.add(this._active,          { row: 0, column: 3 });
            this._basicGroup.add(this._password,        { row: 1, column: 3 }); 
            this._basicGroup.add(this._confirmPassword, { row: 2, column: 3 });
        }
    }
});
