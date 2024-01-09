

class CL_HTML {

    constructor() {
        this.mode_dev = true;
        this.enregistreElement = true;
        this.tabElement = [];
    }

    journal(value) {
        if (this.mode_dev) {console.log(value);}
    }
    
    createTagElement(tag, parentElement, texte = "", id = "", className = "") {
        let newElement = document.createElement(tag);
        newElement.innerHTML = texte;
        newElement.id = id;
        newElement.className = className;
        parentElement.appendChild(newElement);
        if (this.enregistreElement) {this.tabElement.push(newElement)};
        return newElement;
    }
    
    createImgTagElement(src, parentElement, id = "", className = "", alt = "") {
        let newImg = document.createElement("img");
        newImg.src = src;
        newImg.alt = alt;
        newImg.id = id;
        newImg.className = className;
        parentElement.appendChild(newImg);
        if (this.enregistreElement) {this.tabElement.push(newImg)};
        return newImg;
    }
    
    createLinkTagElement(href, parentElement, texte = "", target = "", id = "", className = "", onclick = "") {
        let newLink = document.createElement("a");
        newLink.href = href;
        newLink.onclick = function() {eval(onclick);};        
        newLink.id = id;
        newLink.className = className;
        newLink.innerHTML = texte;
        newLink.target = target;
        parentElement.appendChild(newLink);
        if (this.enregistreElement) {this.tabElement.push(newLink)};
        return newLink;
    }

    appelleAPI(url) {
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

    clearElement() {
        this.tabElement.forEach(element => {
            element.remove();
        });
    }

}