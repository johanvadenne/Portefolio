function afficheProjet(url) {

    HTML.clearElement(arguments.callee.name+"('"+url+"')");

    HTML.appelleAPI(url)
        .then(response => {
            // recovers data
            let projet = response;

            sectionProjet = HTML.createTagElement("section", indexSectionPere, "", "", "section_style1");
            for (const nomProjet in projet) {
                if (projet.hasOwnProperty(nomProjet)) {
                    HTML.createTagElement("h2", sectionProjet, nomProjet, "", "texte_centrer titre_presentation_h2")
                    parcourElementProjet(projet[nomProjet], sectionProjet);
                }
            }
        })
}

function parcourElementProjet(elementProjet, elementPere) {

    for (const element in elementProjet) {
        if (elementProjet.hasOwnProperty(element) && elementProjet[element].hasOwnProperty("tag")) {
            if (elementProjet[element].tag == "img") {
                HTML.createImgTagElement(elementProjet[element].src, elementPere, "", elementProjet[element].class, elementProjet[element].alt)
            }
            else if (elementProjet[element].tag == "a") {
                HTML.createLinkTagElement(elementProjet[element].href, elementPere, elementProjet[element].texte, elementProjet[element].target, "", elementProjet[element].class)
            }
            else if (elementProjet[element].hasOwnProperty("texte")) {
                HTML.createTagElement(elementProjet[element].tag, elementPere, elementProjet[element].texte, "", elementProjet[element].class);
            }
            else {
                newElementPere = HTML.createTagElement(elementProjet[element].tag, elementPere, "", "", elementProjet[element].class);
                parcourElementProjet(elementProjet[element], newElementPere)
            }
        }

    }
}