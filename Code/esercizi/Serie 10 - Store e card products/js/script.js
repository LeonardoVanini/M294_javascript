let api = "https://fakestoreapi.com/products";
let oggetti
const prodotti = document.getElementById("products");








async function getApi() {
    try{
        const ripsosta = await fetch(api)
        if (!ripsosta.ok){
            throw new Error("Errore nella richiesta")
        }   
        oggetti = await ripsosta.json()
        console.log(oggetti)
        for(let element of oggetti){
        prodotti.innerHTML+=
        `<article>
            <div>
                <div>
                    <img src=${element.image}
                        alt=${element.title}>
                </div>
                <div>
                    <h3>${element.title}</h3>
                    <p class="multiline-truncate">${element.description}</p>
                </div>
            </div>
            <div>
                <div>${element.price}-</div>
                <button>Acquista ora</button>
            </div>
        </article>`
    }
    } catch (error){
        console.error(error);
    }
}

getApi()
