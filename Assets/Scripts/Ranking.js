#pragma strict

static var SIZE : int = 10000;
var names : String[] = new String[SIZE];
var num   : int[] = new int[SIZE];
var leng  : int = 1;
var str   : String = "Guest";

function saveRanking() {
  var m1 : int = Ball.score;
  var m2 : int;
  var s1 : String = str;
  var s2 : String;
  for(var i = 0;i < SIZE && i < leng; i++){
    if(num[i] < Ball.score){
      m2 = num[i]; num[i] = m1; m1 = m2;
      s2 = names[i]; names[i] = s1; s1 = s2;
    }
    PlayerPrefs.SetInt("num" + i, num[i]);
    PlayerPrefs.SetString("names" + i, names[i]);
  }
}

function Start () {

  for(var i = 0;i < SIZE && PlayerPrefs.GetInt("num" + i); i++){
    names[i] = PlayerPrefs.GetString("names" + i);
    num[i] = PlayerPrefs.GetInt("num" + i);
    leng++;
  }

}

function OnGUI () {
  GUILayout.BeginArea(new Rect(0, 0, Screen.width, Screen.height));
  GUILayout.FlexibleSpace();
  GUILayout.BeginHorizontal();
  GUILayout.FlexibleSpace();
  GUILayout.BeginVertical();
  
  GUILayout.Label("あなたの名前(ニックネーム)を入力してください");
  GUILayout.Label("   ※15文字以内");
  str = GUILayout.TextField(str, 15);

  if(GUILayout.Button("上記の名前でスコアを送信する")){
    saveRanking();
    Application.LoadLevel("Result");
  } else if(GUILayout.Button("スコアを送信しない")) {
    Application.LoadLevel("Result");
  }

  GUILayout.EndVertical();
  GUILayout.FlexibleSpace();
  GUILayout.EndHorizontal();
  GUILayout.FlexibleSpace();
  GUILayout.EndArea();
}

function Update () {

}