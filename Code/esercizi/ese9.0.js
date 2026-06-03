const items = ["Pane","Latte","Uova","Pasta"];
const ese1 = document.getElementById("ese1");
for (let element of items){
    console.log(element)
    ese1.innerHTML+=`
    <li>${element}<button>delete</button></li>
    
    `
}
ese1.addEventListener("click",function(event){
    let li = event.target.closest("li")
    console.log(li)
    items.splice(li.textContent.trim().split(" ")[0],1)
    items.indexOf(li.textContent.split(" ")[0])

    ese1.innerHTML="";
    for (let element of items){
    console.log(element)
    ese1.innerHTML+=`
    <li>${element}   <button>delete</button></li>
    
    `
}
})


