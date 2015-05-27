qx.Class.define("erp.customers.create.pages.Data",
{
    extend : qx.ui.tabview.Page,
    construct : function()
    {
        this.base(arguments, "Data");
        this.layoutWindow();
        this.basicInfo();
    },
    members :
    {
        layoutWindow : function()
        {
            var layout = new qx.ui.layout.Grid(9, 5);
            layout.setColumnAlign(0, "right", "top");
            layout.setColumnAlign(2, "right", "top");
            layout.setColumnWidth(1, 160);
            layout.setColumnWidth(2, 72);
            layout.setColumnWidth(3, 108);

            this.setLayout(layout);
            this.setPadding(10);
        },

        basicInfo : function()
        {
            var labels = ["First Name", "Last Name", "City", "Country", "Notes"];
            for (var i=0; i < labels.length; i++) {
              this.add(new qx.ui.basic.Label(labels[i]).set({
                allowShrinkX: false,
                paddingTop: 3
              }), {row: i, column : 0});
            }

            var inputs = ["John", "Smith", "New York", "USA"];
            for (var i=0; i < inputs.length; i++) {
              this.add(new qx.ui.form.TextField(inputs[i]), {row:i, column:1});
            } 

            // text area
            this.add(new qx.ui.form.TextArea().set({
              height: 250
            }), {row:4, column:1, colSpan: 3}); 

            // radio buttons
            this.add(new qx.ui.basic.Label("Sex").set({
              allowShrinkX: false,
              paddingTop: 3
            }), {row:0, column:2});

            var female = new qx.ui.form.RadioButton("female");
            var male = new qx.ui.form.RadioButton("male");

            var mgr = new qx.ui.form.RadioGroup();
            mgr.add(female, male);

            this.add(female, {row:0, column:3});
            this.add(male, {row:1, column:3});
            male.setValue(true); 

            // check boxes
            this.add(new qx.ui.basic.Label("Hobbies").set({
              allowShrinkX: false,
              paddingTop: 3
            }), {row:2, column:2});
            this.add(new qx.ui.form.CheckBox("Reading"), {row:2, column:3});
            this.add(new qx.ui.form.CheckBox("Swimming").set({
              enabled: false
            }), {row:3, column:3}); 

            // buttons
            var paneLayout = new qx.ui.layout.HBox().set({
              spacing: 4,
              alignX : "right"
            });
            var buttonPane = new qx.ui.container.Composite(paneLayout).set({
              paddingTop: 11
            });
            this.add(buttonPane, {row:5, column: 0, colSpan: 4});

            var okButton = new qx.ui.form.Button("OK", "icon/22/actions/dialog-apply.png");
            okButton.addState("default");
            buttonPane.add(okButton);

            var cancelButton = new qx.ui.form.Button("Cancel", "icon/22/actions/dialog-cancel.png");
            buttonPane.add(cancelButton);
        }
    }
});

