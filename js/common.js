// MV領域の表示幅
var slideWidth = $('.slide').outerWidth();
var slideNum = $('.slide').length;
var slideSetWidth = slideWidth * slideNum;
$('.slideSet').css('width', slideSetWidth);

var slideCurrent = 0; // スライド番号

//　アニメーションを実行
var changeMv = function(){
  if( slideCurrent < 0 ) {
    slideCurrent = slideNum - 1;
  }else if( slideCurrent > slideNum - 1) {
    slideCurrent = 0;
  }

  $('.slideSet').stop().animate({
    left: slideCurrent * -slideWidth
  });
}

// $('.mv').click(function() {
//   changeMv();
// })

// ３秒毎に実行
function timer(){
  //mes();
  slideCurrent++;
  changeMv();
  setTimeout('timer()', 5000);
}

// debug
// function mes(){
//   window.alert("hoge");
// }

$('body').ready(function(){
  setTimeout('timer()', 5000);
});
