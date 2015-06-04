qx.Mixin.define("erp.customers.create.pages.boxes.MBasicInfo",
{
    members :
    {
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
            this.composite.add(this._basicGroup);
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

            this._basicGroup.add(this._email,           { row: 0, column: 1 }); 
            this._basicGroup.add(this._customerGroup,   { row: 1, column: 1 }); 
            this._basicGroup.add(this._shop,            { row: 2, column: 1 });

            this._basicGroup.add(this.makeLabel("Active", false),          { row: 0, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Password", true),         { row: 1, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Confirm password", true), { row: 2, column: 2 }); 

            this._basicGroup.add(this._active,          { row: 0, column: 3 });
            this._basicGroup.add(this._password,        { row: 1, column: 3 }); 
            this._basicGroup.add(this._confirmPassword, { row: 2, column: 3 });
        }
    }
});

