// init
const titreJohanVadenne = document.getElementById("titre_johan_vadenne")
const contenantElementsLien = document.getElementById("contenant_lien_accueille");
const sectionMenu = document.getElementById("menu_johan");
let elementsLien = document.querySelectorAll(".lien");
const tempsCliglotementEndurscor = 500;
const endurscor = "<a>_</a>";
const titreAccueille = "Johan Vadenne";

function endurscorClignoter(elementTexte, nbrClignotemment, fonction = "") {
    const elementTexteSansEndurscor = elementTexte.innerHTML;
    let endurscorVisible = true;
    let indClignotement = 0;
    nbrClignotemment*=2;

    let interval = setInterval(function() {
        if (endurscorVisible) {
            elementTexte.innerHTML = elementTexteSansEndurscor + endurscor;
            endurscorVisible = !endurscorVisible;
        } else {
            elementTexte.innerHTML = elementTexteSansEndurscor;
            endurscorVisible = !endurscorVisible;
        }

        indClignotement++;
        if (indClignotement >= nbrClignotemment) {
            clearInterval(interval);
            fonction();
        }
    }, 300)
}

function ecritureTexte(elementTexte, texteAEcrire) {
    const balise = "a"
    let premierCharactere = true;
    let texteFinale = "";
    let texte = "";
    let indTexte = 0;
    let maxInd = texteAEcrire.length - 1;
    let titreAfficher = "";
    let titreEnCours = "";
    let undurscors = "_";

    let interval = setInterval(function() {

        if (premierCharactere) {
            elementTexte.innerHTML = elementTexte.innerHTML + `<${balise}> </${balise}>` + endurscor;
            premierCharactere = false;
        }
        else {
            texte = `<${balise}>${texteAEcrire[indTexte]}</${balise}>`;
            texteFinale += texte;
            elementTexte.innerHTML = " " + texteFinale + endurscor;
            indTexte++;

            if (indTexte > maxInd) {
                clearInterval(interval);
                elementTexte.innerHTML = texteFinale;
                contenantElementsLien.style.transition = "opacity 0.3s";
                contenantElementsLien.style.visibility = "visible";
                let interval2 = setInterval(function() {
                    contenantElementsLien.style.opacity = 1;
                    clearInterval(interval2);
                }, 500)
            }
        }
    }, 100)
}

function ecouteur() {
    for (let lien of elementsLien) {

        lien.addEventListener("click", function() {

            for (let i = 0; i < sectionMenu.childNodes.length; i++) {
                const enfantMenu = sectionMenu.childNodes[i];
            
                if (enfantMenu.nodeType === 1) {
                    enfantMenu.style.opacity = 0;
                }
            }
            
        });

        lien.addEventListener("mouseover", function() {
            
            const imageGauche = document.getElementById(lien.id + "1");
            const imagedroite = document.getElementById(lien.id + "2");
            
            imageGauche.style.left = "0"
            imagedroite.style.right = "0"
            imageGauche.style.rotate = "25deg"
            imagedroite.style.rotate = "-25deg"
            
        });

        lien.addEventListener("mouseout", function() {
            
            const imageGauche = document.getElementById(lien.id + "1");
            const imagedroite = document.getElementById(lien.id + "2");
            
            imageGauche.style.left = "-15%"
            imagedroite.style.right = "-15%"
            imageGauche.style.rotate = "0deg"
            imagedroite.style.rotate = "0deg"
            
        });

    }
}

endurscorClignoter(titreJohanVadenne, 4, function() { ecritureTexte(titreJohanVadenne, titreAccueille) });
ecouteur();