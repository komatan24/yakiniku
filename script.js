// トップへスクロールjQuery↓
$(function(){
    $('#pageTop').hide();
  
    $(window).scroll(function(){
      if ($(this).scrollTop()>40) {
        $('#pageTop').fadeIn();
      }else {
        $('#pageTop').fadeOut();
      }
    });
  
    $('#pageTop').click(function(){
        ///ページトップへスクロール
      $("html,body").animate({scrollTop:0},"fast");
    });
  });
