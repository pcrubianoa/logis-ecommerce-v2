//BROWSER_BUILD has been deprecated,need to use process.browser to get bootstrap.js
// /plugins/bootstrap.js
if (process.BROWSER_BUILD) {
	require("bootstrap");
}

if (process.browser) {
	require("bootstrap");
}


// if (process.client) {
// 	require('static/resources/legacy/jquery/jquery.min.js');
// 	require('static/resources/legacy/bootstrap/bootstrap.min.js');
// 	require('assets/js/main.js');
// }