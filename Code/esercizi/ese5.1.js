let elemento = document.querySelector("#es1")
elemento.addEventListener("click",function()
{
    console.log("click")
});

let elemento2 = document.querySelector("#es2")
let elemento2p =document.querySelector("#es2p")
elemento2.addEventListener("input",function(){
    elemento2p.textContent = `Ciao ${elemento2.value}!`;
});


let elemento3 = document.querySelector("#es3f")
elemento3.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form inviao")
})


let elemento4 = document.querySelector("#es4h")
let elemento4b = document.querySelector("#es4b")
let rosso = true

elemento4b.addEventListener("click",function(){
    elemento4.textContent = document.querySelector("#es4i").value
    elemento4.classList.toggle("red")
})

let elemento5 = document.querySelector("#benvenuto")
setTimeout(function(){
    elemento5.textContent = "Benvenuto!"
},3000)

let elemento6 = document.querySelector("#contatore")
let i=1
let contatore = setInterval(function(){
    if (i==5){
        clearInterval(contatore)
    }
    elemento6.textContent =i;
    i++;
},1000)

let elemento7 = document.querySelector("#timer")
let j=5
timer = setInterval(function(){
    elemento7.textContent =j;
    if (j<0){
        elemento7.textContent ="Tempo scaduto";
        clearInterval(timer)
        
    }
    
    
    j--;
},1000)


let p8 = document.querySelector("#counter8")
let b8 = document.querySelector("#button8")

b8.addEventListener("click",function(){
    p8.textContent = parseInt(p8.textContent)+1
})