// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
!function ($){

    // Message 勾選 切換 .selected 狀態
    $(document).ready( function() {
        $(".message-control").click( function(){
            $(this).find('.check').children('span').toggleClass('glyphicon-stop glyphicon-check');
            $(this).parent().toggleClass('selected');
        });
        $(".image-control").click( function(){
            $(this).parent().toggleClass('selected');
        });

        $(".quote").click( function() {
            $(".messages .messageCon:first-child").toggleClass('highlight');
        })        
    });    

    // image 
    $(document).click( function() { 
        // 快取 .image-horizontal .image-vertical .image
        var $imgH = $('.image-horizontal');
        var $imgV = $('.image-vertical');
        var $img = $(".img1, .img2, .img3, .img4");
        
        // 取得 img 的長寬 判斷是 高 > 寬 or 高 < 寬
        $imgH.find('img').each( function() {
            var h = $(this).height();
            var w = $(this).width();

            if( h <= w ) {
                $(this).css({"border":"1px solid blue"});
                $(this).css({"height":"100%", "width":"auto"});   
                console.log(h,w);             
            } else {
                $(this).css({"border":"2px solid red"});                
            }
        });
    });

    // 捲動開關
    function scrollStartTrigger() {
        positionTop = $(document).scrollTop();
        var power = false;
        if ( positionTop > 45 && power === false) {
            $('#postFormCon').addClass('right');
            power = true;
        } else {
            $('#postFormCon').removeClass('right');
            power = false;
        }
    };
    $(window).scroll( function(){
        scrollStartTrigger();
    });
    

}(window.jQuery);

// Content Editable
document.querySelector("div[contenteditable]").addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text");
    document.execCommand("insertText", false, text);
});

