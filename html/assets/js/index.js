var mode_dev = true;
const urlIndexJson = "http://127.0.0.1:8080/assets/json/index.json";

const sectionPresentation = document.getElementById("section_presentation_paragraphe")
const sectionDocumentLien = document.getElementById("section_presentation_document_lien")

// makes a GET request
function appelleAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return response.json();
        })
        .catch(error => {
            throw error;
        });
}

// if in developer mode, display value in terminal
function journal(value) {
    if (mode_dev) {console.log(value);}
}

function associatesParentChildElements(parentElement, arrayChildElement) {
    arrayChildElement.forEach(childElement => {
        parentElement.appendChild(childElement);
    });
}

function createTagElement(tag, texte = "", className = "") {
    let newElement = document.createElement(tag)
    newElement.innerHTML = texte;
    newElement.className = className;
    return newElement;
}

function createImgElement(src = "", className) {
    let nexImage = document.createElement("img")
    nexImage.src = src;
    nexImage.className = className;
    return nexImage;
}

function createAElement(href = "", target = "", className = "") {
    let newA = document.createElement("a")
    newA.href = href;
    newA.target = target;
    newA.className = className;
    return newA;
}

appelleAPI(urlIndexJson)
    .then(response => {
        // recovers data
        let data = response;
        let presentation = data["Présentation"].join("");
        let DocumentLien = data["Document & Lien"];
        let cv = DocumentLien.element1;
        let syntheseCompetence = DocumentLien.element2;
        let github = DocumentLien.element3;

        journal(cv)
        
        titrePresentaion = createTagElement("h2", "Présentation", "texte_centrer titre_presentation_h2");
        textePresentaion = createTagElement("p", presentation, "texte_presentation");
        associatesParentChildElements(sectionPresentation, [titrePresentaion, textePresentaion]);
        
        titreDocumentLien = createTagElement("h2", "Document & Lien", "texte_centrer titre_presentation_h2");
        sectionDocumentLien.appendChild(titreDocumentLien);
        
        divContainer = document.createElement("div")
        divContainer.className = "centrer";
        divCV = document.createElement("div");
        divSyntheseCompetence = document.createElement("div");
        divGitHub = document.createElement("div");
        sectionDocumentLien.appendChild(divContainer);
        associatesParentChildElements(divContainer, [divCV, divSyntheseCompetence, divGitHub]);

        aCV = createAElement(cv.lien, "blank", "colonne");
        aSyntheseCompetence = createAElement(syntheseCompetence.lien, "blank", "colonne");
        aGitHub = createAElement(github.lien, "blank", "colonne");

        imgCV = createImgElement(cv.image, "img_style1")
        imgSyntheseCompetence = createImgElement(syntheseCompetence.image, "img_style1")
        imgGitHub = createImgElement(github.image, "img_style1 img_rond")

        h3CV = createTagElement("h3", cv.texte, "texte_centrer text_margin_top5")
        h3SyntheseCompetence = createTagElement("h3", syntheseCompetence.texte, "texte_centrer text_margin_top5")
        h3GitHub = createTagElement("h3", github.texte, "texte_centrer text_margin_top5")
        
        associatesParentChildElements(aCV, [imgCV, h3CV]);
        associatesParentChildElements(aSyntheseCompetence, [imgSyntheseCompetence, h3SyntheseCompetence]);
        associatesParentChildElements(aGitHub, [imgGitHub, h3GitHub]);
        divCV.appendChild(aCV);
        divSyntheseCompetence.appendChild(aSyntheseCompetence);
        divGitHub.appendChild(aGitHub);
    })