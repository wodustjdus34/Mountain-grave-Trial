App.onJoinPlayer.Add(function(player){
    player.tag = {
          widget: null,
      };
  
    player.tag.widget = player.showWidget("my.html", "top", 900, 800);
      player.tag.widget.onMessage.Add(function (player, msg) {
          // 위젯에서 App으로 'type: close'라는 메시지를 보내면 위젯을 파괴함
          if (msg.type == "close") {
              player.showCenterLabel("포졸을 피해 달아나자.");
              player.tag.widget.destroy();
              player.tag.widget = null;
          }
      });
  });