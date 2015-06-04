qx.Mixin.define("erp.customers.create.pages.boxes.MBillingInfo",
{
    members :
    {
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

            this._dateOfBirth  = this._(new qx.ui.form.DateField(), false);
            this._dateOfBirth.setDateFormat(new qx.util.format.DateFormat("d/M/y"));

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
        }
    }
});

