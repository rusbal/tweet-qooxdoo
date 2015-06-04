qx.Mixin.define("erp.items.create.pages.boxes.MBasePriceCalc",
{
    members :
    {
        /**
         * Basic information
         */
        _basePriceGroup: null,

        _unit        : null,
        _content     : null,
        _basicUnit   : null,
        _packingUnit : null,

        basePriceCalcLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);

            layout.setColumnAlign(0, "right", "top");
            layout.setColumnFlex(1, 1); 
            layout.setColumnWidth(0, 160);

            this._basePriceGroup = new qx.ui.groupbox.GroupBox("Basic price calculation");
            this._basePriceGroup.setLayout(layout);
            this.composite.add(this._basePriceGroup);
        },

        basePriceCalcInitFields: function() {
            this._unit            = this._(this.makeSelection(this.selectUnit()), true);
            this._content         = this._(new qx.ui.form.Spinner(), true);
            this._basicUnit       = this._(new qx.ui.form.Spinner(), true);
            this._packingUnit     = this._(new qx.ui.form.TextField(), true);
        },

        basePriceCalc: function() {

            this.basePriceCalcLayout();
            this.basePriceCalcInitFields();

            this._basePriceGroup.add(this.makeLabel("Unit", false),         { row: 0, column: 0 }); 
            this._basePriceGroup.add(this.makeLabel("Content", false),      { row: 1, column: 0 }); 
            this._basePriceGroup.add(this.makeLabel("Basic unit", false),   { row: 2, column: 0 }); 
            this._basePriceGroup.add(this.makeLabel("Packing unit", false), { row: 3, column: 0 }); 

            this._basePriceGroup.add(this._unit,        { row: 0, column: 1 }); 
            this._basePriceGroup.add(this._content,     { row: 1, column: 1 }); 
            this._basePriceGroup.add(this._basicUnit,   { row: 2, column: 1 }); 
            this._basePriceGroup.add(this._packingUnit, { row: 3, column: 1 });
        }
    }
});

