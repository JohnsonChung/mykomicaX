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
    // for background-template.html
    $(document).ready( function() {
        $('.dropdown-toggle').dropdown();

        $("<style type='text/css'> .floatit { position: fixed !important;} </style>").appendTo("head");

        $('.musume-float').bind( 'click',  function() {
            $('.kanban-musume').toggleClass('floatit');
        });

        var $msg = $('.messages');
        $('.plusHeight').click( function(){
            var h = $msg.height() + 100 ; 
            $msg.animate({
                height: h
            }, 'fast');
        });
        $('.cutHeight').click( function(){
            var h = $msg.height() - 100;
            $msg.animate({
                height: h
            }, 'fast');
        });

    });
}(window.jQuery);

