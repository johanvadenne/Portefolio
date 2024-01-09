let sectionProjet;

function afficheProjet(url) {

    HTML.clearElement();

    HTML.appelleAPI(url)
        .then(response => {
            // recovers data
            let projet = response;

            sectionProjet = HTML.createTagElement("section", indexSectionPere, "", "", "section_style1");
            for (const nomProjet in projet) {
                if (projet.hasOwnProperty(nomProjet)) {
                    HTML.createTagElement("h2", sectionProjet, nomProjet, "", "texte_centrer titre_presentation_h2")
                    parcourElementProjet(projet[nomProjet], true);
                }
            }
        })
}

function parcourElementProjet(elementProjet, premierPassage) {

    for (const element in elementProjet) {
        if (elementProjet.hasOwnProperty(element)) {

            if (elementProjet[element].src != undefined) {
                HTML.createImgTagElement(elementProjet[element].src, sectionProjet, "", elementProjet[element].class, elementProjet[element].alt)
            }
            else if (typeof elementProjet[element] === "string") {
                HTML.createTagElement("h3", sectionProjet, element, "", "texte_centrer titre_presentation_h3")
                HTML.createTagElement("p", sectionProjet, elementProjet[element], "", "texte_centrer texte_style1")
            }
            else if (premierPassage) {
                parcourElementProjet(elementProjet[element], false)
            }
        }

    }
}