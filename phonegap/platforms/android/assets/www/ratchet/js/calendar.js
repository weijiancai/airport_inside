function Calendar(id, length) {
    length = length || 6; // 默认6个月
    var $calendar = $('#' + id).empty();
    var currentMonth = moment().month(); // 当前月
    var currentDate = moment().date(); // 当天

    // 创建月视图
    function create(month) {
        createHeader(month);
        createTable(month);
    }

    // 创建标题
    function createHeader(month) {
        $calendar.append('<div class="month_title">' + month.format('YYYY-MM') + '</div>');
    }

    // 创建表格
    function createTable(month) {
        var $table = $('<table></table>').appendTo($calendar);
        var firstDay = month.startOf('month').clone();
        var lastDay = month.endOf('month').clone();
        var $tr = $('<tr></tr>').appendTo($table);
        var j = 1;
        for(var i = 1; i <= 42; i++) {
            var $td = $('<td></td>').appendTo($tr);
            var $a = $('<a></a>').appendTo($td);
            if(i % 7 == 0) {
                $tr = $('<tr></tr>').appendTo($table);
            }
            if(firstDay.day() == 0 && i <= 7) {
                if(i == 7) {
                    if(appendA($a)) {
                        break;
                    }
                }
            } else if((i >= firstDay.day())) {
                if(appendA($a)) {
                    break;
                }
            }
        }

        function appendA($a) {
            $a.text(j).attr('id', firstDay.format('YYYY-MM-') + j);

            if(month.month() == currentMonth) {
                if(j < currentDate) {
                    $a.addClass('disable');
                } else if(j == currentDate) {
                    $a.addClass('current');
                }
            }

            j++;
            return j > lastDay.date();
        }
    }

    // 创建
    for(var i = 0; i < length; i++) {
        create(moment().add(i, 'M'));
    }

    $calendar.find('a').click(function () {
        var $this = $(this);
        if($this.hasClass('disable')) {
            return;
        }
        $calendar.find('a').removeClass('current');
        $(this).addClass('current');
    });

    this.getSelected = function() {
        return $calendar.find('a.current').attr('id');
    }
}