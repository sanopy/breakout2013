#pragma strict

static var score : int;
static var cnt   : int;
static var level : int;
static var f2    : boolean = true;
var life  : int;
var f1    : boolean = true;
var style : GUIStyle;
var FirstForce : Vector3 = Vector3(600, 600, 600);

function Start () {
  score = 0;
  cnt   = 0;
  life  = 2;
  level = 1;
}

function OnCollisionEnter(col : Collision){
  if(col.gameObject.tag == "Block"){
    Destroy(col.gameObject);
    cnt++;
    score += 10;    
  }
  else if(col.gameObject.tag == "Bar"){
    if(level == 1 || level == 3)
      gameObject.GetComponent(Rigidbody).AddForce(300 * (transform.position.x - col.transform.position.x), 100, 0);
    else
      gameObject.GetComponent(Rigidbody).AddForce(300 * (transform.position.z - col.transform.position.z), 100, 0);
  }
  if(col.gameObject.tag != "Bar")
    gameObject.GetComponent(Rigidbody).velocity = gameObject.GetComponent(Rigidbody).velocity.normalized * 10;

  if(Mathf.Abs(gameObject.GetComponent(Rigidbody).velocity.y) < 1 && col.gameObject.tag != "Bar")
    gameObject.GetComponent(Rigidbody).velocity.y *= 3;
  if(Mathf.Abs(gameObject.GetComponent(Rigidbody).velocity.z) < 1 && col.gameObject.tag != "Bar")
    gameObject.GetComponent(Rigidbody).velocity.z *= 3;
  if(Mathf.Abs(gameObject.GetComponent(Rigidbody).velocity.y) < 0.3 && col.gameObject.tag != "Bar")
    gameObject.GetComponent(Rigidbody).velocity.y -= 1;
  if(Mathf.Abs(gameObject.GetComponent(Rigidbody).velocity.z) < 0.3 && col.gameObject.tag != "Bar")
    gameObject.GetComponent(Rigidbody).velocity.z += 1;

  
  /* level 1 -> level 2 */
  if(cnt == 10 && level == 1){
    gameObject.GetComponent(Rigidbody).velocity = Vector3(0, 0, 0);
    transform.position.x = 23; transform.position.y = -6.9; transform.position.z = -23;
    gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.None;
    transform.gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.FreezePositionX;
    // gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.FreezePositionX;
    f1 = true; f2 = false;
  }
  /* level 2 -> level 3 */
  else if(cnt == 10 + 14 && level == 2){
    gameObject.GetComponent(Rigidbody).velocity = Vector3(0, 0, 0);
    transform.position.x = 0; transform.position.y = -6.9; transform.position.z = -45;
    gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.None;
    transform.gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.FreezePositionZ;
    f1 = true; f2 = false;
  }
  /* level 3 -> level 4 */
  else if(cnt == 10 + 14 + 36 && level == 3){
    gameObject.GetComponent(Rigidbody).velocity = Vector3(0, 0, 0);
    transform.position.x = -23; transform.position.y = -6.9; transform.position.z = -23;
    gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.None;
    transform.gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.FreezePositionX;
    // gameObject.GetComponent(Rigidbody).constraints = RigidbodyConstraints.FreezePositionX;

    f1 = true; f2 = false;
  }
  /* Clear */
  else if(cnt >= 10 + 14 + 36 + 36)
    Application.LoadLevel("Clear");

}

function Update () {

  if(Input.GetKey("space") && f1 && f2){
    gameObject.GetComponent(Rigidbody).AddForce(FirstForce);
    f1 = false;
  } else if(f1 && f2) {
    transform.position.x = Bar.Bar_pos_x;
    transform.position.z = Bar.Bar_pos_z;
  }

  if(gameObject.GetComponent(Rigidbody).transform.position.y < -12.5){
    life--; f1 = true;
    if(life < 0)
      Application.LoadLevel("Gameover");
    transform.position.y = -6.9; transform.position.x = 0;
    gameObject.GetComponent(Rigidbody).velocity = Vector3(0, 0, 0);
  }

}

function OnGUI () {
  var s1 = "Your Life : " + life;
  GUI.Label(Rect(0, 0, 200, 50), s1, style);
  var s2 = "Your score : " + score;
  GUI.Label(Rect(Screen.width - 250, 0, 200, 50), s2, style);
  var s3 = "Level " + level;
  GUI.Label(Rect(0, Screen.height - 30, 200, 50), s3, style);
}
