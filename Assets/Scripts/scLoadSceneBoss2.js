#pragma strict
/**
* Script pour demarrer le fin de niveau/scene boss2 
* @author Cristina Mahneke
* @date 15/02/2016
**/
function Start () {

}

function OnTriggerEnter(other:Collider){
		if(other.gameObject.tag == "heros"){
//			Debug.Log(other.gameObject.tag == "heros");
			SceneManager.LoadScene("Boss2");
		}


	}