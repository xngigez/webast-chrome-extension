console.log('background');

/**
 * Open local page in new chrome tab.
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === 'openPaymentPage') {
		// const email = request.email;

		console.log('background.js, request.data:', request.data);

		chrome.tabs.create({url: chrome.runtime.getURL('checkout.html')});
	}
});
