qx.Class.define("erp.customers.create.pages.Data", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.MAjax,
        mixins.MSettings,
        mixins.shortcuts.MForm,
        mixins.data.MCustomer,
        erp.customers.create.pages.validators.MData
    ],

    construct: function() {
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
        this.comment();
        this.billingInformation();
        this.alternateShipping();
        this.paymentInformation();

        this.validation();
        // this.submitButtons();
    },

    members: {

        composite : null,

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

                comment       : this._comment.getValue(),

                title         : this._getSelectedValue(this._title),
                firstName     : this._firstName.getValue(),
                lastName      : this._lastName.getValue(),
                street        : this._street.getValue(),
                streetNumber  : this._streetNumber.getValue(),
                zipCode       : this._zipCode.getValue(),
                city          : this._city.getValue(),
                country       : this._getSelectedValue(this._country),
                dateOfBirth   : this._dateOfBirth.getValue(),
                phone         : this._phone.getValue(),
                fax           : this._fax.getValue(),
                text1         : this._text1.getValue(),
                text2         : this._text2.getValue(),
                text3         : this._text3.getValue(),
                text4         : this._text4.getValue(),
                text5         : this._text5.getValue(),
                text6         : this._text6.getValue(),

                title2         : this._getSelectedValue(this._title2),
                firstName2     : this._firstName2.getValue(),
                lastName2      : this._lastName2.getValue(),
                street2        : this._street2.getValue(),
                streetNumber2  : this._streetNumber2.getValue(),
                zipCode2       : this._zipCode2.getValue(),
                city2          : this._city2.getValue(),
                country2       : this._getSelectedValue(this._country2),
                text12         : this._text12.getValue(),
                text22         : this._text22.getValue(),
                text32         : this._text32.getValue(),
                text42         : this._text42.getValue(),
                text52         : this._text52.getValue(),
                text62         : this._text62.getValue(),

                paymentMethod  : this._getSelectedValue(this._paymentMethod)
            };
        },

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
            this.composite.add(this._commentGroup);
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
         * Billing information
         */
        _billingGroup: null,

        _title        : null,
        _firstName    : null,
        _lastName     : null,
        _street       : null,
        _streetNumber : null,
        _zipCode      : null,
        _city         : null,
        _country      : null,
        _dateOfBirth  : null,
        _company      : null,
        _department   : null,
        _vatId        : null,
        _phone        : null,
        _fax          : null,
        _text1        : null,
        _text2        : null,
        _text3        : null,
        _text4        : null,
        _text5        : null,
        _text6        : null,

        billingInformationLayout: function() {
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

            this._billingGroup = new qx.ui.groupbox.GroupBox("Billing information");
            this._billingGroup.setLayout(layout);
            this.composite.add(this._billingGroup);
        },

        billingInformationInitFields: function() {
            this._title        = this._(this.makeSelection(this.selectPersonTitle()), true);
            this._firstName    = this._(new qx.ui.form.TextField(), true);
            this._lastName     = this._(new qx.ui.form.TextField(), true);
            this._street       = this._(new qx.ui.form.TextField(), true);
            this._streetNumber = this._(new qx.ui.form.TextField(), true);
            this._zipCode      = this._(new qx.ui.form.TextField(), true);
            this._city         = this._(new qx.ui.form.TextField(), true);
            this._country      = this._(this.makeSelection(this.selectCountries()), false);
            this._dateOfBirth  = this._(new qx.ui.form.TextField(), false);
            this._company      = this._(new qx.ui.form.TextField(), false);
            this._department   = this._(new qx.ui.form.TextField(), false);
            this._vatId        = this._(new qx.ui.form.TextField(), false);
            this._phone        = this._(new qx.ui.form.TextField(), false);
            this._fax          = this._(new qx.ui.form.TextField(), false);
            this._text1        = this._(new qx.ui.form.TextField(), false);
            this._text2        = this._(new qx.ui.form.TextField(), false);
            this._text3        = this._(new qx.ui.form.TextField(), false);
            this._text4        = this._(new qx.ui.form.TextField(), false);
            this._text5        = this._(new qx.ui.form.TextField(), false);
            this._text6        = this._(new qx.ui.form.TextField(), false);
        },

        billingInformation: function() {

            this.billingInformationLayout();
            this.billingInformationInitFields();

            this._billingGroup.add(this.makeLabel("Title", true),          { row: 0, column: 0 }); 
            this._billingGroup.add(this.makeLabel("First name", true),     { row: 1, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Last name", true),      { row: 2, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Street", true),         { row: 3, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Street number", true),  { row: 4, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Zip code", true),       { row: 5, column: 0 }); 
            this._billingGroup.add(this.makeLabel("City", true),           { row: 6, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Country", true),        { row: 7, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Date of birth", false), { row: 8, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Company", false),       { row: 9, column: 0 }); 
            this._billingGroup.add(this.makeLabel("Department", false),    { row: 10, column: 0 }); 
            this._billingGroup.add(this.makeLabel("VAT ID", false),        { row: 11, column: 0 }); 

            this._billingGroup.add(this._title,        { row: 0, column: 1 }); 
            this._billingGroup.add(this._firstName,    { row: 1, column: 1 }); 
            this._billingGroup.add(this._lastName,     { row: 2, column: 1 }); 
            this._billingGroup.add(this._street,       { row: 3, column: 1 });
            this._billingGroup.add(this._streetNumber, { row: 4, column: 1 });
            this._billingGroup.add(this._zipCode,      { row: 5, column: 1 }); 
            this._billingGroup.add(this._city,         { row: 6, column: 1 });
            this._billingGroup.add(this._country,      { row: 7, column: 1 });
            this._billingGroup.add(this._dateOfBirth,  { row: 8, column: 1 });
            this._billingGroup.add(this._company,      { row: 9, column: 1 });
            this._billingGroup.add(this._department,   { row: 10, column: 1 });
            this._billingGroup.add(this._vatId,        { row: 11, column: 1 });

            this._billingGroup.add(this.makeLabel("Phone", false),         { row: 0, column: 2 }); 
            this._billingGroup.add(this.makeLabel("Fax", false),           { row: 1, column: 2 }); 
            this._billingGroup.add(this.makeLabel("Text 1", false),        { row: 2, column: 2 }); 
            this._billingGroup.add(this.makeLabel("Text 2", false),        { row: 3, column: 2 }); 
            this._billingGroup.add(this.makeLabel("Text 3", false),        { row: 4, column: 2 }); 
            this._billingGroup.add(this.makeLabel("Text 4", false),        { row: 5, column: 2 }); 
            this._billingGroup.add(this.makeLabel("Text 5", false),        { row: 6, column: 2 }); 
            this._billingGroup.add(this.makeLabel("Text 6", false),        { row: 7, column: 2 }); 

            this._billingGroup.add(this._phone,        { row: 0, column: 3 });
            this._billingGroup.add(this._fax,          { row: 1, column: 3 });
            this._billingGroup.add(this._text1,        { row: 2, column: 3 });
            this._billingGroup.add(this._text2,        { row: 3, column: 3 });
            this._billingGroup.add(this._text3,        { row: 4, column: 3 });
            this._billingGroup.add(this._text4,        { row: 5, column: 3 }); 
            this._billingGroup.add(this._text5,        { row: 6, column: 3 });
            this._billingGroup.add(this._text6,        { row: 7, column: 3 });
        },

        /**
         * Alternate shipping address
         */
        _shippingGroup: null,

        _title2        : null,
        _firstName2    : null,
        _lastName2     : null,
        _street2       : null,
        _streetNumber2 : null,
        _zipCode2      : null,
        _city2         : null,
        _country2      : null,
        _company2      : null,
        _department2   : null,
        _text12        : null,
        _text22        : null,
        _text32        : null,
        _text42        : null,
        _text52        : null,
        _text62        : null,

        shippingInformationLayout: function() {
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

            this._shippingGroup = new qx.ui.groupbox.GroupBox("Alternate shipping address");
            this._shippingGroup.setLayout(layout);
            this.composite.add(this._shippingGroup);
        },

        shippingInformationInitFields: function() {
            this._title2        = this._(this.makeSelection(this.selectPersonTitle()), false);
            this._firstName2    = this._(new qx.ui.form.TextField(), false);
            this._lastName2     = this._(new qx.ui.form.TextField(), false);
            this._street2       = this._(new qx.ui.form.TextField(), false);
            this._streetNumber2 = this._(new qx.ui.form.TextField(), false);
            this._zipCode2      = this._(new qx.ui.form.TextField(), false);
            this._city2         = this._(new qx.ui.form.TextField(), false);
            this._country2      = this._(this.makeSelection(this.selectCountries()), false);
            this._company2      = this._(new qx.ui.form.TextField(), false);
            this._department2   = this._(new qx.ui.form.TextField(), false);
            this._text12        = this._(new qx.ui.form.TextField(), false);
            this._text22        = this._(new qx.ui.form.TextField(), false);
            this._text32        = this._(new qx.ui.form.TextField(), false);
            this._text42        = this._(new qx.ui.form.TextField(), false);
            this._text52        = this._(new qx.ui.form.TextField(), false);
            this._text62        = this._(new qx.ui.form.TextField(), false);
        },

        copyData: function() {
            // this._title2.setValue( this._title.getValue());
            this._firstName2.setValue( this._firstName.getValue());
            this._lastName2.setValue( this._lastName.getValue());
            this._street2.setValue( this._street.getValue());
            this._streetNumber2.setValue( this._streetNumber.getValue());
            this._zipCode2.setValue( this._zipCode.getValue());
            this._city2.setValue( this._city.getValue());
            // this._country2.setValue( this._country.getValue());
            this._company2.setValue( this._company.getValue());
            this._department2.setValue( this._department.getValue());

            this._text12.setValue(this._text1.getValue());
            this._text22.setValue(this._text2.getValue());
            this._text32.setValue(this._text3.getValue());
            this._text42.setValue(this._text4.getValue());
            this._text52.setValue(this._text5.getValue());
            this._text62.setValue(this._text6.getValue());
        },

        alternateShipping: function() {

            this.shippingInformationLayout();
            this.shippingInformationInitFields();

            var copyBtn = new qx.ui.form.Button("Copy data", "icon/16/actions/edit-copy.png");
            copyBtn.setWidth(100);
            copyBtn.addListener("execute", function() { this.copyData() }, this);

            var desc = "For usability purposes, click here to use the billing address as the shipping address.";
            var copyLbl = new qx.ui.basic.Label().set({ value: desc, rich : true });

            this._shippingGroup.add(copyLbl,         { row: 0, column: 0, colSpan: 2 });
            this._shippingGroup.add(copyBtn,         { row: 1, column: 0 });

            this._shippingGroup.add(this.makeLabel("Title", false),         { row: 2, column: 0 });
            this._shippingGroup.add(this.makeLabel("First name", false),    { row: 3, column: 0 });
            this._shippingGroup.add(this.makeLabel("Last name", false),     { row: 4, column: 0 });
            this._shippingGroup.add(this.makeLabel("Street", false),        { row: 5, column: 0 });
            this._shippingGroup.add(this.makeLabel("Street number", false), { row: 6, column: 0 });
            this._shippingGroup.add(this.makeLabel("Zip code", false),      { row: 7, column: 0 });
            this._shippingGroup.add(this.makeLabel("City", false),          { row: 8, column: 0 });
            this._shippingGroup.add(this.makeLabel("Country", false),       { row: 9, column: 0 });
            this._shippingGroup.add(this.makeLabel("Company", false),       { row: 10, column: 0 });
            this._shippingGroup.add(this.makeLabel("Department", false),    { row: 11, column: 0 });

            this._shippingGroup.add(this._title2,        { row: 2, column: 1 }); 
            this._shippingGroup.add(this._firstName2,    { row: 3, column: 1 }); 
            this._shippingGroup.add(this._lastName2,     { row: 4, column: 1 }); 
            this._shippingGroup.add(this._street2,       { row: 5, column: 1 });
            this._shippingGroup.add(this._streetNumber2, { row: 6, column: 1 });
            this._shippingGroup.add(this._zipCode2,      { row: 7, column: 1 }); 
            this._shippingGroup.add(this._city2,         { row: 8, column: 1 });
            this._shippingGroup.add(this._country2,      { row: 9, column: 1 });
            this._shippingGroup.add(this._company2,      { row: 10, column: 1 });
            this._shippingGroup.add(this._department2,   { row: 11, column: 1 });

            this._shippingGroup.add(this.makeLabel("Text 1", false),        { row: 2, column: 2 }); 
            this._shippingGroup.add(this.makeLabel("Text 2", false),        { row: 3, column: 2 }); 
            this._shippingGroup.add(this.makeLabel("Text 3", false),        { row: 4, column: 2 }); 
            this._shippingGroup.add(this.makeLabel("Text 4", false),        { row: 5, column: 2 }); 
            this._shippingGroup.add(this.makeLabel("Text 5", false),        { row: 6, column: 2 }); 
            this._shippingGroup.add(this.makeLabel("Text 6", false),        { row: 7, column: 2 }); 

            this._shippingGroup.add(this._text12,        { row: 2, column: 3 });
            this._shippingGroup.add(this._text22,        { row: 3, column: 3 });
            this._shippingGroup.add(this._text32,        { row: 4, column: 3 });
            this._shippingGroup.add(this._text42,        { row: 5, column: 3 });
            this._shippingGroup.add(this._text52,        { row: 6, column: 3 });
            this._shippingGroup.add(this._text62,        { row: 7, column: 3 });
        },

        /**
         * Payment information
         */
        _paymentGroup: null,

        _paymentMethod : null,

        paymentInformationLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);

            layout.setColumnAlign(0, "right", "middle");
            layout.setColumnFlex(1, 1); 
            layout.setColumnWidth(0, 160);

            this._paymentGroup = new qx.ui.groupbox.GroupBox("Payment information");
            this._paymentGroup.setLayout(layout);
            this.composite.add(this._paymentGroup);
        },

        paymentInformationInitFields: function() {
            this._paymentMethod = this._(this.makeSelection(this.selectPaymentMethod()), true);
        },

        paymentInformation: function() {

            this.paymentInformationLayout();
            this.paymentInformationInitFields();

            this._paymentGroup.add(this.makeLabel("Current payment method", true), { row: 0, column: 0 }); 
            this._paymentGroup.add(this._paymentMethod, { row: 0, column: 1 }); 
        }
    }
});
