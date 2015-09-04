$.afui.useOSThemes=false;
$.afui.disableTabBar();
$.afui.isAjaxApp=true;
$.afui.loadDefaultHash=false;

$.afui.registerDataDirective("[data-foo]",function(e){
    console.log(e)
    console.log(this);
    console.log("foo was clicked");
    $('footer').hide();
});

$(document).on('panelload', function(e) {
    if($(e.target).attr('id') == 'main') {
        $('footer').show();
    }
    // 滚动
    var $content = $(e.target).find('.content');
    if($content.length > 0) {
        new IScroll($content.get(0), {
            mouseWheel: true,
            scrollbars: true
        });
    }
    console.log($content);
});
// tab
$(document).on('click', 'div.tabs > a', function() {
    var $this = $(this);
    $this.parent().find('a').removeClass('active');
    $this.addClass('active');
});

$(function() {
    // 分类卡片,只有一行时，去掉border
    var $categoryCard = $('.category_card');
    console.log($categoryCard.find('tr').length);
    $categoryCard.each(function() {
        if($(this).find('tr').length == 1) {
            $(this).find('td').css('border', 'none');
        }
    });


    new IScroll('.content');


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