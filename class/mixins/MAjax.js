/**
 * @lint ignoreDeprecated(alert)
 */
qx.Mixin.define("mixins.MAjax",
{
    include : [mixins.MUrls],

    members :
    {
        submitData : function(erpModule, context)
        {
            var url = this.getUrl(erpModule);
            if (url) {
                var json = window.$_erp[window.$_activeWindow].prepareJsonData(context);
                this.submitToUrl(url, JSON.stringify(json));
            }
        },

        submitToUrl : function(url, jsonString)
        {
            /**
             * Prepare data
             */
            // var controller = new qx.data.controller.Form(null, this);
            // var model = controller.createModel();
            // var jsonData = new qx.util.Serializer.toNativeObject(model);
            // var jsonString = JSON.stringify(jsonData);

            /**
             * Submit data
             */
            console.log("SubmitData : POST", jsonString);

            var req = new qx.io.remote.Request(url); 
            req.setMethod("POST");
            req.setResponseType("application/json");
            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
            req.setData(jsonString); 
            req.addListener("completed", function(e) {
                var retVal = e.getContent();
                console.log(retVal);
                if (retVal.success) {
                    alert(retVal.message);
                } else {
                    alert("Something went wrong...");
                }
            });

            req.send();
        }
    }
});

