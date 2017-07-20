#pragma strict

var style:GUIStyle;

function OnGUI(){
  GUI.Label(Rect(Screen.width / 2 - 70, Screen.height / 2 - 50, 200, 50), "GameOver", style);

  GUILayout.BeginArea(new Rect(0, 0, Screen.width, Screen.height));
  GUILayout.FlexibleSpace();
  GUILayout.BeginHorizontal();
  GUILayout.FlexibleSpace();

  if(Input.GetKey("space") || GUILayout.Button("次へ"))
    Application.LoadLevel("Ranking");

  GUILayout.FlexibleSpace();
  GUILayout.EndHorizontal();
  GUILayout.FlexibleSpace();
  GUILayout.EndArea();
}

function Update(){
  if(Input.GetKey("space"))
    Application.LoadLevel("ranking");
}
