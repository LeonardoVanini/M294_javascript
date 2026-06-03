const API_URL = "https://69fc7d14fce564e25918255e.mockapi.io/messages";

const INBOX = document.getElementById("inbox-list");

const btnFROM = document.getElementById("btnFrom");
const btnPREVIEW = document.getElementById("btnPreview");
const btnSEND = document.getElementById("btnSend");
const btnUPDATE = document.getElementById("btnUpdate");
const btnDELETE = document.getElementById("btnDelete");

let mail = [];
let selectedMail = [];
let currentMail;

async function loadMail(filtro){
    try{
        if (document.getElementById("username").value ==""){
            console.error("campo vuoto");
            
            return;    
        }
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error("Errore nel caricare le mail (GET)");

        const temporaneo = await response.json();
        mail=[];
        if (filtro){
            temporaneo.forEach(element => {
                if (element.to ==document.getElementById("username").value){
                    mail.push(element);
                }
            });
            generateList(mail);
        }else{
            mail=temporaneo
        }

        
    }catch(error){
        console.error(error);
    }
}

function generateList(data){
    let html = `<div class="empty">Nessun messaggio.</div>`;
    let presente = false;
    for (const mail of data){
        if (!presente){
            presente = true;
            html=``;
        }
        html+=`<div class="message" data-id="${mail.id}">
                <div class="msg-left">
                    <input type="checkbox" class="msg-check">
                </div>

                <div class="msg-right">
                    <div class="msg-header">
                        <span class="msg-from">Da: ${mail.from}</span>
                        <span class="msg-date">${formatta(mail.at)}</span>
                    </div>
                    <div class="msg-body">
                        ${mail.body}
                    </div>
                </div>
            </div>`;
    }
    INBOX.innerHTML=html;
}

function formatta(data){//ho cercato su internet come fare
    return new Date(data).toLocaleString("it-IT",{
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

INBOX.addEventListener("change",(e)=>{
    const div = e.target.closest(".message");
    if(!div) return;

    const id = div.dataset.id;

    if (e.target.checked){
        selectedMail.push(id);
    }else{
        const index = selectedMail.indexOf(id);
        if (index != -1){
            selectedMail.splice(index,1);
        }
        
    }


});

btnPREVIEW.addEventListener("click", async (e)=>{
    const payload = {
        from: document.getElementById("username").value,
        to: document.getElementById("to").value,
        body: document.getElementById("body").value,
        at: new Date()
    };

    try{
        if(payload.from=="" ||payload.to==""||payload.body==""){
            return;
        }
        await createMail(payload);        
        document.getElementById("to").value="";
        document.getElementById("body").value="";
        await loadMail(false);
        currentMail=mail[mail.length-1];
        document.getElementById("preview").value=currentMail.body;
    }catch(error){
        console.error(error);
    }
});
btnSEND.addEventListener("click",async (e)=>{
    const payload = {
        body: document.getElementById("preview").value
    };

    try{
        await updateMail(currentMail.id,payload);
        document.getElementById("preview").value="";
        //loadMail();
    }catch(error){
        console.error(error);
    }
});

btnUPDATE.addEventListener("click",async (e) => {
    await loadMail(true);    
});
btnFROM.addEventListener("click",async (e)=>{
    await loadMail(true);
})

btnDELETE.addEventListener("click",async(e)=>{
    const confirmDelete = confirm("Sei sicuro di voler eliminare queste Mail?");
    if (!confirmDelete) return;
    if (selectedMail.length ==0){
        return;
    }
    for (element of selectedMail){
        await deleteMail(element);
    }
    loadMail(true);
    selectedMail=[];
});



async function createMail(payload) {
    const response = await fetch(API_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload)
    });

    if(!response.ok) throw new Error ("Errore creazione");
    
}

async function updateMail(id,payload) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (!response.ok) throw new Error("Errore modifica");  
}

async function deleteMail(id) {
    
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Errore nella cancellazione");
        
    }catch(error){
        console.error(error)
    }
}

generateList("")