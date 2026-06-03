const products = [
    ["Spirit Animals V.01",8.10,"Img/sa1.png"],
    ["Spirit Animals V.02",8.10,"Img/sa2.png"],
    ["Spirit Animals V.03",8.10,"Img/sa3.jpg"],
    ["Spirit Animals V.04",8.10,"Img/sa4.jpg"],
    ["Spirit Animals V.05",8.10,"Img/sa5.jpg"],
    ["Spirit Animals V.06",8.10,"Img/sa6.jpg"],
    ["Spirit Animals V.07",8.10,"Img/sa7.jpg"]
]

let section = document.querySelector(".products")

for (let index = 0; index < products.length; index++) {
    let elemento = products[index];
    let nome = elemento[0];
    let prezzo = elemento[1];
    let source = elemento[2];

    let carta = document.createElement("div");
    carta.id = index
    carta.classList.add("carta")

    let img = document.createElement("img");
    img.src = source
    img.width = 205
    img.height = 300

    let prodotto = document.createElement("p");
    prodotto.textContent = nome;
    prodotto.classList.add("prodotto")

    let costo = document.createElement("p");
    costo.textContent = prezzo;
    costo.classList.add("prezzo")

    let bottone = document.createElement("button")
    bottone.textContent = "Acquista"
    bottone.addEventListener("click",function(){console.log(nome+" È stato acquistato")})



    carta.append(img)
    carta.append(prodotto)
    carta.append(costo)
    carta.append(bottone)
    section.append(carta)
    
}
let carrello = document.querySelector(".carrello");
function aggiungiCarrello(nome,prezzo){
    
    let oggetto = document.createElement("li");
    let div = document.createElement("div")
    div.classList.toggle("carrelloDiv")
    let nomeO = document.createElement("p")
    nomeO.textContent = nome
    let prezzoO = document.createElement("p")
    prezzoO.textContent = prezzo

    div.append(nome,prezzo)
    oggetto.append(div)
    carrello.append(oggetto)
}

aggiungiCarrello("a","b")

