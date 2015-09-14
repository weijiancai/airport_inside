
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

function scroller(wrap) {
    var $content = $(wrap).find('.content');
    if($content.length > 0) {
        $content.each(function() {
            var isScroll = $(this).data('scroller');
            if(isScroll && isScroll == 'T') {
                return;
            }
            console.log('scroller');
            console.log(this);
            new IScroll(this);
            $(this).data('scroller', 'T');
        });
    }
}

$(function() {
    // 滚动
    //scroller(document);

    // 分类卡片,只有一行时，去掉border
    var $categoryCard = $('.category_card');
    console.log($categoryCard.find('tr').length);
    $categoryCard.each(function() {
        if($(this).find('tr').length == 1) {
            $(this).find('td').css('border', 'none');
        }
    });


    // 选择餐饮
    $('#btnCatering').click(function() {
        $(this).addClass('pressed');
        $('#btnHotel').removeClass('pressed');
        $('#cateringList').show();
        $('#hotelList').hide();
    });
    // 选择酒店
    $('#btnHotel').click(function() {
//        $(this).addClass('pressed');
        $('#btnCatering').removeClass('pressed');
        $(this).toggleClass('pressed');
        $('#cateringList').hide();
        $('#hotelList').show();
    });
});