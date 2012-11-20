function get_option(name) {
    return localStorage[name];
}

function set_option(name, value) {
    localStorage[name] = value;
}

chrome.tabs.getSelected(null, function(tab) {
    // When the browser action is clicked, set the popup for |tab|.
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.create({ url: 'http://www.sryth.com/', active: true });
    });
});

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type === 'GET_FONT_SIZE') {
            if (sender.tab) {
                console.log(sender.tab.url)
                chrome.tabs.insertCSS(sender.tab.id, {
                    allFrames: true,
                    code: 'p,td,a,* { font-size: 18px!; }',
                    runAt: 'document_end'
                });
            }
            sendResponse(get_option('font_size'));
        }
    });
