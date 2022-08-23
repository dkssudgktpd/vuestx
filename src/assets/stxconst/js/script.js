$(document).ready(function(){
  // 안내창 기능
  $('html').css('overflow','hidden');
  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  let modalMain = $('.modal-main');
  modalClose.click(function(){
    modalWrap.stop().fadeOut(100);
    $('html').css('overflow','auto');
  });
  modalMain.click(function(event){
    event.stopPropagation();
  });
  modalWrap.click(function(){
    modalWrap.stop().fadeOut(100);
  });
  
  // .header를 저장
  let header = $('.header');
  let depth1 = $('.depth1');
  let gnb = $('.gnb');

  // 펼쳐 졌을 때에 높이값
let gnbMaxHeight = gnb.outerHeight();
// 닫혔을 때에 높이값
let gnbMinHeight = header.outerHeight();
console.log(gnbMinHeight);
// 기본 header의 높이값 적용
header.css('height', gnbMinHeight);


  depth1.mouseenter(function () {
    header.css('height', gnbMaxHeight);
  });

  depth1.mouseleave(function () {
    header.css('height', gnbMinHeight);
  });

  // 주메뉴 포커스 기능
  let depth_1_Li = $('.depth1 > li');

  $.each(depth_1_Li, function (index) {
    $(this).mouseenter(function () {
      depth_1_Li.find('>a').removeClass('depth1-focus');
      //li의 > a를 찾는다.
      $(this).find('>a').addClass('depth1-focus');
    });
    $(this).mouseleave(function () {
      //li의 > a를 찾는다.
      $(this).find('>a').removeClass('depth1-focus');
      depth_1_Li.eq(1).find('>a').addClass('depth1-focus');
    });
  });




  //part 배경 배치





});