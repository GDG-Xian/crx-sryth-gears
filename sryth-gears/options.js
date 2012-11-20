$(function() {
    var app = chrome.extension.getBackgroundPage();
    $('.option').blur(function() {
        var $this = $(this);
        app.set_option($this.attr('name'), $this.val()); 
    });

    $('.option').each(function() {
        var $this = $(this);
        $this.val(app.get_option($this.attr('name')));
    });
});
