
// Dati base
const prodotti = [
  ["Sneakers", 79.90, "https://picsum.photos/seed/shoe/400/300"],
  ["Zaino", 49.90, "https://picsum.photos/seed/bag/400/300"],
  ["Orologio", 129.90, "https://picsum.photos/seed/watch/400/300"],
  ["Cuffie", 59.90, "https://picsum.photos/seed/head/400/300"]
];

let carrelloAcquisti = [];

const prodottiAll = {
    Computer: [
        { nome: "Lenovo", prezzo: 500, img: "https://picsum.photos/seed/computer/400/300" },
        { nome: "HP Pavilion", prezzo: 650, img: "https://picsum.photos/seed/computer/400/300" },
        { nome: "MacBook Air", prezzo: 999, img: "https://picsum.photos/seed/computer/400/300" }
    ],

    Smartphone: [
        { nome: "iPhone 14", prezzo: 899, img: "https://picsum.photos/seed/phone/400/300" },
        { nome: "Samsung Galaxy S23", prezzo: 799, img: "https://picsum.photos/seed/phone/400/300" },
        { nome: "Xiaomi Redmi Note", prezzo: 249, img: "https://picsum.photos/seed/phon/400/300" }
    ],

    Accessori: [
        { nome: "Cuffie Bluetooth", prezzo: 59.90, img: "https://picsum.photos/seed/accessory1/400/300" },
        { nome: "Powerbank 20000mAh", prezzo: 39.90, img: "https://picsum.photos/seed/accessory/400/300" },
        { nome: "Mouse Wireless", prezzo: 24.90, img: "https://picsum.photos/seed/accessory/400/300" }
    ],

    Abbigliamento: [
        { nome: "Felpa", prezzo: 49.90, img: "https://picsum.photos/seed/clothes/400/300" },
        { nome: "Sneakers", prezzo: 79.90, img: "https://picsum.photos/seed/clothes/400/300" },
        { nome: "Giacca", prezzo: 119.90, img: "https://picsum.photos/seed/clothes/400/300" }
    ],

    Casa: [
        { nome: "Lampada da tavolo", prezzo: 29.90, img: "https://picsum.photos/seed/home/400/300" },
        { nome: "Tostapane", prezzo: 34.90, img: "https://picsum.photos/seed/home/400/300" },
        { nome: "Aspirapolvere", prezzo: 149.90, img: "https://picsum.photos/seed/home/400/300" }
    ]
};


const productsBox = document.querySelectorAll(".products");
const cartList = document.getElementById("cartList");
const cartBtn = document.getElementById("cartButton");
const cartTotalEl = document.getElementById("cartTotal");
let cartCount = 0;
let cartTotal = 0;




cartBtn.addEventListener("click", function () {
  document.querySelector(".cart").classList.toggle("cartShow")
});


// Render prodotti

function renderProdotti() {
  
  for (const categoria in prodottiAll){
    console.log(categoria);
    let html = "";
    for (const p of prodottiAll[categoria]) {
        console.log(p);
        html += `
            <div class="card">
                <img src="${p.img}" alt="${p.nome}">
                <div class="name">${p.nome}</div>
                <div class="price">CHF ${p.prezzo}</div>
                <div class="controls">
                    <label>Q.tà <input class="qty" type="number" min="1" value="1"></label>
                </div>
                <button class="buy" data-nome="${p.nome}" data-prezzo="${p.prezzo}">Acquista ora</button>
            </div>
        `;
    }
    document.getElementById(categoria).innerHTML = html;
  }
  
}

function refreshCart(){
  cartList.innerHTML ="";
  cartTotal=0;
  cartCount=0;
  for (oggetto of carrelloAcquisti){
    addToCart(oggetto.nome,oggetto.prezzo,oggetto.quantita);
    cartTotal += oggetto.prezzo*oggetto.quantita;
    cartCount += oggetto.quantita;
  }
  cartTotalEl.textContent = "CHF " + cartTotal.toFixed(2);
}

// Aggiunge al carrello UNA riga con nome × quantità, subtotale e bottone "Rimuovi"
function addToCart(nome, prezzo, quantita) {
  const subtotal = prezzo * quantita;

  const li = document.createElement("li");

  // contenuto (testi)
  const riga = document.createElement("div");
  riga.className = "riga";
  riga.innerHTML = `<span>${nome}</span><span>CHF ${subtotal.toFixed(2)}</span>`;

  // bottone rimuovi (salviamo il valore da sottrarre nei dataset)
  const btnRemove = document.createElement("button");
  btnRemove.className = "remove";
  btnRemove.textContent = "Rimuovi";

  const btnAdd = document.createElement("button");
  const btnSub = document.createElement("button");
  btnAdd.className = "addSub";
  btnAdd.textContent = "+";
  btnSub.className = "addSub";
  btnSub.textContent = "-";

  const quantitaString = document.createElement("div");
  quantitaString.className = "quantitaString";
  quantitaString.innerHTML = `<span>${quantita}</span>`;


  // quando clicco Rimuovi:
  btnRemove.addEventListener("click", function () {
    modificaCarrello(nome,prezzo,quantita,null);
    refreshCart();
  });

  btnAdd.addEventListener("click", function () {
    modificaCarrello(nome,prezzo,quantita,1);
    refreshCart();
  });

  btnSub.addEventListener("click", function () {
    modificaCarrello(nome,prezzo,quantita,-1);
    refreshCart();
  });

  // monto tutto
  li.appendChild(riga);
  li.appendChild(btnSub);
  li.appendChild(quantitaString);
  li.appendChild(btnAdd);
  
  li.appendChild(btnRemove);
  cartList.appendChild(li);
}

function modificaCarrello(nome,prezzo,quantita,modifica){
  for (const index in carrelloAcquisti){
    console.log(index)
    const elemento = carrelloAcquisti[index];
    console.log(elemento)
    if (elemento.nome == nome){
      if (modifica == null){
        carrelloAcquisti.splice(index,1);
        continue
      }else if (quantita >1 ||modifica >0){
        elemento.quantita += modifica; 
      }
    }
  }
}

// Disegno i prodotti
renderProdotti();

// Prendo tutti i bottoni “Acquista ora” e assegno il click a ognuno
const buttons = document.querySelectorAll(".buy");
for (const btn of buttons) {
  btn.addEventListener("click", function () {
    const nome = btn.dataset.nome; // dataset (data-nome)
    const prezzo = parseFloat(btn.dataset.prezzo); // dataset (data-prezzo)
    const card = btn.parentElement;
    let quantita = parseInt(card.querySelector(".qty").value, 10);
    // verifico sempre che la quantità sia un numero e maggiore di 1
    if (isNaN(quantita) || quantita < 1) quantita = 1;

    console.log(quantita+" quantità");
    let nelCarrello = false;
    for (const elemento of carrelloAcquisti){
      
      if (elemento.nome == nome){
        nelCarrello = true;
        elemento.quantita +=quantita;
      }
    }
    
    if (!nelCarrello){
      carrelloAcquisti.push({ nome: nome, prezzo: prezzo, quantita: quantita });
    }
    //addToCart(nome, prezzo, quantita);
    refreshCart();
    // feedback
    btn.textContent = "Aggiunto ✓";
    setTimeout(() => { btn.textContent = "Acquista ora"; }, 700);
    console.log(carrelloAcquisti);
  });
}