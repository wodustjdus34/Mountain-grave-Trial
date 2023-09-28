//let postion = "middle";
  let width = 900;
  let height = 580;
  App.onJoinPlayer.Add(function (player) {
  //UI가 노출될 위치(정렬, 가로, 세로) 값을 변수로 사전에 제작
  

  // my.html로 state라는 태그를 만들어 hello라는 값을 전달
  let _widget = App.showWidget('my.html', "middle", width, height);
});

//TryInvokeInternal():233 - Jint.Runtime.JavaScriptException: position is not defined at :9:3
//모든 플레이어에게 지정된 align의 위치에 해당 html파일을 위젯으로 불러오기
//App.showWidget(fileName: string, align: string, width: number, height: number): ScriptWidget