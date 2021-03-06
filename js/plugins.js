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
        
        // bootstrpa dropdown active
        $('.dropdown-toggle').dropdown();

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
        // 快取
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

    // for banch.html
    $(document).ready( function(){
        var replyModTrigger = false;
        var $menubar = $('.menu-bar');
        var $fluidCon = $('.fluid-post-form');

        $menubar.hide();

        // a Trigger of Toggle, toggle the Boolean between true and false.
        // ps: any other way do it better??
        var toggleTrigger = function() {  
            if( replyModTrigger === false ) {
                replyModTrigger = true;
                $menubar.toggle();
                $fluidCon.removeClass('close');
            } else 
            if ( replyModTrigger === true ) {
                replyModTrigger = false;
                $menubar.toggle();
                $fluidCon.addClass('close').removeClass('fluid');
            }
        }                                          

        $('.btn-cancel').click( function(){            
            toggleTrigger();
        });

        $(".textarea").focus( function() {            
            if ( replyModTrigger === false ) {
                toggleTrigger();
            }
        });

        // _form_post.html 捲動開關
        function scrollStartTrigger() {
            positionTop = $(document).scrollTop();            
            if ( positionTop > 45 && replyModTrigger === true) {
                $fluidCon.addClass('fluid');                
            } else {
                $fluidCon.removeClass('fluid');
            }
        };

        $(window).scroll( function(){
            scrollStartTrigger();
        });

        // 隱藏ID開關
        $('#btn-toggle-id').click( function(){
            $('#btn-toggle-id').css('display', 'none');
            $('#user-id').toggleClass('hidden');
        });

        var $intro = $('.board-intro');
        var intro = $('.full-view-btn').parent().html();        
        $('body').on('click',function() {
            $('.full-view-btn').bind('click', function() {
                $intro.append( intro );
                $intro.append(" <a class='clear-btn'> clear </a> ");
            });
            $('.clear-btn').bind('click', function(){
                $intro.empty().append( intro );                
            });
        });
    });



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

