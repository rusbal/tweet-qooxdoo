qx.Mixin.define("erp.customers.create.mixins.MDataJson",
{
    members :
    {
        /**
         * Called from MAjax.js
         */
        prepareJsonData : function(context)
        {
            return { 
                email         : context._email.getValue(),
                customerGroup : context._getSelectedValue(context._customerGroup),
                shop          : context._getSelectedValue(context._shop),
                active        : context._active.getValue(),
                password      : context._password.getValue(),

                comment       : context._comment.getValue(),

                title         : context._getSelectedValue(context._title),
                firstName     : context._firstName.getValue(),
                lastName      : context._lastName.getValue(),
                street        : context._street.getValue(),
                streetNumber  : context._streetNumber.getValue(),
                zipCode       : context._zipCode.getValue(),
                city          : context._city.getValue(),
                country       : context._getSelectedValue(context._country),
                dateOfBirth   : context._dateOfBirth.getValue(),
                phone         : context._phone.getValue(),
                fax           : context._fax.getValue(),
                text1         : context._text1.getValue(),
                text2         : context._text2.getValue(),
                text3         : context._text3.getValue(),
                text4         : context._text4.getValue(),
                text5         : context._text5.getValue(),
                text6         : context._text6.getValue(),

                title2         : context._getSelectedValue(context._title2),
                firstName2     : context._firstName2.getValue(),
                lastName2      : context._lastName2.getValue(),
                street2        : context._street2.getValue(),
                streetNumber2  : context._streetNumber2.getValue(),
                zipCode2       : context._zipCode2.getValue(),
                city2          : context._city2.getValue(),
                country2       : context._getSelectedValue(context._country2),
                text12         : context._text12.getValue(),
                text22         : context._text22.getValue(),
                text32         : context._text32.getValue(),
                text42         : context._text42.getValue(),
                text52         : context._text52.getValue(),
                text62         : context._text62.getValue(),

                paymentMethod  : context._getSelectedValue(context._paymentMethod)
            };
        }
    }
});

