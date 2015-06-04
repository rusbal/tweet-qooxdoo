qx.Class.define("erp.items.create.pages.BasicInfo", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.MAjax,
        mixins.MSettings,
        mixins.shortcuts.MForm,
        mixins.data.MItem,

        erp.items.create.pages.boxes.MBasicInfo
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

        composite : null

    }
});
