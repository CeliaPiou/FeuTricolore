// Les variables issues du HTML
let feuRouge = document.getElementById('rouge')
let feuOrange = document.getElementById('orange')
let feuVert = document.getElementById('vert')


// Les boutons
let buttonSwitch = document.getElementById('automatic-mode-button');
buttonSwitch.style.backgroundColor = "rgb(226, 4, 4)";
let nextColor = document.getElementById('next-color');
let isTrue = false;


// On définit les couleurs de base, rouge en rouge, et les autres en Gris.
function staticColors() {
    feuRouge.style.backgroundColor = "rgb(226, 4, 4)";
    feuOrange.style.backgroundColor = "rgb(158, 158, 158)";
    feuVert.style.backgroundColor = "rgb(158, 158, 158)";
}

staticColors();



function changeColor() {
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
}



// Change de couleur pour dire si actif ou non
buttonSwitch.addEventListener('click', () => {
    if (buttonSwitch.style.backgroundColor == "rgb(7, 158, 7)") {
        buttonSwitch.style.backgroundColor = "rgb(226, 4, 4)";
        let isTrue = false;
        staticColors();
        console.log(intervall)

    }
    else {
        buttonSwitch.style.backgroundColor = "rgb(7, 158, 7)";
        let isTrue = true;

        let intervall = setInterval(() => {

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
        console.log(intervall)

    }
})










