#pragma strict
import UnityEngine.UI;
// permet d'importer les éléments du UI canvas jeu

/**
* Script de gestion des messages du tutoriel
* Mise à jour Messages UI
* @author Stéphane Leclerc
* @date 2016-01-16
*/

/*
* GameObject contient les panneaux avec le texte pour l'informations du jeu pour chaque éléments.
*@acces public
* var GameObject
*/
public var messageHeros:GameObject;
public var messageBonbon:GameObject;
public var messagePotionSort:GameObject;
public var messageOgre:GameObject;
public var messageFeeVolante:GameObject;
public var messageDiable:GameObject;
public var messageFantome:GameObject;
public var messageLutin:GameObject;
public var messagePotionReveille:GameObject;

/**
*Le script de gestion du jeu
*@var scGestionJeu
*@access private
**/
 private var scriptGestionJeu: scGestionJeu;

function Start() {
    scriptGestionJeu = GameObject.FindWithTag("heros").GetComponent.<scGestionJeu>();
    scriptGestionJeu.setEtatPause(true);
    if (SceneManager.GetActiveScene().name == "tutoriel") {
        var heros:GameObject = GameObject.FindWithTag("heros");
        var scriptDetectionTuto = heros.GetComponent.<scDetectionTuto>();
        scriptDetectionTuto.enabled = true;
    }
}

 /* function qui permet de fermer le panneau d'information en un clic sur le X*/

 function fermerInformationHeros()
{
	messageHeros.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}
function fermerInformationBonbon()
{
	messageBonbon.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}

function fermerInformationPotionSort()
{
	messagePotionSort.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}

function fermerInformationOgre()
{
	messageOgre.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}

function fermerInformationFeeVolante()
{
	messageFeeVolante.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}

function fermerInformationDiable()
{
	messageDiable.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}

function fermerInformationFantome()
{
	messageFantome.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}

function fermerInformationLutin()
{
	messageLutin.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}

function fermerInformationPotionReveille()
{
	messagePotionReveille.SetActive(false);
	scriptGestionJeu.setEtatPause(false);
}
/* FiN function qui permet de fermer le panneau d'information en un clic sur le X*/
