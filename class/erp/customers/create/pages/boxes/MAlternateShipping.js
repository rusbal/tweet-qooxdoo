qx.Mixin.define("erp.customers.create.pages.boxes.MAlternateShipping",
{
    members :
    {
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
        }
    }
});

