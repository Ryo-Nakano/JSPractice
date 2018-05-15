//windowオブジェクトのonloadコンポーネントに関数をぶち込んでいる
window.onload = function () {//window(画面)を読み込んだ時functionを呼び出す。
  console.log("onload");


  //=====マウスの位置座標をviewに表示する為のコード=====
  var element = document.getElementById("box"); //htmlファイルの中でidがboxのやつを取って来て、変数elementに格納！
  var el_value = document.getElementsByClassName("value"); //htmlファイルの中でclassがvalueのやつとってきて変数el_valueに格納！

  element.onmousemove = function(event){ //elementでmousemoveを感知した時function(event)を呼び出す。
    // 引数eventにマウスの位置とか、そういう情報が入っているのかな！
    console.dir(event);//変数eventの中身を表示！

    //座標を取得する
    var mX = event.offsetX;  //X座標(左から)を取得する。
    var mY = event.offsetY;  //Y座標(上から)を取得する。

    //viewに表示
    el_value[0].innerHTML = mX;//取得したel_valueの1個目にmXの値を代入
    el_value[1].innerHTML = mY;//取得したel_valueの2個目にmYの値を代入
  }

}
