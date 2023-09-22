let elementTitre = document.getElementById("titreJohanVadenne");
let contenantElementsLien = document.getElementById("contenantLien");
let johan = document.getElementById("johan");
let menuJohan = document.getElementsByClassName("menuJohan");
let elementsLien = document.querySelectorAll(".lien");
let lettresTitre = document.getElementsByClassName("lettre");
let points = document.getElementsByClassName("point");
const point1 = document.getElementById("point1")
const point2 = document.getElementById("point2")
const etude_entreprise1 = document.getElementById("etude_entreprise1")
const etude_entreprise2 = document.getElementById("etude_entreprise2")
const projet1 = document.getElementById("projet1")
const projet2 = document.getElementById("projet2")
const veille1 = document.getElementById("veille1")
const veille2 = document.getElementById("veille2")
const cv1 = document.getElementById("cv1")
const cv2 = document.getElementById("cv2")

function texteMenu() {
    endurscorClignotement(function() { ecritureMenu() });
}

function endurscorClignotement(callBack = "") {

    let indClignotement = 0;
    let visible = true;
    let texte = elementTitre.innerHTML;

    let interval = setInterval(function() {
        if (visible) {
            elementTitre.innerHTML = texte + "<a id=\"undurscore\">_</a>"
            visible = !visible;
        } else {
            elementTitre.innerHTML = texte
            visible = !visible;
        }

        indClignotement++;
        if (indClignotement >= 6) {
            clearInterval(interval);
            try {
                callBack();
            } catch (error) {

            }
        }
    }, 300)
}

function ecritureMenu() {

    const titre = " Johan Vadenne ";
    let titre2 = "";
    let texte = "";
    let ind = 0;
    let maxInd = titre.length - 1;
    let titreAfficher = "";
    let titreEnCours = "";
    let undurscors = "<a id=\"undurscore\">_</a>";

    titreAfficher = undurscors;
    elementTitre.innerHTML = titreAfficher

    let interval = setInterval(function() {

        texte = "<a href=\"#\" class=\"lettre\" id=\"" + titre[ind] + "\">" + titre[ind] + "</a>";
        titreEnCours += texte;
        if (ind > 0 && ind < titre.length - 1) {
            titre2 += texte;
        }
        titreAfficher = titreEnCours + undurscors;
        elementTitre.innerHTML = titreAfficher;

        ind++;
        if (ind > maxInd) {
            clearInterval(interval);
            elementTitre.innerHTML = titre2;
            contenantElementsLien.style.transition = "opacity 0.3s";
            contenantElementsLien.style.visibility = "visible";
            contenantElementsLien.style.top = contenantElementsLien.offsetTop + "px";
            let interval2 = setInterval(function() {
                contenantElementsLien.style.opacity = 1;
                clearInterval(interval2);
            }, 500)
        }

    }, 100)
}

for (let elementLien of elementsLien) {

    elementLien.addEventListener("click", function() {
        for (let elementmenuJohan of menuJohan) {
            let interval = setInterval(function() {
                elementmenuJohan.style.opacity = 0;
                clearInterval(interval);
            }, 100)
        }
    });

    elementLien.addEventListener("mouseover", function() {
        console.log(elementLien.id)

        switch (elementLien.id) {
            case "qui_je_suis":
                pointDInterrogation(true);
                break;

            case "etude_Entreprise":
                afficheEtude(true);
                break;

            case "projet":
                afficheProjet(true);
                break;

            case "veille":
                afficheVeille(true);
                break;

            case "cv":
                afficheCv(true);
                break;
        
            default:
                break;
        }
    });

    elementLien.addEventListener("mouseout", function() {
        console.log(elementLien.id)
        switch (elementLien.id) {
            case "qui_je_suis":
                pointDInterrogation(false);
                break;

            case "etude_Entreprise":
                afficheEtude(false);
                break;

            case "projet":
                afficheProjet(false);
                break;

            case "veille":
                afficheVeille(false);
                break;

            case "cv":
                afficheCv(false);
                break;
        
            default:
                break;
        }

    });
}

function pointDInterrogation(afficher) {

    if (afficher) {
        point1.style.left = "0"
        point2.style.right = "0"
        point1.style.rotate = "25deg"
        point2.style.rotate = "-25deg"
    } else {
        point1.style.left = "-15%"
        point2.style.right = "-15%"
        point1.style.rotate = "0deg"
        point2.style.rotate = "0deg"
    }
}

function afficheEtude(afficher) {
    console.log("j  ")
    if (afficher) {
        etude_entreprise1.style.left = "0"
        etude_entreprise2.style.right = "0"
        etude_entreprise1.style.rotate = "25deg"
        etude_entreprise2.style.rotate = "-25deg"
    } else {
        etude_entreprise1.style.left = "-15%"
        etude_entreprise2.style.right = "-15%"
        etude_entreprise1.style.rotate = "0deg"
        etude_entreprise2.style.rotate = "0deg"
    }
}

function afficheProjet(afficher) {
    console.log("j  ")
    if (afficher) {
        projet1.style.left = "0"
        projet2.style.right = "0"
        projet1.style.rotate = "25deg"
        projet2.style.rotate = "-25deg"
    } else {
        projet1.style.left = "-15%"
        projet2.style.right = "-15%"
        projet1.style.rotate = "0deg"
        projet2.style.rotate = "0deg"
    }
}

function afficheVeille(afficher) {
    console.log("j  ")
    if (afficher) {
        veille1.style.left = "0"
        veille2.style.right = "0"
        veille1.style.rotate = "25deg"
        veille2.style.rotate = "-25deg"
    } else {
        veille1.style.left = "-15%"
        veille2.style.right = "-15%"
        veille1.style.rotate = "0deg"
        veille2.style.rotate = "0deg"
    }
}

function afficheCv(afficher) {
    console.log("j  ")
    if (afficher) {
        cv1.style.left = "0"
        cv2.style.right = "0"
        cv1.style.rotate = "25deg"
        cv2.style.rotate = "-25deg"
    } else {
        cv1.style.left = "-15%"
        cv2.style.right = "-15%"
        cv1.style.rotate = "0deg"
        cv2.style.rotate = "0deg"
    }
}

// FR: donne un entier aléatoire de 0 au nombre envoyé en paramètre
// EN: gives a random integer from 0 to the number sent as a parameter
function entierAleatoire(max) {
    return Math.floor(Math.random() * (max + 1));
}

texteMenu();