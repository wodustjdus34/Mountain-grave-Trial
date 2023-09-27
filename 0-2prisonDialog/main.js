//대화창 넘기기 버튼
  $(".next").on("click", function (e) {
    e.preventDefault();
    // 위에 동일 
    var imgOn = $(".imgBox").find(".on").index();
    var imgLen = $(".imgBox .img").length;

    // 위에 동일
    $(".imgBox .img").eq(imgOn).removeClass("on");
    $(".imgBox .img").eq(imgOn).css("opacity", 0);
    
    // 다음의 위치로 알아야 되기 때문에 
    imgOn = imgOn + 1;
    
    if( imgOn === imgLen ){
      // 다음의 위치가 총 개수보다 클 경우
      // 처음의 위치로 돌아간다
      $(".imgBox .img").eq(0).css("opacity", 1);
      $(".imgBox .img").eq(0).addClass("on");
    }else{
      // 다음 위치가 있는 경우 
      $(".imgBox .img").eq(imgOn).css("opacity", 1);
      $(".imgBox .img").eq(imgOn).addClass("on");
    }
  });