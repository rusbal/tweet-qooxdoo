/**
 * @lint ignoreDeprecated(alert)
 */
qx.Mixin.define("mixins.shortcuts.MForm",
{
    members :
    {
        setFocusTo : null,

        __tabIdx : 0,

        _ : function(formObj, isRequired, placeHolder)
        {
            formObj.setRequired(isRequired);
            formObj.setTabIndex(++this.__tabIdx);

            if (placeHolder) {
                formObj.setPlaceholder(placeHolder);
            }

            if (this.__tabIdx === 1) {
                this.setFocusTo = formObj;
            } 
            return formObj;
        },

        makeLabel : function(label, isRequired)
        {
            var lbl = label + (isRequired ? " <span style='color:red'>*</span> : " : " : ")
            var lblObj = new qx.ui.basic.Label(lbl);
            lblObj.setRich(true);
            return lblObj;
        },

        makeSelection : function(options, withPreOption, preOption)
        {
            var s = new qx.ui.form.SelectBox();
            // s.addListener("changeSelection", function(e) {});

            if (withPreOption !== false) {
                if (preOption !== undefined) {
                    s.add(new qx.ui.form.ListItem(preOption));
                } else {
                    s.add(new qx.ui.form.ListItem(""));
                }
            }

            for (var i = 0; i < options.length; i += 1) {
                s.add(new qx.ui.form.ListItem(options[i]));
            }
            return s;
        },

        _getSelectedValue : function(select)
        {
            var selection = select.getSelection(),
                value = null;

            if (selection.length > 0) {
                value = selection[0].getLabel();
            }
            return value;
        }
    }
});

