//variabili
var array = [];
var dispari = false;

//funzione per verificare se il numero è dispari
function isOdd (num) {
    var risultato = false;
    if (numeroUtente % 2 != 0){
        risultato = true;
    }
    return risultato;
}

//chiedi sei volte di inserire un numero
for(i=0; i<7; i++){
    do{
        var numeroUtente = parseInt(prompt("inserisci " + i + "° numero"))

    }while(isNaN(numeroUtente))
    
    if (isOdd(numeroUtente)==true){
        array.push(numeroUtente);
    }
    
}

//chiama la funzione per stabilire se è dispari

// Stampa l'array nella console.
console.log(array)