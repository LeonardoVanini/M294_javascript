//https://mockapi.io/projects/69fc7d14fce564e25918255f

const API_URL = "https://69fc7d14fce564e25918255e.mockapi.io/watchList";

const form = document.getElementById("watchlistForm");
const title = document.getElementById("title");
const type = document.getElementById("type");
const platform = document.getElementById("platform");
const statusWatch = document.getElementById("statusWatch");
const rating = document.getElementById("rating");
const coverUrl = document.getElementById("coverUrl");
const notes = document.getElementById("notes");

const watchlistContainer = document.getElementById("watchlistContainer");

const submitBtn = document.getElementById("submitBtn");

let watchs = [];

let editingId = null;

async function loadWatch() {
    try{
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Errore nel caricamento (GET)");

        watchs = await response.json();

        generateList(watchs);

    }catch(error){
        console.log(error);
    }
}

function generateList(data){
    let html ="";
    for (const watch of data){
        html+=`
        <div class="watch-card" data-id="${watch.id}">

          <img src="${watch.coverUrl}" class="cover">

          <div class="card-content">

            <h3>${watch.title}</h3>

            <p><strong>Tipo:</strong> ${watch.type}</p>
            <p><strong>Piattaforma:</strong> ${watch.platform}</p>
            <p><strong>Stato:</strong> ${watch.status}</p>
            <p><strong>Rating:</strong> ⭐ ${watch.rating}</p>

            <p class="notes">
              ${watch.notes}
            </p>

            <div class="card-actions">
              <button class="edit">Modifica</button>
              <button class="delete">Elimina</button>
            </div>

          </div>

        </div>
        `
        watchlistContainer.innerHTML = html;
    }
}

watchlistContainer.addEventListener("click",(e)=>{
    const div = e.target.closest(".watch-card");
    if (!div) return;

    const id = div.dataset.id;

    if (e.target.closest('.edit')){
        editWatch(id);
    }

    if (e.target.closest(".delete")){
        deleteWatch(id);
    }
});

function editWatch(id){
    const watch = watchs.find(s => s.id === String(id));

    if(!watch) return;

    title.value = watch.title;
    type.value = watch.type;
    platform.value = watch.platform;
    statusWatch.value = watch.status;
    rating.value = watch.rating;
    coverUrl.value = watch.coverUrl;
    notes.value = watch.notes;

    editingId = String(id);
}

form.addEventListener("submit",async (e)=>{
    e.preventDefault();

    const payload ={
        title: title.value,
        type: type.value,
        platform: platform.value,
        status: statusWatch.value,
        rating: rating.value,
        coverUrl: coverUrl.value,
        notes: notes.value
    };

    try{
        if(editingId){
            await updateWatch(editingId, payload);
        }else{
            await createWatch(payload);
        }

        editingId = null;
        form.reset();
        loadWatch();
    }catch(error){
        console.log(error);
    }
});

async function createWatch(payload) {
    const response = await fetch(API_URL,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error("Errore creazione");
}

async function updateWatch(id,payload) {
    const response = await fetch(`${API_URL}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) throw new Error("Errore modifica");
}

async function deleteWatch(id) {
    const confirmDelete = confirm("Sei sicuro di volere eliminare questo studente?");
    if (!confirmDelete) return;
    try {
        const response = await fetch(`${API_URL}/${id}`,{
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Errore nella cancellazione");
        await loadWatch();
    }catch (error){
        console.log(error);
    }
}

loadWatch();

