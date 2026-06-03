const prodotti = [ 
{ nome: "Hamburger", prezzo: 8 }, 
{ nome: "Toast", prezzo: 5 }, 
{ nome: "Cola", prezzo: 3 } 
];

let element = document.getElementById("lista")
let count =0
for (let prodotto of prodotti){
    console.log(`${prodotto.nome} - ${prodotto.prezzo}$`)
    element.innerHTML+=`${prodotto.nome} - ${prodotto.prezzo}$ <br>`
    count++
}
console.log(`Totale prodotti: ${count}`)
element.innerHTML+=`Totale prodotti: ${count}`

let prezzi = [8, 5, 3, 4]; 
element= document.getElementById("risultato")
let somma =0;
count=0;
for(let prezzo of prezzi){
    somma+=prezzo
    count++
}
console.log(`Totale: ${somma}$`)
console.log(`Media : ${somma/count}`)
element.innerHTML+=`Totale: ${somma}$ <br>Media : ${somma/count}`

somma=0;
element=document.getElementById("totale")
document.getElementById("hamburger").addEventListener("click",function(){
    somma+=prodotti[0].prezzo
    element.innerHTML=somma;
})
document.getElementById("toast").addEventListener("click",function(){
    somma+=prodotti[1].prezzo
    element.innerHTML=somma;
})
document.getElementById("cola").addEventListener("click",function(){
    somma+=prodotti[2].prezzo
    element.innerHTML=somma;
})
document.getElementById("svuota").addEventListener("click",function(){
    somma=0
    element.innerHTML=somma;
})

const prodottiNomi = ["Hamburger", "Toast", "Cola"];

element = document.getElementById("inputProdotto")
let element2 = document.getElementById("risultatoc")
document.getElementById("btnCerca").addEventListener("click",function(){
    if (prodottiNomi.includes(element.value)){
        console.log(element.value)
        element2.textContent=`Trovato ${element.value}`
    }else{
        console.error(element.value)
        element2.textContent=`Non trovato ${element.value}`
    }
})

prezzi= [10, 20, 30]; 
count =0
element = document.getElementById("output")
for (let prezzo of prezzi){
    console.log(`Prezzo originale: ${prezzo} --> Scontato: ${prezzo*0.9}$`)
    element.innerHTML+=`Prezzo originale: ${prezzo} --> Scontato: ${prezzo*0.9}$<br>`
    count+=prezzo*0.1
}
element.innerHTML+=`Totale risparmiato: ${count}`
