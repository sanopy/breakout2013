#pragma strict

var style : GUIStyle;

function OnGUI(){
  GUI.Label(Rect(Screen.width / 2 - 100, Screen.height / 2, 200, 50), "Space To Start", style);
}

function Update(){
  if(Input.GetKey("space"))
    Application.LoadLevel("main");
}