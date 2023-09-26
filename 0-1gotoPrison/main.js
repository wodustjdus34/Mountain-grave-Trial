// load sprite monster
let pozol = App.loadSpritesheet('pozol_sprite.png', 48, 64,{
    left: [0],
	right: [1, 2, 3],
	up: [0],
	down: [0],
}, 4);

const STATE_INIT = 3000;
const STATE_READY = 3001;
const STATE_PLAYING = 3002;
const STATE_JUDGE = 3004;
const STATE_END = 3005;

let _start = false; // Whether the game starts
let _players = App.players; // App.players : get total players
let _state = STATE_INIT;
let _stateTimer = 0; // Timer to check status value
let _resultstr;

let _level = 1;
let _genTime = 0;

function startApp()
{
    let pozolCnt = Math.floor(5); // 포졸의 수 5명으로 설정

    let allPlayer = [];

    for(let i = 0; i < _players.length; ++i){
            allPlayer.push(_players[i]);
    }
    
    let index = Math.floor(allPlayer.length * Math.random());
    if(!zombieIdx.includes(allPlayer[index].id)){
        zombieIdx.push(allPlayer[index].id);
        allPlayer.splice(index, 1);
    }

    _start = true;
}

// 모든 플레이어에게 라벨을 출력하는 함수
function showLabel(str) {
	for (let i in _players) {
		let p = _players[i];
		customShowLabelWithRadius(p, str, 40, 14);
	}
}

function startState(state)
{
    _state = state;
    _stateTimer = 3;

    switch(_state)
    {
        case STATE_INIT:
            _genTime = 0;
            // 게임 목표 라벨 출력
			showLabel("포졸을 피해 달아나세요!");

            startApp(); // 바로 앱 시작

            for (let i in _players) {
				let p = _players[i];
				p.tag = {
					alive: true,
				};
			}
            break;
        
        case STATE_PLAYING:
			break;
        
        case STATE_END:
            _start = false;
            Map.clearAllObjects();
            break;
    }
}

// 플레이어가 모두 입장한 뒤에 한번 호출
App.onStart.Add(function () { //시작하자마자 상태 INIT으로
	startState(STATE_INIT);
});


// 플레이어가 스페이스에 입장 했을 때 이벤트
App.onJoinPlayer.Add(function(p) {
    p.tag = {
        pozol : false,
    };

    if(_start) {
        p.tag.pozol = true;
        p.sprite = pozol;
        p.sendUpdated();
    }   
    _players = App.players;
});

// 매 20ms(0.02초) 마다 실행
App.onUpdate.Add(function (dt) {
	if (!_start) return;

	_stateTimer += dt;
	switch (_state) {
		case STATE_INIT:
			// STATE_INIT 상태에서 2초동안 게임 목표 라벨을 보여주고 STATE_INIT 로직 실행
			if (_stateTimer >= 2) {
				startState(STATE_PLAYING);
			}
			break;

		case STATE_PLAYING:
			_genTime -= dt;
			let pozolkey;
			if (_genTime <= 0) {
				// 오브젝트 생성주기(genTime)
				_genTime = Math.random() * (0.5 - _level * 0.05);
				let rand_X = Math.floor(Map.width * Math.random() * 0.3);

				// 포졸 오브젝트의 key 값 생성
				pozolkey = new Date().getTime() + Math.random();
				pozolkeys.push(pozolkey);

                // 포졸 오브젝트 배치
				Map.putObjectWithKey(rand_X, 0, pozol, {
					overlap: true,
					movespeed: 80 + _level * 10,
					key: pozolkey,
				});

				// 포졸 오브젝트를 플레이어를 향해 이동
				Map.moveObjectWithKey(pozolkey, player.tileX, player.tileY, true);
                
			}
		case STATE_END:
			break;
	}
});