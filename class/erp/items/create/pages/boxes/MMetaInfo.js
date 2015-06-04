qx.Mixin.define("erp.items.create.pages.boxes.MMetaInfo",
{
    members :
    {
        /**
         * metaInfo
         */
        _metaInfoGroup: null,

        _title            : null,
        _shortDescription : null,
        _keywords         : null,

        metaInfoLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);
            layout.setColumnAlign(0, "right", "top");
            layout.setColumnFlex(1, 1);
            layout.setColumnWidth(0, 130);
            
            this._metaInfoGroup = new qx.ui.groupbox.GroupBox("Meta information");
            this._metaInfoGroup.setLayout(layout);
            this.composite.add(this._metaInfoGroup);
        },

        metaInfoInitFields: function() {
            this._title            = this._(new qx.ui.form.TextField(), false);
            this._shortDescription = this._(new qx.ui.form.TextArea(), false);
            this._keywords         = this._(new qx.ui.form.TextArea(), false);
        },

        metaInfo: function() {

            this.metaInfoLayout();
            this.metaInfoInitFields();

            this._metaInfoGroup.add(this.makeLabel("Title", false),             { row: 0, column: 0 }); 
            this._metaInfoGroup.add(this.makeLabel("Short description", false), { row: 2, column: 0 }); 
            this._metaInfoGroup.add(this.makeLabel("Keywords", false),          { row: 4, column: 0 }); 

            var helpLabel;

            this._metaInfoGroup.add(this._title,            { row: 0, column: 1 });
            helpLabel = new qx.ui.basic.Label("<i style='color:gray'>Meta-Title for search engines</i>");
            helpLabel.setRich(true);
            this._metaInfoGroup.add(helpLabel,              { row: 1, column: 1 }); 

            this._metaInfoGroup.add(this._shortDescription, { row: 2, column: 1 });
            helpLabel = new qx.ui.basic.Label("<i style='color:gray'>Short description for search engines, exports and overviews</i>");
            helpLabel.setRich(true);
            this._metaInfoGroup.add(helpLabel,              { row: 3, column: 1 }); 

            this._metaInfoGroup.add(this._keywords,         { row: 4, column: 1 });
            helpLabel = new qx.ui.basic.Label("<i style='color:gray'>Meta keywords for search engines and Smart Search</i>");
            helpLabel.setRich(true);
            this._metaInfoGroup.add(helpLabel,              { row: 5, column: 1 }); 
        }
    }
});

