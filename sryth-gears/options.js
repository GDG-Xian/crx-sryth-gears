$(function() {
    var app = chrome.extension.getBackgroundPage();
    $('.option').blur(function() {
        var $this = $(this);
        app.set_option($this.attr('name'), $this.val()); 
    });
});
