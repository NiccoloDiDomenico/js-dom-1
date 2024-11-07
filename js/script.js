// DATI

// Ottengo l'elemento #lamp-btn
const lampBtnElement = document.getElementById("lamp-btn")
console.log(lampBtnElement);

// Ottengo l'elemento #lamp-img
const lampImgElement = document.getElementById("lamp-img")
console.log(lampImgElement);


// ESECUZIONE LOGICA

// Associo un evento agli elementi specificati grazie al metodo "addEventListener"
lampBtnElement.addEventListener("click", function () {
    // debug
    // alert("ciao")

    // istruzione condizionale:
    // if (click button)
    //  - (img change)
    lampImgElement.src = "./img/yellow_lamp.png"
})
