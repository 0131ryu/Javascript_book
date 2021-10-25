//셔츠를 고르면 셔츠 사이즈를 고르는 select 폼 보여주기
$("#option1").on("change", function () {
  //만약 사용자가 선택한 값이 셔츠인 경우
  if ($("#option1").val() == "셔츠") {
    //밑의 UI를 보여줌
    $(".size-select").show();
  }
  //모자를 고르면 밑의 UI가 숨겨짐
  else if ($("#option1").val() == "모자") {
    $(".size-select").hide();
  }
});

//이벤트 중 input, change 있음
