//1. product 메뉴를 누르면 menu-list 보이기
$("#nav-menu").click(function () {
  $(".menu-list").slideToggle();
});

//addClass 사용해 Login 변경하기
$("#login").click(function () {
  $(".login-background").addClass("login-slide");
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
