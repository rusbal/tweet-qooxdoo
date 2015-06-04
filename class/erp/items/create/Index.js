qx.Class.define("erp.items.create.Index",
{
    extend : qx.ui.window.Window,

    include : [
        mixins.MAjax,
        erp.items.create.mixins.MJson,
        erp.items.create.mixins.MBasicInfoValidator
    ],

    construct : function()
    {
        this.base(arguments, "Item details: new item", "icon/16/apps/internet-feed-reader.png");
        this.setLayout(new qx.ui.layout.VBox());

        this.basicInfoTab = new erp.items.create.pages.BasicInfo(this.saveBtn);

        this.addTabs();

        this.submitButtons();
        this.setValidation(this.basicInfoTab);
    },

    members :
    {
        saveBtn : new qx.ui.form.Button("Save", "icon/16/actions/document-save.png"),

        basicInfoTab : null,

        addTabs : function()
        {
            var tabView = new qx.ui.tabview.TabView;

            tabView.add(this.basicInfoTab);

            var tab2 = new qx.ui.tabview.Page("Categories");
            tabView.add(tab2);

            var tab3 = new qx.ui.tabview.Page("Images");
            tabView.add(tab3);

            var tab4 = new qx.ui.tabview.Page("Variants");
            tab4.setEnabled(false);
            tabView.add(tab4);

            var tab5 = new qx.ui.tabview.Page("ESD");
            tab5.setEnabled(false);
            tabView.add(tab5);

            var tab6 = new qx.ui.tabview.Page("Statistics");
            tab6.setEnabled(false);
            tabView.add(tab6);

            this.add(tabView);
        },

        submitButtons : function() {

            /**
             * Create button row
             */
            var btnRow = new qx.ui.container.Composite();
            btnRow.setMarginTop(5);

            var hbox = new qx.ui.layout.HBox();
            hbox.setAlignX("right");
            hbox.setSpacing(5);
            btnRow.setLayout(hbox);

            var cancelBtn = new qx.ui.form.Button("Cancel", "icon/16/actions/dialog-cancel.png");
            cancelBtn.setWidth(100);
            cancelBtn.addListener("execute", function() {
                this.close();
            }, this);
            btnRow.add(cancelBtn);

            this.saveBtn.setWidth(100);
            this.saveBtn.addListener("execute", function() {
                // return type can not be used because of async validation
                this.vManager.validate()
            }, this);
            btnRow.add(this.saveBtn);

            this.add(btnRow);
        }
    }
});

