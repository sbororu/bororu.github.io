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

//Tooltip
$(function(){
    //スマホ等タッチデバイスでhoverと同等のアクションをさせるために、イベントをtouchstart,touchendにします。もちろんタッチデバイスだけしか判定されません。
    $(".wrapper a").bind('touchstart',function() {
      $(this).next('span:not(:animated)').animate({opacity:'show' , 'top': '-85px',}, 1500,'easeOutElastic');}).bind('touchend', function() {
        $(this).next("span").animate({opacity: 'hide', top: '0'}, 100,'linear');
      });
   
    //PC用↓イベントを.bindに書き換えています
    $(".wrapper a").bind('mouseenter',function() {
      $(this).next('span:not(:animated)').animate({opacity:'show' , 'top': '-85px',}, 1500,'easeOutElastic');}).bind('mouseleave', function() {
        $(this).next("span").animate({opacity: 'hide', top: '0'}, 100,'linear');
      });
    
    //↑なのでPCかスマホかを最初に判定して、'mouseenter'か'touchstart'に書きかわるロジックを作れば、コードを短くできますね！
    
  });