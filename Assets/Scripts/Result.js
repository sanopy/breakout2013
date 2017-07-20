#pragma strict

var pos     : Vector2;
var results : String;
var names   : String;
var num     : String;
var leng    : int = 0;

function Start () {

  results = names = num = "";

  for(var i = 0;i < Ranking.SIZE && PlayerPrefs.GetInt("num" + i); i++){
    if(i + 1 < 10)
      results = results + "   " + (i + 1) + " 位" + "\n";
    else if(i + 1 < 100)
      results = results + "  " + (i + 1) + "位" + "\n";
    else if(i + 1 < 1000)
      results = results + " " + (i + 1) + "位" + "\n";
    else
      results = results + (i + 1) + "位" + "\n";
    names = names + PlayerPrefs.GetString("names" + i) + "\n";
    num   = num + PlayerPrefs.GetInt("num" + i) + "\n";
    leng++;
  }

}

function OnGUI () {
  var w = Screen.width;
  var h = Screen.height;

  GUI.Label(Rect(w / 2 - 250, h / 2 - 120, 200, 50), "上位" + leng + "名のスコア");

  pos = GUI.BeginScrollView(Rect(w / 2 - 250, h / 2 - 100, w / 2 + 250, h / 2 + 100), pos, Rect(0, 0, 500, 10000));

  GUI.Label(Rect(  0, 0, 100, 10000), results);
  GUI.Label(Rect(100, 0, 300, 10000), names);
  GUI.Label(Rect(370, 0, 100, 10000), num);

  GUI.EndScrollView();
  
  GUILayout.BeginArea(new Rect(w - 300, h - 50, 200, 50));

  if(GUILayout.Button("終了") || Input.GetKey("space"))
    Application.LoadLevel("Welcome");

  GUILayout.EndArea();
}

function Update () {

}
