qx.Class.define("widgets.Ckeditor", {

    extend: qx.ui.form.TextArea,

    properties: {
        appearance: {
            refine: true,
            init: "widget"
        }
    },

    construct: function(value, height, menubarheight) {
        if (!menubarheight) {
            menubarheight = 141; // default menubar is 141px
        }

        this.base(arguments, value);

        this.addListenerOnce("appear", function(e) {

            var el = this.getContentElement().getDomElement();
            // var hint = this.getSizeHint();

            this.__ckEditor = CKEDITOR.replace(el, {

                // height: hint.height - menubarheight - 42,
                //  42px for the frame
                height: height,

                // width: hint.width,
                // width: this.width,

                resize_enabled: false,
                tabIndex: this.getTabIndex(),
                // toolbar: [ // everything but Maximize
                //     ['Source', '-', 'Save', 'NewPage', 'Preview', '-', 'Templates'],
                //     ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'],
                //     ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
                //     ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
                //     '/', ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
                //     ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote', 'CreateDiv'],
                //     ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                //     ['BidiLtr', 'BidiRtl'],
                //     ['Link', 'Unlink', 'Anchor'],
                //     ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'],
                //     '/', ['Styles', 'Format', 'Font', 'FontSize'],
                //     ['TextColor', 'BGColor'],
                //     ['ShowBlocks', '-', 'About']
                // ]
                toolbar: [
                    ['Undo', 'Redo', '-', 'Bold', 'Italic', 'Underline'],
                    ['FontSize', 'TextColor'],
                    ['NumberedList', 'BulletedList', 'PasteFromWord', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', '-', 'Link', 'Unlink', 'Image'],
                    ['Source'],
                ]
            });

        }, this);
    },

    members: {

        __ckEditor: null,

        linkTo: function(saveButton) {
            saveButton.addListener("execute", function() {

                var old = this.__ckEditor._.data;
                this.__ckEditor.updateElement();
                var val = this.__ckEditor._.data;

                if (old != val) {
                    /**
                     * Remove <div id="xunlei_com_thun...458d045bd">&nbsp;</div> at 2nd to the last line
                     */
                    var parts = val.split("\n");
                    var newVal = "";

                    for (var x = 0; x < parts.length; x += 1) {
                        if (parts[x]) {
                            if ((x + 1) != (parts.length - 1)) {
                                newVal += parts[x] + "\n";
                            }
                        }
                    }

                    this.fireDataEvent("changeValue", newVal, old);
                    this.setValue(newVal);
                }
            }, this);
        }
    }
});
