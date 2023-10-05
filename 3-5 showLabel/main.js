App.showCenterLabel("잠겨져 있는 금고에서 가장 중요한 문서(증거)를 찾아내자!");

// 블루맨이라는 변수를 자바스크립트 문법에 맞게 생성
let blueman = null;

// 변수에 SpriteSheet를 읽어 저장
blueman = App.loadSpritesheet('blueman.png', 48, 64, {
    left: [5, 6, 7, 8, 9], // left 라는 이미 정해진 왼쪽 방향으로 걸을 때의 애니메이션 이름
    up: [15, 16, 17, 18, 19], // 그 이름에 쓰일 전체 파일에서의 인덱스 넘버들
    down: [0, 1, 2, 3, 4],
    right: [10, 11, 12, 13, 14],
}, 8); // 1초에 8장으로 한다.

// 플레이어가 입장할 때 바로 블루맨 그림으로 교체해준다.
App.onJoinPlayer.Add(function(player){
	player.sprite = blueman;
  
  // 플레이어 속성이 변경되었으므로 호출해서 실제 반영해준다.
	player.sendUpdated();
})