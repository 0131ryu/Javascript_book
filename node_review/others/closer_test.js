function sky(question) {
    var weather1 = 'rain';
    return function sky2(question2) {
      var weather2 = 'sunny';
      return function sky3(question3) {
        var weather3 = 'windy';
        return question + " : " + weather1 + " " + question2 + " : " + weather2 + " " + question3 + " : " + weather3;
      }
    }
  }
  
  const result1 = sky('비오는 날씨는? : ');
  const result2 = result1('맑은 날씨는? : ');

  console.log(result2('오늘의 날씨는? : '));
  
/*
[결과]
비오는 날씨는? :  : rain 맑은 날씨는? :  : sunny 오늘의 날씨는? :  : windy
 */

  function money(x) {
    var color = 'green';
    return function(y) { //클로저에 x의 환경(값)이 저장됨
      color = 'orange';
      return x + y ;
    };
  }
  
  var result3 = money('test1 : ');
  var result4 = money('test2 : ');

  console.log(result3('만원'));
  console.log(result4('오만원'));
  //클로저에 x와 y의 환경이 저장됨
  
  /*
  [결과]
  test1 : 만원
  test2 : 오만원 
  */