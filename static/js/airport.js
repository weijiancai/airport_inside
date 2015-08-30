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