qx.Mixin.define("erp.customers.create.pages.mixins.MDataJson",
{
    members :
    {
        /**
         * Called from MAjax.js
         */
        customerCreateJson : function()
        {
            return { 
                email         : this._email.getValue(),
                customerGroup : this._getSelectedValue(this._customerGroup),
                shop          : this._getSelectedValue(this._shop),
                active        : this._active.getValue(),
                password      : this._password.getValue(),

                comment       : this._comment.getValue(),

                title         : this._getSelectedValue(this._title),
                firstName     : this._firstName.getValue(),
                lastName      : this._lastName.getValue(),
                street        : this._street.getValue(),
                streetNumber  : this._streetNumber.getValue(),
                zipCode       : this._zipCode.getValue(),
                city          : this._city.getValue(),
                country       : this._getSelectedValue(this._country),
                dateOfBirth   : this._dateOfBirth.getValue(),
                phone         : this._phone.getValue(),
                fax           : this._fax.getValue(),
                text1         : this._text1.getValue(),
                text2         : this._text2.getValue(),
                text3         : this._text3.getValue(),
                text4         : this._text4.getValue(),
                text5         : this._text5.getValue(),
                text6         : this._text6.getValue(),

                title2         : this._getSelectedValue(this._title2),
                firstName2     : this._firstName2.getValue(),
                lastName2      : this._lastName2.getValue(),
                street2        : this._street2.getValue(),
                streetNumber2  : this._streetNumber2.getValue(),
                zipCode2       : this._zipCode2.getValue(),
                city2          : this._city2.getValue(),
                country2       : this._getSelectedValue(this._country2),
                text12         : this._text12.getValue(),
                text22         : this._text22.getValue(),
                text32         : this._text32.getValue(),
                text42         : this._text42.getValue(),
                text52         : this._text52.getValue(),
                text62         : this._text62.getValue(),

                paymentMethod  : this._getSelectedValue(this._paymentMethod)
            };
        }
    }
});

