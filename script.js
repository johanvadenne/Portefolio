// init
const titreJohanVadenne = document.getElementById("titre_johan_vadenne")
const imagesDroite = document.getElementById("image_droite")
const imageGauches = document.getElementById("image_gauche")
const pageQuiJeSuis = document.getElementById("page_qui_je_suis")
const texteQuiJeSuis = document.getElementById("texte_qui_je_suis")
const contenantElementsLien = document.getElementById("contenant_lien_accueille");
const menuJohan = document.getElementsByClassName("accueille");
const switch_ = document.getElementById("switch");
const elementsLien = document.querySelectorAll(".lien");
const tempsCliglotementEndurscor = 500;
const endurscor = "<a>_</a>";
const titreAccueille = "Johan Vadenne";
const texteAEcrireQuiJeSuis =
`Bonjour👋, je m'appelle Johan.\n
Je suis un véritable passionné d'informatique, que ce soit la programmation, le web, les logiciels, ou encore la cybersécurité... 
Je suis toujours avide de nouvelles connaissances et de découvertes !\n

J'ai obtenu un BAC PRO SN (Systèmes Numériques) et je suis actuellement en BTS SIO (Services Informatiques aux Organisations) 
avec l'option SLAM (Solutions Logicielles et Applications Métiers). Je travaille constamment sur des projets personnels, 
qu'il s'agisse de créer des logiciels, des jeux vidéo, ou même d'explorer des défis tels que la création de ma propre IA ou mon propre langage informatique.\n

En résumé, si je devais me décrire en trois mots, je dirais : passionné, ambitieux et persévérant. 
Actuellement, je réalise des recherches pour orienter ma carrière vers la cybersécurité, en mettant l'accent sur la programmation.`

function endurscorClignoter(elementTexte, nbrClignotemment, fonction = "") {
    const elementTexteSansEndurscor = elementTexte.innerHTML;
    let endurscorVisible = true;
    let indClignotement = 0;
    nbrClignotemment *= 2;

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

function ecritureTexteMenu(elementTexte, texteAEcrire) {
    if (switch_.checked == true) {
        elementTexte.innerHTML = texteAEcrire;
        contenantElementsLien.style.transition = "opacity 0.3s";
        contenantElementsLien.style.visibility = "visible";
        let interval2 = setInterval(function() {
            contenantElementsLien.style.opacity = 1;
            clearInterval(interval2);
        }, 500)
        return;
    }

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
        } else {
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

function ecritureTexteQuiJeSuis(elementTexte, texteAEcrire) {
    if (switch_.checked == true) {
        elementTexte.innerHTML = texteAEcrireQuiJeSuis.replace(/\n/g, "<br>");
        return;
    }
    let indTexte = 0;
    let br = "";

    let interval = setInterval(function() {
        if (indTexte == texteAEcrire.length - 1) {
            clearInterval(interval);
        } else if (texteAEcrire[indTexte] == "\n") {
            br = "<br>";
        } else if (texteAEcrire[indTexte] == ",") {
            clearInterval(interval);
            let interval2 = setInterval(function() {
                clearInterval(interval2);
                console.log(texteAEcrire.slice(indTexte + 1, texteAEcrire.length));
                ecritureTexteQuiJeSuis(elementTexte, texteAEcrire.slice(indTexte, texteAEcrire.length));
            }, 200);
        } else if (texteAEcrire[indTexte] == ".") {
            clearInterval(interval);
            let interval2 = setInterval(function() {
                clearInterval(interval2);
                console.log(texteAEcrire.slice(indTexte + 1, texteAEcrire.length));
                ecritureTexteQuiJeSuis(elementTexte, texteAEcrire.slice(indTexte, texteAEcrire.length));
            }, 500);
        } else {
            br = "";
        }

        elementTexte.innerHTML += texteAEcrire[indTexte] + br;
        indTexte++;
    }, 30)
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
                ecritureTexteQuiJeSuis(texteQuiJeSuis, texteAEcrireQuiJeSuis);
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

function retour() {
    
    contenantElementsLien.style.opacity = 1;
    contenantElementsLien.style.transition = "opacity 0.3s";
    contenantElementsLien.style.opacity = "0.5";
    let interval2 = setInterval(function() {texteQuiJeSuis
        texteQuiJeSuis.innerHTML = "";
        contenantElementsLien.style.visibility = "hidden";
        ecritureTexteMenu(titreJohanVadenne, titreAccueille);
        clearInterval(interval2);
    }, 500)
}

endurscorClignoter(titreJohanVadenne, 4, function() { ecritureTexteMenu(titreJohanVadenne, titreAccueille) });
ecouteur();