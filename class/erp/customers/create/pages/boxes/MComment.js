qx.Mixin.define("erp.customers.create.pages.boxes.MComment",
{
    members :
    {
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
        }
    }
});

