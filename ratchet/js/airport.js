
/*
$.afui.registerDataDirective("[data-foo]",function(e){
    console.log(e)
    console.log(this);
    console.log("foo was clicked");
    $('footer').hide();
});
*/

/*$(document).on('tap', 'a[data-foo]', function(e) {
    //console.log(e);
    alert('tap');
    $('footer').hide();
});*/

$(document).on('panelload', function(e) {
    if($(e.target).attr('id') == 'main') {
        $('footer').show();
    }
    // 滚动
    //scroller(e.target);
});
// tab
$(document).on('click', 'div.tabs > a', function() {
    var $this = $(this);
    $this.parent().find('a').removeClass('active');
    $this.addClass('active');
    // 隐藏target
    $this.parent().find('a').each(function() {
        var target = $(this).data('target');
        if(target) {
            if(target == $this.data('target')) {
                $('#' + target).show();
            } else {
                $('#' + target).hide();
            }
        }
    });
});
// 同意服务协议
$(document).on('click', 'a#agreeProtocol', function() {
    $(this).find('span').toggleClass('active');
});
// 日历
$(document).on('push', function() {

});
window.addEventListener('push', function() {
    $('script').each(function() {
        eval(this.innerHTML);
    });
    /*var scriptsList = document.querySelectorAll('script.js-custom');
    for (var i = 0; i < scriptsList.length; ++i) {
        eval(scriptsList[i].innerHTML);
    }*/
});