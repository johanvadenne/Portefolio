const urlquiJeSuisJson = "http://172.16.197.253:18100/assets/json/quiJeSuis.json";
const urlmaVeilleJson = "http://172.16.197.253:18100/assets/json/maVeille.json";
const urlheaderLinkJson = "http://172.16.197.253:18100/assets/json/headerLink.json";
const urlSkillJson = "http://172.16.197.253:18100/assets/json/skill.json";
const urlProjectJson = "http://172.16.197.253:18100/assets/json/project.json";
const urlYoutubeJson = "http://172.16.197.253:18100/assets/json/youtube.json";
const urlGitHubJson = "http://172.16.197.253:18100/assets/json/github.json";
const HTML = new CL_HTML;

const indexSectionPere = document.getElementById("index_section_pere");
const indexHeaderLien = document.getElementById("index_container_lien");


function headerLink() {
    HTML.appelleAPI(urlheaderLinkJson)
        .then(response => {
            let link = response["lien"];

            for (const cle in link) {
                if (link.hasOwnProperty(cle)) {
                    HTML.enregistreElement = false;
                    aElement = HTML.createLinkTagElement(link[cle].href, indexHeaderLien, cle, "", "", "lien_style1", link[cle].onclick);
                    HTML.enregistreElement = true;
                }
            }
        })
}

function quiJeSuis() {

    HTML.clearElement(arguments.callee.name+"()");

    // display data
    HTML.appelleAPI(urlquiJeSuisJson)
        .then(response => {
            // recovers data
            let data = response;
            let presentation = data["Présentation"].join("");
            let DocumentLien = data["Document & Lien"];
            let cv = DocumentLien.cv;
            let syntheseCompetence = DocumentLien.competenceSynthese;
            let github = DocumentLien.github;

            sectionPresentation = HTML.createTagElement("section", indexSectionPere, "", "", "section_style1");
            sectionDocumentLien = HTML.createTagElement("section", indexSectionPere, "", "", "section_style1");

            HTML.createTagElement("h2", sectionPresentation, "Présentation", "", "texte_centrer titre_presentation_h2");
            HTML.createTagElement("p", sectionPresentation, presentation, "", "texte_style1");

            HTML.createTagElement("h2", sectionDocumentLien, "Document & Lien", "", "texte_centrer titre_presentation_h2");

            divContainer = HTML.createTagElement("div", sectionDocumentLien, "", "", "centrer");

            for (const cle in DocumentLien) {
                if (DocumentLien.hasOwnProperty(cle)) {
                    aElement = HTML.createLinkTagElement("#", divContainer, "", "blank", "", "colonne lien_style1");
                    HTML.createImgTagElement(DocumentLien[cle].image, aElement, "", DocumentLien[cle].class);
                    HTML.createTagElement("h3", aElement, DocumentLien[cle].texte, "", "texte_centrer text_margin_top5");
                }
            }
        })
}

function maVeille() {

    HTML.clearElement(arguments.callee.name+"()");

    HTML.appelleAPI(urlmaVeilleJson)
        .then(response => {
            // recovers data
            let data = response;
            let applicationsOutils = data["Mes applications & outils"];

            sectionApplicationsOutils = HTML.createTagElement("section", indexSectionPere, "", "", "section_style1");
            HTML.createTagElement("h2", sectionApplicationsOutils, "Mes applications & outils", "", "texte_centrer titre_presentation_h2");
            divContainer = HTML.createTagElement("div", sectionApplicationsOutils, "", "", "centrer");

            for (const cle in applicationsOutils) {
                if (applicationsOutils.hasOwnProperty(cle)) {
                    aElement = HTML.createLinkTagElement("#", divContainer, "", "", "", "colonne lien_style1", applicationsOutils[cle].onclick);
                    HTML.createImgTagElement(applicationsOutils[cle].image, aElement, "", applicationsOutils[cle].class);
                    HTML.createTagElement("h3", aElement, applicationsOutils[cle].texte, "", "texte_centrer text_margin_top5");
                }
            }

        })
}

function competence() {

    HTML.clearElement(arguments.callee.name+"()");

    HTML.appelleAPI(urlSkillJson)
        .then(response => {
            // recovers data
            let skill = response["Compétence"];
            let colonne1 = 0;
            let colonne2 = 0;
            let ulCompetence;

            sectionCompetence = HTML.createTagElement("section", indexSectionPere, "", "", "section_competence")
            divColonneCompetence1 = HTML.createTagElement("div", sectionCompetence, "", "", "colonne_competence");
            divColonneCompetence2 = HTML.createTagElement("div", sectionCompetence, "", "", "colonne_competence");

            for (const nomDesCompetences in skill) {
                if (skill.hasOwnProperty(nomDesCompetences)) {


                    if (colonne1 <= colonne2) {
                        divContainerCompetence = HTML.createTagElement("div", divColonneCompetence1, "", "", "div_competence");
                        colonne1 += skill[nomDesCompetences].length;
                    }
                    else {
                        divContainerCompetence = HTML.createTagElement("div", divColonneCompetence2, "", "", "div_competence");
                        colonne2 += skill[nomDesCompetences].length;
                    }
                    HTML.createTagElement("h2", divContainerCompetence, nomDesCompetences, "", "texte_centrer");
                    ulCompetence = HTML.createTagElement("ul", divContainerCompetence);

                    for (const nomDeLaCompetence in skill[nomDesCompetences]) {
                        if (skill[nomDesCompetences].hasOwnProperty(nomDeLaCompetence)) {
                            HTML.createTagElement("li", ulCompetence, skill[nomDesCompetences][nomDeLaCompetence], "", "li_competence");
                        }
                    }
                }
            }
        })
}

function mesProjets() {

    HTML.clearElement(arguments.callee.name+"()");

    HTML.appelleAPI(urlProjectJson)
        .then(response => {
            // recovers data
            let project = response["Projet"];

            sectionCompetence = HTML.createTagElement("section", indexSectionPere, "", "", "section_style2")

            for (const nomProjet in project) {
                if (project.hasOwnProperty(nomProjet)) {
                    aProjet = HTML.createLinkTagElement("#", sectionCompetence, "", "", "", "lien_projet", project[nomProjet].onclick);
                    HTML.createTagElement("h2", aProjet, nomProjet, "", "texte_centrer");
                }
            }
        })
}

function youtube() {

    HTML.clearElement(arguments.callee.name+"()");

    HTML.appelleAPI(urlYoutubeJson)
        .then(response => {
            // recovers data
            let youtube = response["Chaines Youtube"];

            sectionYoutube = HTML.createTagElement("section", indexSectionPere, "", "", "section_style2")
            for (const chaine in youtube) {
                if (youtube.hasOwnProperty(chaine)) {
                    aYoutube = HTML.createLinkTagElement(youtube[chaine].href, sectionYoutube, "", "blank", "", "colonne lien_style2");
                    HTML.createImgTagElement(youtube[chaine].image, aYoutube, "", "img_style1 img_rond")
                    HTML.createTagElement("h2", aYoutube, chaine, "", "texte_centrer text_margin_top5");
                }
            }
        })
}

function github() {

    HTML.clearElement(arguments.callee.name+"()");

    HTML.appelleAPI(urlGitHubJson)
        .then(response => {
            // recovers data
            let github = response["Chaines GitHub"];

            sectionGithub = HTML.createTagElement("section", indexSectionPere, "", "", "section_style2")
            for (const chaine in github) {
                if (github.hasOwnProperty(chaine)) {
                    aGithub = HTML.createLinkTagElement(github[chaine].href, sectionGithub, "", "blank", "", "colonne lien_style2");
                    HTML.createImgTagElement(github[chaine].image, aGithub, "", "img_style1 img_rond")
                    HTML.createTagElement("h2", aGithub, chaine, "", "texte_centrer text_margin_top5");
                }
            }
        })
}


headerLink();

try {
    const page = JSON.parse(localStorage.getItem("page"));
    HTML.journal(page)
    HTML.journal(page["fonction"])
    if (page != null) {
        eval(page.fonction)
    } else {
        error("test");
    }
} catch (error) {
    HTML.journal(error)
    window.localStorage.setItem("page", null);
    quiJeSuis();
}