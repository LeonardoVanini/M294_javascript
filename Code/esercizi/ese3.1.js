for (let i =1; i<=10 ;i++){
    console.log(i)
    saluta();
    
}

function saluta (){
    console.log("Ciao ragazzi!")
}

function salutaNome (nome){
    console.log("Ciao "+nome+"!")
}

salutaNome("Anna")
salutaNome("Luca")

function somma (a, b){
    return a+b
}

let ris = somma(5,2)
console.log(ris)

const quadrato = (x) => {return x*x}

const shortquadrato = x => x*x;

console.log(quadrato(5))
console.log(shortquadrato(8))


function media (v){
    let count = 0;
    let somma = 0;

    for (valore of v){
        
        somma+=valore;
        count++;
    }
    nota=somma/count
    if (nota >= 6){
        return "Promosso con media: "+nota;
    }else{
        return "Bocciato con media: "+nota
    }
}

const mediaShort = (x) => {let s=0; let c=0; for (v of x){s+=v;c++;} let nota = s/c; if(nota>=6){return "Promosso con media: "+nota;}else{return "Bocciato con media: "+nota}}

console.log(media([1,2,3]))
console.log(mediaShort([1,2,3,4,5,6,7,8,50]))

function esempio(){
    let x =10;
}
esempio()
//console.log(x) //x is not defined


const doppio = x => x*2;

console.log(doppio(7));


console.log(media([quadrato(somma(65,205)),quadrato(2),-50,somma(-300,-100),-80,shortquadrato(654),somma(-50,-500000)]))



//teoria

