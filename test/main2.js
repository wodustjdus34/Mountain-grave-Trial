App.onJoinPlayer.Add(function (player) {
    player.tag = {
          widget: null,
      };
    

    setTimeout(function () {
		//App.sayToAll("5초후 메시지 출력");
        player.tag.widget = player.showWidget("my.html", "top", 900, 800);
        player.tag.widget.onMessage.Add(function (player, msg) {
          // 위젯에서 App으로 'type: close'라는 메시지를 보내면 위젯을 파괴함
            if (msg.type == "close") {
              //player.showCenterLabel("");
              player.tag.widget.destroy();
              player.tag.widget = null;
          }
      });
	}, 5000);  
  });