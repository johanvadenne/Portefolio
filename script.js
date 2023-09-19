let elementTitre = document.getElementById("titreJohanVadenne");
let contenantElementsLien = document.getElementById("contenantLien");
let menuJohan = document.getElementsByClassName("menuJohan");
let elementsLien = document.querySelectorAll(".lien");

const elementAccueil = [
    { id: "qui_je_suis", color: "linear-gradient(135deg, rgb(49, 21, 177), rgb(188, 55, 206))" },
    { id: "etude_Entreprise", color: "linear-gradient(135deg, rgb(49, 21, 177), rgb(188, 55, 206))" },
    { id: "projet", color: "linear-gradient(135deg, rgb(49, 21, 177), rgb(188, 55, 206))" },
    { id: "veille", color: "linear-gradient(135deg, rgb(49, 21, 177), rgb(188, 55, 206))" },
    { id: "cv", color: "linear-gradient(135deg, rgb(49, 21, 177), rgb(188, 55, 206))" },
];

function texteMenu() {
    endurscorClignotement(function() { ecritureMenu() });
}

function endurscorClignotement(callBack = "") {

    let indClignotement = 0;
    let visible = true;
    let texte = elementTitre.innerHTML;

    let interval = setInterval(function() {
        if (visible) {
            elementTitre.innerHTML = texte + "_"
            visible = !visible;
        } else {
            elementTitre.innerHTML = texte + " "
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
        titreAfficher = titreEnCours + "_";
        elementTitre.innerHTML = titreAfficher;

        ind++;
        if (ind > maxInd) {
            clearInterval(interval);
            elementTitre.innerHTML = titre;
            contenantElementsLien.style.transition = "opacity 0.3s";
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
            elementmenuJohan.style.opacity = 0;
        }
    });

    elementLien.addEventListener("mouseover", function() {
        let elementSurvoler = elementLien.id;
        elementmenuJohan.style.background = elementAccueil[1].color;
    });
}

texteMenu();