#pragma strict

static var Bar_pos_x : float;
static var Bar_pos_z : float;
var v : float = 0.25;

function Update () {
  
  if(Ball.level == 1){
    if(Input.GetKey("right") && transform.position.x <= 12.5)
      transform.position.x += v;
    else if(Input.GetKey("left") && transform.position.x >= -12.5)
      transform.position.x -= v;
  }
  else if(Ball.level == 2){
    if(Input.GetKey("right") && transform.position.z >= -35.5)
      transform.position.z -= v;
    else if(Input.GetKey("left") && transform.position.z <= -10.5)
      transform.position.z += v;
  }
  else if(Ball.level == 3){
    if(Input.GetKey("right") && transform.position.x >= -12.5)
      transform.position.x -= v;
    else if(Input.GetKey("left") && transform.position.x <= 12.5)
      transform.position.x += v;
  }
  else if(Ball.level == 4){
    if(Input.GetKey("right") && transform.position.z <= -10.5)
      transform.position.z += v;
    else if(Input.GetKey("left") && transform.position.z >= -35.5)
      transform.position.z -= v;
  }

  if(Ball.cnt == 10 && Ball.level == 1){
    transform.position.x = 23; transform.position.y = -8; transform.position.z = -23;
    transform.eulerAngles.y = 90;
  }
  else if(Ball.cnt == 10 + 14 && Ball.level == 2){
    transform.position.x = 0; transform.position.y = -8; transform.position.z = -45;
    transform.eulerAngles.y = 0;
  }
  else if(Ball.cnt == 10 + 14 + 36 && Ball.level == 3){
    transform.position.x = -23; transform.position.y = -8; transform.position.z = -23;
    transform.eulerAngles.y = 90;
  }

  Bar_pos_x = transform.position.x;
  Bar_pos_z = transform.position.z;

}