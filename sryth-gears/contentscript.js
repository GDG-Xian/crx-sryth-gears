chrome.extension.sendMessage({type: 'GET_FONT_SIZE'}, function(font_size) {
    $(function() {
        $('td,a,p').css('font-size', font_size);
    });
});
