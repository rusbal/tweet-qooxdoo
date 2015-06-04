qx.Class.define("erp.items.create.pages.BasicInfo", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.MAjax,
        mixins.MSettings,
        mixins.shortcuts.MForm,
        mixins.data.MItem
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
    },

    members: {

        composite : null,

        /**
         * Basic information
         */
        _basicGroup: null,

        _manufacturer     : null,
        _itemName         : null,
        _itemNumber       : null,
        _active           : null,
        _variants         : null,
        _vat              : null,
        _template         : null,
        _activePriceGroup : null,
        _selectPriceGroup : null,

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
            this._manufacturer     = this._(this.makeSelection(this.selectManufacturer()), true);
            this._itemName         = this._(new qx.ui.form.TextField(), true);
            this._itemNumber       = this._(new qx.ui.form.TextField(), true);
            this._active           = this._(new qx.ui.form.CheckBox(), false);
            this._variants         = this._(new qx.ui.form.CheckBox(), false);

            this._vat              = this._(this.makeSelection(this.selectVat(), false), true);
            this._template         = this._(this.makeSelection(this.selectTemplate(), false), true);
            this._activePriceGroup = this._(new qx.ui.form.CheckBox(), false); 
            this._selectPriceGroup = this._(this.makeSelection(this.selectPriceGroup()), true);
        },

        basicInformation: function() {

            this.basicInformationLayout();
            this.basicInformationInitFields();

            this._basicGroup.add(this.makeLabel("Manufacturer", true), { row: 0, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Item name", true),    { row: 1, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Item number", true),  { row: 2, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Active", false),      { row: 3, column: 0 }); 
            this._basicGroup.add(this.makeLabel("Variants", false),    { row: 4, column: 0 }); 

            this._basicGroup.add(this._manufacturer,   { row: 0, column: 1 }); 
            this._basicGroup.add(this._itemName,       { row: 1, column: 1 }); 
            this._basicGroup.add(this._itemNumber,     { row: 2, column: 1 }); 
            this._basicGroup.add(this._active,         { row: 3, column: 1 });
            this._basicGroup.add(this._variants,       { row: 4, column: 1 });

            this._basicGroup.add(this.makeLabel("VAT", true),                 { row: 0, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Template", true),            { row: 1, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Active price group", false), { row: 2, column: 2 }); 
            this._basicGroup.add(this.makeLabel("Select price group", true),  { row: 3, column: 2 }); 

            this._basicGroup.add(this._vat,              { row: 0, column: 3 });
            this._basicGroup.add(this._template,         { row: 1, column: 3 });
            this._basicGroup.add(this._activePriceGroup, { row: 2, column: 3 });
            this._basicGroup.add(this._selectPriceGroup, { row: 3, column: 3 });
        }
    }
});
