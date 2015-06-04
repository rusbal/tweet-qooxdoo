qx.Mixin.define("erp.items.create.pages.boxes.MAddlFields",
{
    members :
    {
        /**
         * addlFields
         */
        _addlFieldsGroup: null,

        _freiText1 : null,
        _freiText2 : null,
        _kommentar : null,

        addlFieldsLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);
            layout.setColumnAlign(0, "right", "top");
            layout.setColumnFlex(1, 1);
            layout.setColumnWidth(0, 160);
            
            this._addlFieldsGroup = new qx.ui.groupbox.GroupBox("Additional fields");
            this._addlFieldsGroup.setLayout(layout);
            this.composite.add(this._addlFieldsGroup);
        },

        addlFieldsInitFields: function() {
            this._freiText1 = this._(new qx.ui.form.TextField(), false);
            this._freiText2 = this._(new qx.ui.form.TextField(), false);
            this._kommentar = this._(new qx.ui.form.TextArea(), false);
        },

        addlFields: function() {

            this.addlFieldsLayout();
            this.addlFieldsInitFields();

            this._addlFieldsGroup.add(this.makeLabel("Freitext-1", false), { row: 0, column: 0 }); 
            this._addlFieldsGroup.add(this.makeLabel("Freitext-2", false), { row: 1, column: 0 }); 
            this._addlFieldsGroup.add(this.makeLabel("Kommentar", false),  { row: 2, column: 0 }); 

            this._addlFieldsGroup.add(this._freiText1, { row: 0, column: 1 });
            this._addlFieldsGroup.add(this._freiText2, { row: 1, column: 1 });
            this._addlFieldsGroup.add(this._kommentar, { row: 2, column: 1 });
        }
    }
});

