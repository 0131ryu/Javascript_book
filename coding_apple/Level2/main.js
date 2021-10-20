//버튼 0(products)을 누르면
//0. 버튼0, 버튼1과 버튼2에 붙은 주황색 제거
//0-1. 내용0, 내용1과 내용2에 붙은 주황색 제거
//1. 버튼0이 주황색으로 하이라이트 됨
//2. 내용 0이 보여야함

//여러 개 찾은 것중 0번째 선택
/*
$(".tab-button")
  .eq(0)
  .click(function () {
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(".tab-button").eq(0).addClass("active");
    $(".tab-content").eq(0).addClass("show");
  });

//1번째
$(".tab-button")
  .eq(1)
  .click(function () {
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(".tab-button").eq(1).addClass("active");
    $(".tab-content").eq(1).addClass("show");
  });

//2번째
$(".tab-button")
  .eq(2)
  .click(function () {
    $(".tab-button").removeClass("active");
    $(".tab-content").removeClass("show");

    $(".tab-button").eq(2).addClass("active");
    $(".tab-content").eq(2).addClass("show");
  });
 */
for (var i = 0; i < 5; i++) {
  console.log("안녕!");
}

for (let i = 0; i < $(".tab-button").length; i++) {
  //var말고 let 쓰기(범위({})가 작음)
  $(".tab-button")
    .eq(i)
    .click(function () {
      $(".tab-button").removeClass("active");
      $(".tab-content").removeClass("show");

      $(".tab-button").eq(i).addClass("active");
      $(".tab-content").eq(i).addClass("show");
    });
}
