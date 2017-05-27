$(document).ready(function () {
  var a = 0;
  for($i=0;$i<324;$i++){
    $('.banco').append('<div class="oco"></div>');
  }
  $('.banco').css({"width":"400px"});
  $('.oco').css({"width":"20px","height":"20px","background-color":"#fff2fa","border":"1px solid #9e178e","float":"left","cursor":"pointer"})

  $('.oco').mouseover(function () {
    $(this).css({"background-color":"#434951"})
  })
  $('.oco').mouseout(function () {
    $(this).css({"background-color":"#fff2fa"})
  })
  $('.oco').click(function () {
      if($(this).html()==''){
        a=a+1;
        if((a%2) == 1){
          $(this).html('<div class="oco">O</div>');
          $(this).css({"text-align":"center","color":"green","text-transform":"uppercase"});
        }
        else {
          $(this).html('<div class="oco">X</div>');
          $(this).css({"text-align":"center","color":"red","text-transform":"uppercase"});
        }
    }
    else {
      confirm('Bạn đã ăn gian ??');
    }
  })
})
