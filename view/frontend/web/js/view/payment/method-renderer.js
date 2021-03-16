define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'tattranpaymentt',
                component: 'TatTran_PaymentT/js/view/payment/method-renderer/tattranpaymentt'
            }
        );
        return Component.extend({});
    }
);
