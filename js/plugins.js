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


    $(document).ready( function() {
        
        // Message 勾選 切換 .selected 狀態
        $(".message-control, .article-control").click( function(){
            $(this).find('.check').children('span').toggleClass('glyphicon-stop glyphicon-check');
            $(this).parent().toggleClass('selected');
        });
        $(".image-control").click( function(){
            $(this).parent().toggleClass('selected');
        });

        // komica 引用的 >>No.12321323 點擊高亮目標
        $(".quote").click( function() {
            $(".messages .messageCon:first-child").toggleClass('highlight');
        }) 

        // manage btn 所以的 .btn-manage 都可以來摺疊 該 Con 的 menu-bar
        $('.btn-manage').bind( "click" ,  function() {
            $(this).toggleClass('active');
            $(this).closest('div[class$="Con"]').children('.menu-bar').slideToggle('fast');
        });

        // vote        
        $('.option').bind( "click" ,  function() {
            // .loading-cover 讀取畫面
            var $cover = $(this).closest('div[class$="Con"]').children('.loading-cover');

            // toggle .vote-result
            var $vote = $(this).closest('.vote');
            
            setTimeout( function(){
                $vote.toggleClass('vote-result');
            }, 2000);                   

            $cover.fadeIn();     
            $cover.delay(2000).fadeOut();
        });

    });

    // push toggle Class
    $(document).ready( function() {
        $(".push").click( function(){            
            $(this).removeClass('highlight').toggleClass('selected');
        });
    });
    $(document).ready( function() {
        $(".push").find('.pId').click( function(e){
            e.stopPropagation();
            $(this).parent().parent().removeClass('selected').toggleClass('highlight');
        });
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

    // _form_post.html 捲動開關
    function scrollStartTrigger() {
        positionTop = $(document).scrollTop();
        var power = false;
        if ( positionTop > 45 && power === false) {
            $('.fluid-post-form').addClass('active');
            power = true;
        } else {
            $('.fluid-post-form').removeClass('active');
            power = false;
        }
    };
    $(window).scroll( function(){
        scrollStartTrigger();
    });
    $(document).ready( function(){
        var menubar = $('.menu-bar');

        // 隱藏ID開關
        $('#btn-toggle-id').click( function(){
            $('#btn-toggle-id').css('display', 'none');
            $('#user-id').toggleClass('hidden');
        });
        // .menu-bar 收折 textarea 漂浮 @@@ <---未完成
        // NOTE  --->> 發文模式[active] --> 判斷SCROLL[fluid] 
        //       --->> 發文模式[unactive] --> 不判斷SCROLL
        //       --->> Focus --> 開啟發文模式 --> Blur --> 沒有fluid 關閉發文模式
        //                                            --> 有fluid 維持原狀
        $('.btn-submit').click( function(){
            if( $(menubar).hasClass('close') ) {
                $('.fluid-post-form').toggleClass('active close');
                $(menubar).removeClass('close');
            } else {
                $('.fluid-post-form').toggleClass('active close');
                $(menubar).addClass('close');
            }
        });
        $(".textarea").focus( function() {
            if( $(menubar).hasClass('close') ) {
                $(menubar).removeClass('close');
            }
        });
        $(".textarea").blur( function() {
            if( $(menubar).hasClass('close') ) {
                $(menubar).addClass('close');
            }
        });
    })    

    // Content Editable
    $(document).on('change keydown keypress input', 'div[data-placeholder]', function() {
        if (this.textContent) {
            this.dataset.divPlaceholderContent = 'true';
        }
        else {
            delete(this.dataset.divPlaceholderContent);
        }
    });
    document.querySelector("div[contenteditable]").addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text");
        document.execCommand("insertText", false, text);
    });

}(window.jQuery);

