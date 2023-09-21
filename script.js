let elementTitre = document.getElementById("titreJohanVadenne");
let contenantElementsLien = document.getElementById("contenantLien");
let johan = document.getElementById("johan");
let menuJohan = document.getElementsByClassName("menuJohan");
let elementsLien = document.querySelectorAll(".lien");
let points = document.getElementsByClassName("point");
const point1 = document.getElementById("point1")
const point2 = document.getElementById("point2")

function texteMenu() {
    endurscorClignotement(function() { ecritureMenu() });
}

const lettreTexte = [
    {"idLettre": "J", "texte": "Java", "lien": "https://fr.wikipedia.org/wiki/Java_(langage)"},
    {"idLettre": "J", "texte": "JavaScript", "lien": "https://developer.mozilla.org/fr/docs/Web/JavaScript"},
    {"idLettre": "J", "texte": "JSON", "lien": "https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON"},
    {"idLettre": "J", "texte": "JVM", "lien": "https://fr.wikipedia.org/wiki/Machine_virtuelle_Java"},
    {"idLettre": "J", "texte": "jQuery", "lien": "https://jquery.com/"},
    {"idLettre": "J", "texte": "Jenkins", "lien": "https://www.jenkins.io/"},
    {"idLettre": "J", "texte": "JUnit", "lien": "https://junit.org/junit4/"},
    {"idLettre": "J", "texte": "Jupyter", "lien": "https://jupyter.org/"},
    {"idLettre": "J", "texte": "JavaScript Frameworks", "lien": "https://developer.mozilla.org/fr/docs/Web/JavaScript/Frameworks"},
    {"idLettre": "J", "texte": "Joystick", "lien": "https://fr.wikipedia.org/wiki/Joystick"},
    {"idLettre": "J", "texte": "Jitter", "lien": "https://fr.wikipedia.org/wiki/Jitter"},
    {"idLettre": "J", "texte": "JWT", "lien": "https://jwt.io/"},
    {"idLettre": "J", "texte": "JavaScript Debugging", "lien": "https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Debugging_JavaScript"},
    {"idLettre": "J", "texte": "Java Beans", "lien": "https://fr.wikipedia.org/wiki/JavaBeans"},
    {"idLettre": "J", "texte": "Joindre", "lien": "https://fr.wiktionary.org/wiki/joindre"},
    {"idLettre": "J", "texte": "JavaScript Library", "lien": "https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Library"},
    {"idLettre": "J", "texte": "Java EE", "lien": "https://fr.wikipedia.org/wiki/Java_EE"},
    {"idLettre": "J", "texte": "JavaScript Promise", "lien": "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise"},
    {"idLettre": "J", "texte": "Job Queue", "lien": "https://developer.mozilla.org/fr/docs/Web/API/HTML_DOM_API/MutationObserver"},
    {"idLettre": "J", "texte": "JavaScript ES6", "lien": "https://developer.mozilla.org/fr/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla"},
];

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

    const titre = " Johan Vadenne ";
    let titre2 = "";
    let texte = "";
    let ind = 0;
    let maxInd = titre.length - 1;
    let titreAfficher = "";
    let titreEnCours = "";

    titreAfficher = "_";
    elementTitre.innerHTML = titreAfficher

    let interval = setInterval(function() {

        texte = "<span id=\""+titre[ind]+"\">"+titre[ind]+"</span>";
        titreEnCours += texte;
        if (ind > 0 || ind < titre.length) {
            titre2 += texte;
        }
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
            pointDInterrogation(true);
        }
    });

    elementLien.addEventListener("mouseout", function() {
        
        if ("qui_je_suis" == elementLien.id) {
            pointDInterrogation(false);
        }
    });
}

function pointDInterrogation(afficher) {

    if (afficher) {
        point1.style.left = "0"
        point2.style.right = "0"
        point1.style.rotate = "25deg"
        point2.style.rotate = "-25deg"
    }
    else {
        point1.style.left = "-15%"
        point2.style.right = "-15%"
        point1.style.rotate = "0deg"
        point2.style.rotate = "0deg"
    }
}

texteMenu();