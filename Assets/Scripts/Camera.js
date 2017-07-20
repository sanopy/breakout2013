#pragma strict

var f1 : boolean;
var f2 : boolean;

function Start () {
  f1 = true;
  f2 = true;
}

function Update () {

  /* level 1 -> level 2 */
  if(Ball.level == 1 && Ball.cnt == 10 && transform.eulerAngles.y < 90.0)
    transform.eulerAngles.y += 0.5;
  else if(Ball.level == 1 && transform.eulerAngles.y >= 90.0){
    Ball.level = 2; Ball.f2 = true; transform.eulerAngles.y = 90.0;
  }

  /* level 2 -> level 3 */
  else if(Ball.level == 2 && Ball.cnt == 10 + 14 && transform.eulerAngles.y < 180.0)
    transform.eulerAngles.y += 0.5;
  else if(Ball.level == 2 && transform.eulerAngles.y >= 180.0){
    transform.eulerAngles.y = 180.0; transform.eulerAngles.x = 310;
  }

  if(Ball.level == 2 && transform.eulerAngles.y >= 180.0 && transform.position.y > -30)
    transform.position.y -= 0.5;
  else if(Ball.level == 2 && transform.eulerAngles.y >= 180.0 && transform.position.y <= -30)
    transform.position.y = -30;

  if(Ball.level == 2 && transform.eulerAngles.y >= 180.0 && transform.position.z > -35)
    transform.position.z -= 0.5;
  else if(Ball.level == 2 && transform.eulerAngles.y >= 180.0 && transform.position.z <= -35){
    Ball.level = 3; Ball.f2 = true; transform.position.z = -35;
  }

  /* level 3 -> level 4 */
  if(Ball.cnt == 10 + 14 + 36 && f1){
    transform.eulerAngles.x = 0; transform.position.y = 0; transform.position.z = -23;  transform.eulerAngles.x = 180.0; f1 = false;
  }
  if(Ball.level == 3 && Ball.cnt == 10 + 14 + 36 && transform.eulerAngles.y < 270.0)
    transform.eulerAngles.y += 0.5;
  else if(Ball.level == 3 && Ball.cnt == 10 + 14 + 36 && transform.eulerAngles.y >= 270.0 && f2){
    transform.eulerAngles.y = 270.0; f2 = false; Ball.f2 = true; Ball.level = 4;
  }
//  if(Ball.level == 3 && Ball.cnt == 10 + 14 + 36 && transform.eulerAngles.x < 180.0)
//    transform.eulerAngles.x += 0.5;
//  else if(Ball.level == 3 && Ball.cnt == 10 + 14 + 36 && transform.eulerAngles.x >= 180.0){
//    Ball.level = 4; Ball.f2 = true; transform.eulerAngles.x = 180.0;
//  }

}