qx.Mixin.define("erp.items.create.pages.boxes.MItemSettings",
{
    members :
    {
        /**
         * Basic information
         */
        _settGroup : null,

        _emailNotification   : null,
        _deliveryTimeInDays  : null,
        _stock               : null,
        _minStorageInventory : null,
        _releaseDate         : null,
        _creationDate        : null,
        _pseudoSales         : null,
        _minOrder            : null,
        _graduation          : null,
        _maxOrder            : null,
        _avoidCustGroups     : null,
        _manufacturerNum     : null,
        _weightBw            : null,
        _freeShipping        : null,
        _highlightItem       : null,
        _onSale              : null,
        _ean                 : null,
        _width               : null,
        _height              : null,
        _length              : null,

        settingsLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);

            layout.setColumnAlign(0, "right", "middle");
            layout.setColumnAlign(2, "right", "middle");

            layout.setColumnFlex(1, 1);
            layout.setColumnMinWidth(1, 200);
            layout.setColumnFlex(3, 1);
            layout.setColumnMinWidth(3, 200);

            layout.setColumnWidth(0, 160);
            layout.setColumnWidth(1, 200);
            layout.setColumnWidth(2, 140);
            layout.setColumnWidth(3, 200);

            this._settGroup = new qx.ui.groupbox.GroupBox("Settings");
            this._settGroup.setLayout(layout);
            this.composite.add(this._settGroup);
        },

        settingsInitFields: function() {
            this._emailNotification   = this._(new qx.ui.form.CheckBox("Show notification feature"), false);
            this._deliveryTimeInDays  = this._(new qx.ui.form.TextField(), false);
            this._stock               = this._(new qx.ui.form.Spinner(), false);
            this._minStorageInventory = this._(new qx.ui.form.Spinner(), false);

            this._releaseDate  = this._(new qx.ui.form.DateField(), false);
            this._releaseDate.setDateFormat(new qx.util.format.DateFormat("d/M/y"));

            this._creationDate  = this._(new qx.ui.form.DateField(), false);
            this._creationDate.setDateFormat(new qx.util.format.DateFormat("d/M/y"));

            this._pseudoSales         = this._(new qx.ui.form.Spinner(), false);
            this._minOrder            = this._(new qx.ui.form.Spinner(), false); 
            this._graduation          = this._(new qx.ui.form.Spinner(), false);
            this._maxOrder            = this._(new qx.ui.form.Spinner(), false);
            this._avoidCustGroups     = this._(this.makeSelection(this.selectCustomerGroups()), false);

            this._manufacturerNum     = this._(new qx.ui.form.TextField(), false);
            this._weightBw            = this._(new qx.ui.form.Spinner(), false);
            this._freeShipping        = this._(new qx.ui.form.CheckBox("Select item as free shipping"), false);
            this._highlightItem       = this._(new qx.ui.form.CheckBox("Highlight item in shop"), false);
            this._onSale              = this._(new qx.ui.form.CheckBox("If the stock is <= 0, the item is not available"), false);
            this._ean                 = this._(new qx.ui.form.TextField(), false);
            this._width               = this._(new qx.ui.form.Spinner(), false);
            this._height              = this._(new qx.ui.form.Spinner(), false);
            this._length              = this._(new qx.ui.form.Spinner(), false);
        },

        settings: function() {

            this.settingsLayout();
            this.settingsInitFields();

            this._settGroup.add(this.makeLabel("Email notification", false),        { row: 0, column: 0 }); 
            this._settGroup.add(this.makeLabel("Delivery time (days)", false),      { row: 1, column: 0 }); 
            this._settGroup.add(this.makeLabel("Stock", false),                     { row: 2, column: 0 }); 
            this._settGroup.add(this.makeLabel("Minimum storage inventory", false), { row: 3, column: 0 }); 
            this._settGroup.add(this.makeLabel("Release date", false),              { row: 4, column: 0 }); 
            this._settGroup.add(this.makeLabel("Date of creation", false),          { row: 5, column: 0 }); 
            this._settGroup.add(this.makeLabel("Pseudo sales", false),              { row: 6, column: 0 }); 
            this._settGroup.add(this.makeLabel("Minimum order", false),             { row: 7, column: 0 }); 
            this._settGroup.add(this.makeLabel("Graduation", false),                { row: 8, column: 0 }); 
            this._settGroup.add(this.makeLabel("Maximum order", false),             { row: 9, column: 0 }); 
            this._settGroup.add(this.makeLabel("Avoid customer groups", false),     { row: 10, column: 0 }); 

            this._settGroup.add(this._emailNotification,   { row: 0, column: 1 });
            this._settGroup.add(this._deliveryTimeInDays,  { row: 1, column: 1 }); 
            this._settGroup.add(this._stock,               { row: 2, column: 1 }); 
            this._settGroup.add(this._minStorageInventory, { row: 3, column: 1 }); 
            this._settGroup.add(this._releaseDate,         { row: 4, column: 1 });
            this._settGroup.add(this._creationDate,        { row: 5, column: 1 });
            this._settGroup.add(this._pseudoSales,         { row: 6, column: 1 });
            this._settGroup.add(this._minOrder,            { row: 7, column: 1 });
            this._settGroup.add(this._graduation,          { row: 8, column: 1 });
            this._settGroup.add(this._maxOrder,            { row: 9, column: 1 });
            this._settGroup.add(this._avoidCustGroups,     { row: 10, column: 1, colSpan: 3 });

            var helpTxt = "<i style='color:gray'>Here you have the option of deactivating the item for different customer groups.</i>";
            this._settGroup.add(new qx.ui.basic.Label(helpTxt).set({rich : true}), { row: 11, column: 1, colSpan: 3 });

            this._settGroup.add(this.makeLabel("Manufacturer number", false),  { row: 0, column: 2 }); 
            this._settGroup.add(this.makeLabel("Weight (bw)", false),          { row: 1, column: 2 }); 
            this._settGroup.add(this.makeLabel("Free shipping", false),        { row: 2, column: 2 }); 
            this._settGroup.add(this.makeLabel("Highlight item", false),       { row: 3, column: 2 }); 
            this._settGroup.add(this.makeLabel("On sale", false),              { row: 4, column: 2 }); 
            this._settGroup.add(this.makeLabel("EAN", false),                  { row: 5, column: 2 }); 
            this._settGroup.add(this.makeLabel("Width", false),                { row: 6, column: 2 }); 
            this._settGroup.add(this.makeLabel("Height", false),               { row: 7, column: 2 }); 
            this._settGroup.add(this.makeLabel("Length", false),               { row: 8, column: 2 }); 

            this._settGroup.add(this._manufacturerNum,                         { row: 0, column: 3 });
            this._settGroup.add(this._weightBw,                                { row: 1, column: 3 });
            this._settGroup.add(this._freeShipping,                            { row: 2, column: 3 });
            this._settGroup.add(this._highlightItem,                           { row: 3, column: 3 });
            this._settGroup.add(this._onSale,                                  { row: 4, column: 3 });
            this._settGroup.add(this._ean,                                     { row: 5, column: 3 });
            this._settGroup.add(this._width,                                   { row: 6, column: 3 });
            this._settGroup.add(this._height,                                  { row: 7, column: 3 });
            this._settGroup.add(this._length,                                  { row: 8, column: 3 });
        }
    }
});

