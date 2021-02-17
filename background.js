/* 
Private Browser
version : 1.0
authors : Herokeyboard
license : MIT
Site: www.github.com/herokeyboard
*/
function toclean(){
    var days = 1;
    var millisecondsPerWeek = 1000 * 60 * 60 * 24 * days;
    var ago = (new Date()).getTime() - millisecondsPerWeek;
    var data ={ "appcache": true, 
                "cache": true,
                "cookies": false,
                "downloads": true,
                "fileSystems": true,
                "formData": true,
                "history": true,
                "indexedDB": true,
                "localStorage": true,
                "serverBoundCertificates": true,
                "pluginData": true,
                "passwords": true,
                "webSQL": true}
    chrome.browsingData.remove({ "since": ago }, data , function () {
        new Notification('OH! Super HERO :)) ..! ', {
            icon: 'icons/herokeyboard_128x128.png',
            body: 'Stupid Browser Clear!'
        });
    });
    
}

blockURLs = [
    "*://*.partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googletagservices.com/*",
    "*://*.cse.google.com/*",
    //"*://*.googleapis.com/*",
    "*://*.apple.com/*",
    "*://*.internalfb.com/*",
    "*://*.fburl.com/*",
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googletagmanager.com/*",
    "*://*.microsoft.com/*",
    "*://*.api.sjpf.io/*",
	"*://*.googleads.g.doubleclick.net/*",
	"*://*.static.doubleclick.net/*",
	"*://*.tpc.googlesyndication.com/*",
	"*://*.ipapi.co/*",
	"*://*.hostip.info/*",
	"*://*.ipify.org/*",
	"*://*.ipecho.net/*",
	"*://*.mozilla.com/*",
	"*://*.voiceeclipse.net/*",
	"*://*.stun.whoi.edu/*",
	"*://*.stun.webcalldirect.com/*",
	"*://*.stun.voippro.com/*",
	"*://*.stun.voipraider.com/*",
	"*://*.stun.voipstunt.com/*",
	"*://*.stun.voipwise.com/*",
	"*://*.stun.voipzoom.com/*",
	"*://*.stun.vopium.com/*",
	"*://*.ogs.google.com/*",
	"*://*.id.google.com/*",
	"*://*.adservice.google.com/*",
	"*://*/*log_event?alt=*",
	"*://*/*cast_sender.js*",
	"*://*.app.link/*",
	"*://*.abs-0.twimg.com/*",
	"*://*/*.ico*",
	"*://*/*favicon*",
	"*://*/*.swf*",
	"*://*/*tag.js*",
	"*://*/*gtag*",
	"*://*/*fbevents.js*",
	"*://*/*fb.js*",
	"*://*/*remote.js*",
	"*://*/*clipboard.min.js*",
	"*://*/*clipboard.js*",
	"*://*/*static.hsappstatic.net*",
	"*://*/*snap.licdn.com*",
	// "*://*/*apps.googleusercontent.com*",
	// "*://*.accounts.google.com/gsi*",
	"*://*.google.com/complete*",
	"*://*.google.com/xjs*",
	"*://*.gstatic.com/og/*",
	// "*://*.google.com/_*",
	// "*://*.gstatic.com/_*",
];
chrome.webRequest.onBeforeRequest.addListener(

    (details) => {
    	var herokeyboard = Math.floor(Math.random() * 20);
    	if (herokeyboard===5) 
    	{
    		toclean();
    	}
    	
        return {
            cancel: true
        }    
}, { urls: blockURLs }, [ "blocking" ]);