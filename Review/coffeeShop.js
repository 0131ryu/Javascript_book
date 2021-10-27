//1. product 메뉴를 누르면 menu-list 보이기
$("#nav-menu").click(function () {
  $(".menu-list").slideToggle();
});

//addClass 사용해 Login 변경하기
$("#login").click(function () {
  $(".login-background").addClass("login-slide");
});

//로그인 배경(login-background)을 누를 경우 창이 닫힘
$(".login-background").click(function (e) {
  if (e.target == e.currentTarget) {
    $(".login-background").hide();
  }
});

//폼 전송 시
//모달창에서 Login 누르면 이메일이 없을 경우 이메일 없다고 나옴

//모달창에서 Login 누르면 비밀번호가 없을 경우 비밀번호 없다고 나옴
$("form").on("submit", function (e) {
  if ($("#email").val() == "") {
    e.preventDefault();
    $("#email-alert").show();
  }
  if ($("#password").val() == "") {
    e.preventDefault();
    $("#password-alert").show();
  }
});

//모달 열 경우 홈 버튼 누르면 모달창 닫기
$(".home-btn").click(function () {
  $(".login-background").hide();
});

//left-bar-button을 버튼을 누를 경우 왼쪽에 left-bar 보이게 함
$("#left-bar-button").click(function () {
  //$(".left-bar").css("marginLeft", "0px");
  $(".left-bar").addClass("left-bar-show");
});

//left-bar-close 버튼을 누를 경우 왼쪽에 left-bar 가림
$("#left-bar-close").click(function () {
  //$(".left-bar").css("marginLeft", "-200px");
  $(".left-bar").addClass("left-bar-closeBar");
});

//슬라이드
$(".imgBtn1").click(function () {
  $(".imgSlide").css("transform", "translateX(-0vw)");
});
$(".imgBtn2").click(function () {
  $(".imgSlide").css("transform", "translateX(-100vw)");
});
$(".imgBtn3").click(function () {
  $(".imgSlide").css("transform", "translateX(-200vw)");
});
$(".imgBtn4").click(function () {
  $(".imgSlide").css("transform", "translateX(-300vw)");
});
$(".imgBtn5").click(function () {
  $(".imgSlide").css("transform", "translateX(-400vw)");
});

var currentImg = 1;

$(".imgRight").click(function () {
  $(".imgSlide").css("transform", "translateX(-" + currentImg + "00vw)");
  if (currentImg < 4) {
    currentImg = currentImg + 1;
  }
});

$(".imgLeft").click(function () {
  $(".imgSlide").css("transform", "translateX(-" + (currentImg - 2) + "00vw)");
  if (currentImg > 1) {
    currentImg = currentImg - 1;
  }
});

//slider
var slider_img = document.querySelector(".slider-img");
var imgaes = ["tea1.jpg", "tea2.jpg", "tea3.jpg"];

var i = 0; //Current Image Index

function prev() {
  if (i <= 0) i = imgaes.length;
  i--;
  return setImg();
}

function next() {
  if (i >= imgaes.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "img/" + imgaes[i]);
}

//navbar 관련
//스크롤바를 내리면 navbar가 투명 -> 흰색으로 변경, 로고 색 흰색 -> 브라운
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".navbar").addClass("navbar-change");
    $(".navbar-brand").addClass("navbar-brand-change");
  }
  //스크롤바를 올리면 처음 상태로 되돌리기
  else {
    $(".navbar").removeClass("navbar-change");
    $(".navbar-brand").removeClass("navbar-brand-change");
  }

  //탭 관련
  //버튼 0번째를 누르면 버튼 1, 버튼2에 붙은 주황색 제거(show-tab)
  //버튼 0번째를 누르면 내용 1, 2에 붙은 주황색 제거(show-content)
  //버튼 0이 주황색으로 표시
  //내용 0이 보여야함

  /*
  $(".tab-btn")
    .eq(0)
    .click(function () {
      $(".tab-btn").removeClass("show-tab");
      $(".tab-content").removeClass("show-content");

      $(".tab-btn").eq(0).addClass("show-tab");
      $(".tab-content").eq(0).addClass("show-content");
    });
  */

  //for를 사용한 방법
  for (let i = 0; i < $(".tab-btn").length; i++) {
    $(".tab-btn")
      .eq(i)
      .click(function (e) {
        tabOpen(e.target.dataset.id);
      });
  }

  //탭 기능 반복되는 것 -> 함수로 축약
  function tabOpen(openNum) {
    $(".tab-btn").removeClass("show-tab");
    $(".tab-content").removeClass("show-content");

    $(".tab-btn").eq(openNum).addClass("show-tab");
    $(".tab-content").eq(openNum).addClass("show-content");
  }
});

//form
var cafeMenu = ["커피", "스파클링", "쉐이크", "티(tea)"];
var temp = ["뜨거움", "차가움"];
var coffeeMenu = ["아메리카노", "라떼", "아인슈페너"];

$("#checkList1").on("change", function () {
  //만약 사용자가 선택한 값이 커피 경우
  if ($("#checkList1").val() == cafeMenu[3]) {
    //밑의 UI를 보여줌
    temp.forEach(function (i) {
      var tempShow = `<option>${i}</option>`;
      $("#checkList2").append(tempShow);
    });
  } else if ($("#checkList1").val() == cafeMenu[0]) {
    temp.forEach(function (i) {
      var tempShow = `<option>${i}</option>`;
      $("#checkList2").append(tempShow);
    });
    coffeeMenu.forEach(function (i) {
      var coffeeShow = `<option>${i}</option>`;
      $("#checkList3").append(coffeeShow);
    });
  }
  // else if ($("#checkList1").val() == "쉐이크") {
  //   $(".c-select").css.display = "none";
  //   $(".menu-select").css.display = "none";
  // }

  //sort, filter
  var coffeeItems = [
    { id: 0, ItemPrice: 15000, tiItemNametle: "Brazil dark coffee" },
    { id: 1, ItemPrice: 30000, ItemName: "Ethiopia medium coffee" },
    { id: 2, ItemPrice: 25000, ItemName: "Columbia non-caffeine coffee" },
    { id: 3, ItemPrice: 20000, ItemName: "Vietnam non-caffeine coffee" },
    { id: 4, ItemPrice: 15000, ItemName: "Indonesia dark coffee" },
  ];

  //데이터바인딩
  function coffeeData() {
    for (var i = 0; i < 5; i++) {
      $(".ItemName").eq(i).html(coffeeItems[i].ItemName);
      $(".ItemPrice").eq(i).html(coffeeItems[i].ItemPrice);
    }
  }

  //sort를 이용해 가격 정렬
  $("#sortPrice").click(function () {
    coffeeItems.sort(function (a, b) {
      return a.ItemPrice - b.ItemPrice;
    });
    //sort를 통해 데이터 정렬 후 데이터바인딩
    coffeeData();
  });

  //sort로 가나다순 정렬
  $("#sortEng").click(function () {
    coffeeItems.sort(function (a, b) {
      if (a.ItemName < b.ItemName == true) {
        //글자 비교(부등호), +를 return 하면 b를 왼쪽, -는 b를 오른쪽
        return -1;
      } else {
        return 1;
      }
    });
    //sort를 통해 데이터 정렬 후 데이버바인딩
    coffeeData();
  });
});
