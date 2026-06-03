let eta = 13;
console.log("Controllo età...")
if (eta >= 18){
    console.log("Accesso consentito")
}else if(eta >= 14){
    console.warn("Accesso limitato: contenuti riservati ai maggiorenni")
}else{
    console.error("Errore: utente troppo giovane per accedere!")
}