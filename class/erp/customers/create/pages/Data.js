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
            width: 750
        });
        this.add(scroller);

        this.composite = new qx.ui.container.Composite()
        this.composite.setLayout(new qx.ui.layout.VBox(10));
        scroller.add(this.composite);

        this.basicInformation();
        this.comment();
        this.billingInformation();

        this.validation();
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
                text6         : this._text6.getValue()
            };
        },

        /**
         * Validation
         */
        validation: function() {

            var manager = new qx.ui.form.validation.Manager();

            manager.add(this._email, qx.util.Validate.email());
            // SELECT: this._customerGroup;
            manager.add(this._shop);
            manager.add(this._active);
            manager.add(this._password, this.passwordLengthValidator);
            manager.add(this._confirmPassword, this.passwordLengthValidator);

            // SELECT: this._title;
            manager.add(this._firstName);
            manager.add(this._lastName);
            manager.add(this._street);
            manager.add(this._streetNumber);
            manager.add(this._zipCode);
            manager.add(this._city);
            // SELECT: this._country;

            /**
             * Add a validator to the manager itself (passwords mut be equal)
             */
            var _this = this;

            manager.setValidator(function(items) {
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

                if (_this._password.getValue() == _this._confirmPassword.getValue()) {
                    valid = false;
                    var message = "Passwords must be equal.";
                    _this._password.setInvalidMessage(message);
                    _this._confirmPassword.setInvalidMessage(message);
                    _this._password.setValid(false);
                    _this._confirmPassword.setValid(false);
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

            this._billingGroup.add(this._title,        { row: 0, column: 1 }); 
            this._billingGroup.add(this._firstName,    { row: 1, column: 1 }); 
            this._billingGroup.add(this._lastName,     { row: 2, column: 1 }); 
            this._billingGroup.add(this._street,       { row: 3, column: 1 });
            this._billingGroup.add(this._streetNumber, { row: 4, column: 1 });
            this._billingGroup.add(this._zipCode,      { row: 5, column: 1 }); 
            this._billingGroup.add(this._city,         { row: 6, column: 1 });
            this._billingGroup.add(this._country,      { row: 7, column: 1 });
            this._billingGroup.add(this._dateOfBirth,  { row: 8, column: 1 });

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
        }
    }
});
