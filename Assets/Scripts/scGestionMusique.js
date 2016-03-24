#pragma strict

/**
* Script de gestion musique ouvert/ferme
* @author Cristina Mahneke
* @date 06/03/2016
*/

/*
* composant de la source d'audio
* @access private
* @var AudioSource
*/
private var sourceSon: AudioSource;

/*
* la musique du niveau 1
* @access public
* @var AudioClip
*/
public var musiqueNiveau1: AudioClip;

/*
* la musique du niveau 2
* @access public
* @var AudioClip
*/
public var musiqueNiveau2: AudioClip;

/*
* la musique des niveaux bosses
* @access public
* @var AudioClip
*/
public var musiqueBoss: AudioClip;

function Awake() {
    
    sourceSon = GetComponent.<AudioSource>();
    sourceSon.loop = true;
}

function choisirMusique(nomScene:String) {

	switch(nomScene.ToLower()){

		case "tutoriel":
			sourceSon.clip = musiqueNiveau1;
			sourceSon.Play();
		  break;
		case "niveau1":
			sourceSon.clip = musiqueNiveau1;
			sourceSon.Play();
		  break;
		case "niveau2":
			sourceSon.clip = musiqueNiveau2;
			sourceSon.Play();
		  break;
		case "boss1":
			sourceSon.clip = musiqueBoss;
			sourceSon.Play();
		  break;
		case "boss2":
			sourceSon.clip = musiqueBoss;
			sourceSon.Play();
		  break;
	}
}

function OnLevelWasLoaded() {
    choisirMusique(SceneManager.GetActiveScene().name);
}