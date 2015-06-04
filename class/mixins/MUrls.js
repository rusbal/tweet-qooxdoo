/**
 * @lint ignoreDeprecated(alert)
 */
qx.Mixin.define("mixins.MUrls",
{
    members :
    {
        urlMap : {
            "customers.create" : "/phalcon/create_new_customer.php"
        },
        
        getUrl : function(module)
        {
            var url = this.urlMap[module];
            if (url) {
                return url;
            } else {
                alert("No defined url mapping for \"" + module + "\"");
                return false;
            }
        }
    }
});


