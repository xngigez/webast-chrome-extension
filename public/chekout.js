function onDOMContentLoaded() {
	console.log('checkout.js onDOMContentLoaded');
	/*
	 * Paypal
	 */
	paypal.Buttons(
		{
			createOrder: function (data, actions) {
				// This function sets up the details of the transaction, including the amount and line item details.
				return actions.order.create({
					purchase_units: [{
						reference_id: 'REFERENCE_ID',
						description: 'ORDER_ID',
						amount: {
							value: 5
						}
					}],
					application_context: {shipping_preference: 'NO_SHIPPING'}
				});
			},
			onApprove: function (data, actions) {
				// This function captures the funds from the transaction.
				return actions.order.capture().then(function (details) {
					//  This function shows a transaction success message to your buyer.
					//  alert('Transaction completed by ' + details.payer.name.given_name);

					console.log(details.purchase_units[0].payments.captures[0].id);

					subscibe(details.purchase_units[0].payments.captures[0].id);

				});
			}
		}
	).render('#paypal-button-container');
}
