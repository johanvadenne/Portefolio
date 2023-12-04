titre_johan_vadenne = document.getElementById("titre_johan_vadenne");
texte_titre_johan_vadenne = "Johan Vadenne";
lettre_cacher_titre_johan_vadenne = "0";
texte_cacher_titre_johan_vadenne = lettre_cacher_titre_johan_vadenne.repeat(texte_titre_johan_vadenne.length);

titre_johan_vadenne.innerHTML = texte_cacher_titre_johan_vadenne;

indTexte = 0;
texte_cacher_titre_johan_vadenne = texte_cacher_titre_johan_vadenne.split('')

function transformormeTitre() {
    x=0;
    var interval = setInterval(()=>{
        var lettreAleatoire = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        var lettreMinuscule = String.fromCharCode(lettreAleatoire);;
        texte_cacher_titre_johan_vadenne[indTexte] = lettreMinuscule;
        titre_johan_vadenne.innerHTML = texte_cacher_titre_johan_vadenne.join('');
        x++;
        if (x > 10) {
            clearInterval(interval);
            texte_cacher_titre_johan_vadenne[indTexte] = texte_titre_johan_vadenne.split('')[indTexte]
            titre_johan_vadenne.innerHTML = texte_cacher_titre_johan_vadenne.join('');
            indTexte++;
            if (indTexte == texte_titre_johan_vadenne.length) {return;}
            transformormeTitre();
        }
    }, 50)
}

transformormeTitre();