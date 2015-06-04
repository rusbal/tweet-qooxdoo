qx.Class.define("erp.customers.create.pages.Data", {

    extend: qx.ui.tabview.Page,

    include: [
        mixins.MSettings,
        mixins.shortcuts.MForm,
        mixins.data.MCustomer,

        erp.customers.create.pages.boxes.MBasicInfo,
        erp.customers.create.pages.boxes.MComment,
        erp.customers.create.pages.boxes.MPaymentInfo,
        erp.customers.create.pages.boxes.MBillingInfo,
        erp.customers.create.pages.boxes.MAlternateShipping
    ],

    construct: function() {
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
        this.comment();
        this.paymentInformation();
        this.billingInformation();
        this.alternateShipping();
    },

    members: { 
        composite : null
    }
});
