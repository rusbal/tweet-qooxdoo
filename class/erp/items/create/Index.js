qx.Class.define("erp.items.create.Index",
{
    extend : qx.ui.window.Window,

    include : [
        erp.items.create.mixins.MJson,
        erp.items.create.mixins.MBasicInfoValidator
    ],

    construct : function()
    {
        this.base(arguments, "Items : Create : Index", "icon/16/apps/internet-feed-reader.png");
        this.setLayout(new qx.ui.layout.VBox());
        // this.setWidth(750);
        // this.setHeight(300);
        this.addTabs();
        this.submitButtons();
    },

    members :
    {
        /**
         * Validation
         */
        validMgr : new qx.ui.form.validation.Manager(),

        addTabs : function()
        {
            var tabView = new qx.ui.tabview.TabView;

            tabView.add(new erp.items.create.pages.BasicInfo(this.validMgr));

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

            var saveBtn = new qx.ui.form.Button("Save", "icon/16/actions/document-save.png");
            saveBtn.setWidth(100);
            saveBtn.addListener("execute", function() {
                // return type can not be used because of async validation
                this.validMgr.validate()
            }, this);
            btnRow.add(saveBtn);

            this.add(btnRow);
        }
    }
});

