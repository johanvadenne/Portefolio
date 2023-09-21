let elementTitre = document.getElementById("titreJohanVadenne");
let contenantElementsLien = document.getElementById("contenantLien");
let johan = document.getElementById("johan");
let menuJohan = document.getElementsByClassName("menuJohan");
let elementsLien = document.querySelectorAll(".lien");
let points = document.getElementsByClassName("point");

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

    const titre = " Johan Vadenne ";
    const titre2 = "Johan Vadenne";
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
            elementTitre.innerHTML = titre2;
            contenantElementsLien.style.transition = "opacity 0.3s";
            contenantElementsLien.style.visibility = "visible";
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
        
        if ("qui_je_suis" == elementLien.id) {
            let x = 0;
            for (let point in points) {
                x += 100;
                let interval = setInterval(function() {
                    points[point].style.top = "-10px"; // Utilisez points[point] pour accéder à chaque élément
                    clearInterval(interval);
                }, x);
            }
        }
    });
}

texteMenu();