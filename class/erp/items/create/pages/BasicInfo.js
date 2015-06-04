qx.Class.define("erp.items.create.pages.BasicInfo", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.MAjax,
        mixins.MSettings,
        mixins.shortcuts.MForm,
        mixins.data.MItem,

        erp.items.create.pages.boxes.MBasicInfo,
        erp.items.create.pages.boxes.MDescription,
        erp.items.create.pages.boxes.MMetaInfo,
        erp.items.create.pages.boxes.MAddlFields
    ],

    construct: function(saveBtn) {
        this.base(arguments, "Data");
        this.setLayout(new qx.ui.layout.VBox());

        this.saveBtn = saveBtn;

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
        this.description();
        this.metaInfo();
        this.addlFields();
    },

    members: {

        composite : null,
        saveBtn : null

    }
});
