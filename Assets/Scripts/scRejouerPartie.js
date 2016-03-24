#pragma strict

/**
 * Dev Jeu
 * Permet de rejouer au jeu
 * @author stéphane Leclerc
 * @author Jonathan Martel
 * @date 2016-01-29
 * 
 */


function Start () {

}

function Update () {

}

//::::::::::::::::::::function pour rejouer une partie après le game over:::::::::::::://

function rejouerUnePartie()
{
    SceneManager.LoadScene("choixPerso");
}

//::::::::::::::::::::function pour retourné au menu:::::::::::::://

function retournerMenu()
{
    SceneManager.LoadScene("menu");
}

//Pour quitter le jeu
function quitterJeu()
{
    PlayerPrefs.SetInt("partieSauvegardee", 0);//Reset valeur à false.
    Application.Quit();
}
