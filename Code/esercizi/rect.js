let width =1;
let height =100;
let speed =1;
let accellerazione=1.1;
let xSpeed =speed;
let ySpeed =speed;
let nElementi =4000;
let larghezza = window.innerWidth;
let altezza = window.innerHeight;

let velocità =[]
let posizione =[]
for (let i=0; i<nElementi;i++){
    document.querySelector("body").innerHTML += `<div id="rect${i}" style="position: absolute;top: 0px;left: 0px;width: 10px;height: 10px;background-color: #00ff00;"></div>`
    let quadrato = document.querySelector(`#rect${i}`)
    quadrato.style.width=width+"px";
    quadrato.style.height=height+"px";
    velocità.push([
        (Math.random() * 2 - 1) * xSpeed ,
        (Math.random() * 2 - 1) * ySpeed
    ]);

    //quadrato.style.left=Math.round((larghezza-width)/2)+"px";
    //quadrato.style.top=Math.round((altezza-height)/2)+"px";
    let posizioneX= Math.round((larghezza-width)/2)
    let posizioneY= Math.round((altezza-height)/2)
    quadrato.style.transform = `translate(${posizioneX}px, ${posizioneY}px)`;
    posizione.push([posizioneX,posizioneY])
    
    
    

}






function muovi() {
    for (let i=0; i<nElementi;i++){
        let quadrato = document.querySelector(`#rect${i}`) 
        //let y = parseFloat(quadrato.style.top);
        //let x = parseFloat(quadrato.style.left);
        let x =posizione[i][0]
        let y =posizione[i][1]

        let xSpeed = velocità[i][0];
        let ySpeed = velocità[i][1];

        if (x <0 ||x+width>=larghezza){
            xSpeed *=-accellerazione
            velocità[i][0] = xSpeed

        }
        if (y <0 ||y+height>=altezza){
            ySpeed *=-accellerazione
            velocità[i][1] = ySpeed
        }
        
        //quadrato.style.top = (y + ySpeed) + "px";
        //quadrato.style.left = (x + xSpeed) + "px";

        quadrato.style.transform = `translate(${x+xSpeed}px, ${y+ySpeed}px)`;
        posizione[i][0] = x+xSpeed
        posizione[i][1] = y+ySpeed

    }
    requestAnimationFrame(muovi);
} 
muovi();