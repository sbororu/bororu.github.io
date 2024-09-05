$(document).ready(function(){
        // スクロールで反応するアニメーション
        $(window).on('load scroll', function (){
            SetScrollTiming('.animation');
        });
    });
 
    // スクロールのタイミングでアニメーションさせる
    function SetScrollTiming(target){
        var box = $(target);
        var animated = 'animated';
 
        box.each(function(){
            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();
 
            //画面内のどの位置で処理を実行するかで「100」の値を変更
            if(scrollPos > boxOffset - wh + 100 ){
                $(this).addClass('move');
            }
        });
    }
$(window).on('load scroll', function (){
    SetScrollTiming('.gallery-box1');
    SetScrollTiming('.gallery-box2');
});