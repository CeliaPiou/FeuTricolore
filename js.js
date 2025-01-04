// Les variables issues du HTML
let feuRouge = document.getElementById('rouge')
let feuOrange = document.getElementById('orange')
let feuVert = document.getElementById('vert')
let buttonSwitch = document.getElementById('automatic-mode-button');
buttonSwitch.style.backgroundColor = "rgb(226, 4, 4)";
let nextColor = document.getElementById('next-color');
const carrousel = document.querySelector('section');

let isTrue = false;
let intervall;


// On définit les couleurs de base, rouge en rouge, et les autres en Gris.
function staticColors() {
    feuRouge.style.backgroundColor = "rgb(226, 4, 4)";
    feuOrange.style.backgroundColor = "rgb(158, 158, 158)";
    feuVert.style.backgroundColor = "rgb(158, 158, 158)";
}
// On appelle la fonction de base pour avoir juste le feu rouge allumé.
staticColors();



// En cliquant sur le bouton switch :
buttonSwitch.addEventListener('click', () => {
    // Si le bouton est VERT
    if (buttonSwitch.style.backgroundColor == "rgb(7, 158, 7)") {

        // Change sa couleur en ROUGE
        buttonSwitch.style.backgroundColor = "rgb(226, 4, 4)";
        let isTrue = false;

        // Arrête l'intervall
        clearInterval(intervall);

        // Met les couleurs de base
        staticColors();

        // Change le contenu du bouton
        buttonSwitch.value = "Cliquez pour réactiver le Mode Auto";

        // Cache le bouton pour changer manuellement
        nextColor.style.display = "inline";

        //Cesse le défilé de voitures
        carrousel.style.display = "none";

    }

    else {
        // Change sa couleur en VERT
        buttonSwitch.style.backgroundColor = "rgb(7, 158, 7)";
        let isTrue = true;

        // Démarre l'intervalle
        intervall = setInterval(() => {

            if (feuRouge.style.backgroundColor === "rgb(226, 4, 4)") {
                // Si c'est Rouge, ça change au Vert
                feuRouge.style.backgroundColor = "rgb(158, 158, 158)";
                feuVert.style.backgroundColor = "rgb(7, 158, 7)";
                carrousel.style.display = "inline";
            }

            else if (feuOrange.style.backgroundColor === "rgb(255, 102, 0)") {
                // Si c'est Orange, ça change au Rouge
                feuOrange.style.backgroundColor = "rgb(158, 158, 158)";
                feuRouge.style.backgroundColor = "rgb(226, 4, 4)";
                carrousel.style.display = "none";

            }

            else {
                // Ben autre cas de figure donc, si c'est Vert, ça change au Orange
                feuVert.style.backgroundColor = "rgb(158, 158, 158)";
                feuOrange.style.backgroundColor = "rgb(255, 102, 0)";
                carrousel.style.display = "inline";

            }

        }, 3000)

        // Change le contenu du bouton
        buttonSwitch.value = "Mode Auto Activé"

        // Cache le bouton pour changer manuellement
        nextColor.style.display = "none";
    }
})

// Quand j'appuie sur le bouton pour changer manuellement la couleur
nextColor.addEventListener('click', () => {
    // Si le rouge est déjà activé, mets le vert
    if (feuRouge.style.backgroundColor === "rgb(226, 4, 4)") {
        feuRouge.style.backgroundColor = "rgb(158, 158, 158)";
        feuVert.style.backgroundColor = "rgb(7, 158, 7)";
        carrousel.style.display = "inline";
    }
    // Si le orange est déjà activé, mets le vert
    else if (feuOrange.style.backgroundColor === "rgb(255, 102, 0)") {
        // Si c'est Orange, ça change au Rouge
        feuOrange.style.backgroundColor = "rgb(158, 158, 158)";
        feuRouge.style.backgroundColor = "rgb(226, 4, 4)";
        carrousel.style.display = "none";
    }

    // Dernier cas de figure, si le vert est activé, mets le orange
    else {
        // Ben autre cas de figure donc, si c'est Vert, ça change au Rouge
        feuVert.style.backgroundColor = "rgb(158, 158, 158)";
        feuOrange.style.backgroundColor = "rgb(255, 102, 0)";
        carrousel.style.display = "inline";
    }
})
