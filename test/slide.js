var num = 1;

function changePic(idx) {
    if (idx) {
        if (num == 6) return;
        num++;
    }
    else {
        if (num == 1) return;
        num--;
    }
    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "dialog/dialog" + num + ".png");
    console.log("zclick");
}