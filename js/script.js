// DATI

// Ottengo l'elemento #lamp-btn
const lampBtnElement = document.getElementById("lamp-btn")
console.log(lampBtnElement);

// Ottengo l'elemento #lamp-img
const lampImgElement = document.getElementById("lamp-img")
console.log(lampImgElement);


// ESECUZIONE LOGICA

// Aggiungo due nuove classi all'elemento #lamp-img che mi serviranno per associare un evento 
lampImgElement.classList.add("off", "on")
console.log(lampImgElement.className);

// Associo un evento agli elementi specificati -> metodo "addEventListener"
lampBtnElement.addEventListener("click", function () {
    // debug
    // alert("ciao")

    // istruzione condizionale:
    // if (click button)
    //  - (img change)
    // lampImgElement.src = "./img/yellow_lamp.png"

    // istruzione condizionale "BONUS":
    // if (lampIMG contains class "off" && "on")
    //  - lampIMG.remove("off")
    //  - (img change in yellow) 
    //  - (btn innerHTML changhe in off)
    // else if (lampIMG contain class "on") {
    //  - lampIMG.add("off")
    //  - (img change in white) 
    //  - (btn innerHTML changhe in on)

    if (lampImgElement.classList.contains("off", "on")) {
        lampImgElement.classList.remove("off")
        lampImgElement.src = "./img/yellow_lamp.png"
        lampBtnElement.innerHTML = "Spegni la lampadina"
    } else if (lampImgElement.classList.contains("on")) {
        lampImgElement.classList.add("off")
        lampImgElement.src = "./img/white_lamp.png"
        lampBtnElement.innerHTML = "Accendi la lampadina"
    }
})


