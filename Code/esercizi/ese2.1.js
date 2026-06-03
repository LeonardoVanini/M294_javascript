for (let index = 1; index < 11; index++) {
    console.log(index);
    
}
let indice =0
while (indice < 5){
    console.log(indice+1)
    indice++
}
indice =0
let somma =0
while (indice <101){
    somma+=indice
    indice++
}
console.log(somma)

let x=10

do{
    console.log(x)
}while(x < 5)
/*Perchè lo esegue 1 volta, e poi verifica*/ 

let studenti = ["Luca","Anna","Marco"]
for (studente of studenti){
    console.log(studente)
}
let punteggi = [10,20,30,40]
for (punteggio of punteggi){
    console.log(punteggio)
}
let numeri = [2,4,7,10,15]
for(valore of numeri){
    if (valore ==10){
        console.log("Trovato il 10")
        break
    }
}
for(let numero =1 ; numero<=20;numero++){
    console.log(numero)
     
    
}
for(let numero =1 ; numero<=20;numero++){
    if (numero % 2 == 1){
        continue
    }
    console.log(numero)
     
    
}
for(let numero =1 ; numero<=20;numero++){
    if (numero % 3 == 0){
        continue
    }
    console.log(numero)
     
    
}
for(let numero =1 ; numero<=20;numero++){
    if (numero % 3 == 0){
        if (numero % 5 == 0){
            console.log("FizzBuzz")
            continue
        }
        console.log("Fizz")
    }else if(numero %5 ==0){
        console.log("Buzz")
    }
     
    
}