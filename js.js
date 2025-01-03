// Les variables issues du HTML
let feuRouge = document.getElementById('rouge')
let feuOrange = document.getElementById('orange')
let feuVert = document.getElementById('vert')
let buttonSwitch = document.getElementById('automatic-mode-button');
buttonSwitch.style.backgroundColor = "rgb(226, 4, 4)";
let nextColor = document.getElementById('next-color');

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
    }

    else {
        // Change sa couleur en VERT
        buttonSwitch.style.backgroundColor = "rgb(7, 158, 7)";
        let isTrue = true;

        // Démarre l'intervalle
        intervall = setInterval(() => {

            if (feuRouge.style.backgroundColor === "rgb(226, 4, 4)") {
                // Si c'est Rouge, ça change au Orange
                feuRouge.style.backgroundColor = "rgb(158, 158, 158)";
                feuOrange.style.backgroundColor = "rgb(255, 102, 0)";
            }

            else if (feuOrange.style.backgroundColor === "rgb(255, 102, 0)") {
                // Si c'est Orange, ça change au Vert
                feuOrange.style.backgroundColor = "rgb(158, 158, 158)";
                feuVert.style.backgroundColor = "rgb(7, 158, 7)";
            }

            else {
                // Ben autre cas de figure donc, si c'est Vert, ça change au Rouge
                feuVert.style.backgroundColor = "rgb(158, 158, 158)";
                feuRouge.style.backgroundColor = "rgb(226, 4, 4)";
            }

        }, 500)

        // Change le contenu du bouton
        buttonSwitch.value = "Mode Auto Activé"

        // Cache le bouton pour changer manuellement
        nextColor.style.display = "none";
    }
})

nextColor.addEventListener('click', () => {
    // Si le rouge est déjà activé, mets le orange
    if (feuRouge.style.backgroundColor === "rgb(226, 4, 4)") {
        feuRouge.style.backgroundColor = "rgb(158, 158, 158)";
        feuOrange.style.backgroundColor = "rgb(255, 102, 0)";
    }
    // Si le orange est déjà activé, mets le vert
    else if (feuOrange.style.backgroundColor === "rgb(255, 102, 0)") {
        // Si c'est Orange, ça change au Vert
        feuOrange.style.backgroundColor = "rgb(158, 158, 158)";
        feuVert.style.backgroundColor = "rgb(7, 158, 7)";
    }

    // Dernier cas de figure, si le vert est activé, mets le rouge
    else {
        // Ben autre cas de figure donc, si c'est Vert, ça change au Rouge
        feuVert.style.backgroundColor = "rgb(158, 158, 158)";
        feuRouge.style.backgroundColor = "rgb(226, 4, 4)";
    }
})
