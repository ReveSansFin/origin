#pragma strict
import UnityEngine.EventSystems;
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
* variable qui gere l'etat de la musique
* @access private
* @var boolean
*/
private var jouer: boolean;

/*
* L'image du bouton à changer dynamiquement
* @access private
* @var Image
*/
private var imageBouton: Image;

/*
* Texture du bouton on
* @access private
* @var Texture
*/
public var textureBoutonOn: Sprite;

/*
* Texture du bouton off
* @access private
* @var Texture
*/
public var textureBoutonOff: Sprite;


function Start () {
    imageBouton = GetComponent.<Image>();
    imageBouton.sprite = textureBoutonOn;
	sourceSon = GetComponent.<AudioSource>();
	jouer = true;
}

function OnClick(){

	if (jouer) {
        EventSystem.current.SetSelectedGameObject(null, null);//Déselectionne le bouton cliqué.
		sourceSon.Stop();
        imageBouton.sprite = textureBoutonOff;
		jouer = false;

	}
    else {
        EventSystem.current.SetSelectedGameObject(null, null);//Déselectionne le bouton cliqué.
		sourceSon.Play();
        imageBouton.sprite = textureBoutonOn;
		jouer = true;
	}
}