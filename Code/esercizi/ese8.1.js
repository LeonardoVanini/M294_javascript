let div = document.createElement("div")
div.style.backgroundColor = "red"
div.style.width = "10px"
div.style.height = "10px"
div.style.position = "fixed"


let body =document.querySelector("body")
body.addEventListener("mousemove",function(event){
    console.log(`${event.clientX} ${event.clientY}`)
    let div = document.createElement("div")
    div.style.backgroundColor = "rgb(254, 254, 254)"
    div.style.width = "10px"
    div.style.height = "10px"
    div.style.position = "fixed"
    div.style.left = event.clientX + "px";
    div.style.top = event.clientY + "px";
    body.append(div)
})


document.body.style.height = "100vh";
document.body.style.margin = "0";