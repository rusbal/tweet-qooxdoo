qx.Mixin.define("erp.items.create.pages.boxes.MDescription",
{
    members :
    {
        /**
         * Description
         */
        _descriptionGroup: null,

        _description : null,

        descriptionLayout : function() {
            var layout = new qx.ui.layout.Grid(9, 5);
            layout.setColumnFlex(0, 1);
            
            this._descriptionGroup = new qx.ui.groupbox.GroupBox("Description");
            this._descriptionGroup.setLayout(layout);
            this._descriptionGroup.setHeight(250);
            this.composite.add(this._descriptionGroup);
        },

        descriptionInitFields : function() {
            var ckEdit = new widgets.Ckeditor(null, 140);
            ckEdit.linkTo(this.saveBtn);

            // this._description = this._(new qx.ui.form.TextArea(), false);
            this._description = this._(ckEdit, false);
        },

        description : function() {

            this.descriptionLayout();
            this.descriptionInitFields();

            this._descriptionGroup.add(this._description, { row: 0, column: 0 }); 
        }
    }
});

