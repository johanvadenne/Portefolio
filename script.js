// init
const titreJohanVadenne = document.getElementById("titre_johan_vadenne")
const imagesDroite = document.getElementById("image_droite")
const imageGauches = document.getElementById("image_gauche")
const pageQuiJeSuis = document.getElementById("page_qui_je_suis")
const contenantElementsLien = document.getElementById("contenant_lien_accueille");
const menuJohan = document.getElementsByClassName("accueille");
const elementsLien = document.querySelectorAll(".lien");
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
            
            const imageGauche = document.getElementById(lien.id + "1");
            const imagedroite = document.getElementById(lien.id + "2");
            
            imageGauche.style.top = "-35%"
            imagedroite.style.top = "-35%"
            imageGauche.style.rotate = "260deg"
            imagedroite.style.rotate = "-260deg"

            for (element of menuJohan) {
                element.style.opacity = 0;
            }

            let interval = setInterval(function() {
                imagesDroite.style.visibility = "hidden";
                imageGauches.style.visibility = "hidden";
                pageQuiJeSuis.style.opacity = 1;
                pageQuiJeSuis.style.zIndex = 1;
                clearInterval(interval);
            }, 500)
            
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