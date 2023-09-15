let elementTitre = document.getElementById("titreJohanVadenne");
let elementsLien = document.getElementById("contenantLien");

function texteMenu() {
    endurscorClignotement(function() {ecritureMenu()});
}

function endurscorClignotement(callBack = "") {
    
    let indClignotement = 0;
    let visible = true;
    let texte = elementTitre.innerHTML;

    let interval = setInterval(function() {
        if (visible) {
            elementTitre.innerHTML = texte+"_"
            visible = !visible;
        }
        else {
            elementTitre.innerHTML = texte+" "
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
    
    const titre = "Johan Vadenne ";
    let ind = 0;
    let maxInd = titre.length - 1;
    let titreAfficher = "";
    let titreEnCours = "";

    titreAfficher = "_";
    elementTitre.innerHTML = titreAfficher
    
    let interval = setInterval(function() {

        titreEnCours += titre[ind]
        titreAfficher = titreEnCours+"_";
        elementTitre.innerHTML = titreAfficher;

        ind++;
        if (ind > maxInd) {
            clearInterval(interval);
            elementTitre.innerHTML = titre;
            elementsLien.style.transition = "opacity 0.3s";
            let interval2 = setInterval(function() {
                elementsLien.style.opacity = 1;
                clearInterval(interval2);
            }, 500)
        }

    }, 100)
}

texteMenu();
