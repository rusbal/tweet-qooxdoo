qx.Mixin.define("erp.customers.create.pages.boxes.MPaymentInfo",
{
    members :
    {
        /**
         * Payment information
         */
        _paymentGroup: null,

        _paymentMethod : null,

        paymentInformationLayout: function() {
            var layout = new qx.ui.layout.Grid(9, 5);

            layout.setColumnAlign(0, "right", "middle");
            layout.setColumnFlex(1, 1); 
            layout.setColumnWidth(0, 160);

            this._paymentGroup = new qx.ui.groupbox.GroupBox("Payment information");
            this._paymentGroup.setLayout(layout);
            this.composite.add(this._paymentGroup);
        },

        paymentInformationInitFields: function() {
            this._paymentMethod = this._(this.makeSelection(this.selectPaymentMethod()), true);
        },

        paymentInformation: function() {

            this.paymentInformationLayout();
            this.paymentInformationInitFields();

            this._paymentGroup.add(this.makeLabel("Current payment method", true), { row: 0, column: 0 }); 
            this._paymentGroup.add(this._paymentMethod, { row: 0, column: 1 }); 
        }
    }
});

