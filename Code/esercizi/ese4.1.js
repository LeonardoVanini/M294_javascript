document.getElementById("titolo").textContent = "Benvenuti alla lezione di JavaScript"

document.getElementById("descrizione").innerHTML = `<strong>Ciao</strong> <a href="selezionare_elementi.html">ciao</a>`

document.getElementById("messaggio").outerHTML = "<h2>Titolo</h2>"

document.querySelector(".importante").textContent = "Attenzione: testo aggiornato!"

document.querySelector("h3").style.color = "Blue"

for (let elemento of document.querySelectorAll(".evidenziato")) {
    elemento.style.fontWeight = "Bold"
}

document.querySelector("#es7").firstElementChild.textContent = "Primo elemento modificato"

for (let elemento of document.querySelector("#contenuto").children){
    elemento.textContent= `${elemento.textContent} !`
}

let nuovo = document.createElement("li")
nuovo.textContent = "Pane"

document.querySelector("#es9").append(nuovo)

let primo = document.createElement("li")
primo.textContent = "Primo"
let secondo = document.createElement("li")
secondo.textContent = "Secondo"
let ultimo = document.createElement("li")
ultimo.textContent = "Ultimo"

document.querySelector("#es10").append(primo)
document.querySelector("#es10").append(secondo)
document.querySelector("#es10").append(ultimo)


let acqua = document.createElement("li")
acqua.textContent = "Acqua"
document.querySelector("#lista").prepend(acqua)
let uova = document.createElement("li")
uova.textContent = "Uova"
document.querySelector("#lista").append(uova)

document.querySelector("#daRimuovere").remove()

let titolo = document.querySelector("#titolo2")
titolo.classList.add("rosso");

document.querySelector("#titolo3").classList.toggle("errore");
document.querySelector("#titolo3").classList.toggle("ok");

let macchina = document.querySelector("#es15")
macchina.firstElementChild.textContent = `${macchina.dataset.id} ${macchina.dataset.brand} ${macchina.dataset.model}`





let width =5;
let height =5;

document.querySelector("body").innerHTML += '<div id="progressBar" style="position: absolute;top: 0px;left: 0px;width: 10px;height: 10px;background-color: #00ff00;"></div>'

let quadrato = document.querySelector("#progressBar")
quadrato.style.width=width+"px";
quadrato.style.height=height+"px";
let larghezza = window.innerWidth;
let altezza = window.innerHeight;

let xSpeed =10;
let ySpeed =10;

function muovi() { 
    let y = parseInt(quadrato.style.top);
    let x = parseInt(quadrato.style.left);
    if (x <0 ||x+width>=larghezza){
        xSpeed *=-1

    }
    if (y <0 ||y+height>=altezza){
        ySpeed *=-1
    }

    quadrato.style.top = (y + ySpeed) + "px";
    quadrato.style.left = (x + xSpeed) + "px";
    
    requestAnimationFrame(muovi);
} 
muovi();