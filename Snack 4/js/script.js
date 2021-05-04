// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

//variabile
var cognomiInvitati = ["Rossi", "Bianchi", "Verdi","Neri"];
var nomiInvitati = ["Mario", "Luca", "Giulia","Anna"];

//chiama funzione 
var elenco = generaNomiCognomi(nomiInvitati, cognomiInvitati);


function generaNomiCognomi (nomi,cognomi){
    console.log(nomi)
    var risultato = [""]
    var nomiRisultato =[""]
    var cognomiRisultato =[""]

    var indexNomi = 0;
    var indexCognomi = 0;
    for (var i=0; i<nomi.length; i++){
        // riordina in modo causale l'array dei nomi
        do{
            indexNomi = Math.floor(Math.random() * nomi.length);
        }while(nomiRisultato.includes(nomi[indexNomi]) == true)
        nomiRisultato.push(nomi[indexNomi]);      

        // riordina in modo causale l'array dei cognomi
        do{
            indexCognomi = Math.floor(Math.random() * cognomi.length);
        }while(cognomiRisultato.includes(cognomi[indexCognomi]) == true)
        cognomiRisultato.push(cognomi[indexCognomi]); 
    }
    //componi coppue
    for (var i=0; i<nomi.length+1; i++){
        risultato.push(cognomiRisultato[i] + " " + nomiRisultato[i])
    }
    return risultato;    
    
}
