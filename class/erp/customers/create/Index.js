/**
 * @lint ignoreDeprecated(alert)
 */
qx.Class.define("erp.customers.create.Index",
{
    extend : qx.ui.window.Window,

    include : [
        mixins.MAjax,
        erp.customers.create.mixins.MDataValidator,
        erp.customers.create.mixins.MDataJson
    ],

    construct : function()
    {
        this.base(arguments, "Create new customer", "icon/16/apps/internet-feed-reader.png");
        this.setLayout(new qx.ui.layout.VBox());
        this.addTabs();
        this.submitButtons();
        this.setValidation(this.dataTab);
    },

    members :
    {
        dataTab : null,

        addTabs : function()
        { 
            var tabView = new qx.ui.tabview.TabView;
            this.dataTab = new erp.customers.create.pages.Data();
            tabView.add(this.dataTab);
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
                this.vManager.validate()
            }, this);
            btnRow.add(saveBtn);

            this.add(btnRow);
        }
    }
});

