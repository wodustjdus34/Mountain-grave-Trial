let _widget = null;

App.onJoinPlayer.Add(function (player) {
  // my.html로 state라는 태그를 만들어 hello라는 값을 전달
    let _widget = App.showWidget('my.html', "top", 900, 800);
  p._widget = App.showWidget('my.html', "top", 900, 800);
  p.tag.widget = p.showWidget("widget.html", "sidebar", 350, 350);

});

//TryInvokeInternal():233 - Jint.Runtime.JavaScriptException: Cannot read property 'widget' of null at :6:14
//TryInvokeInternal():233 - Jint.Runtime.JavaScriptException: p is not defined at :6:3