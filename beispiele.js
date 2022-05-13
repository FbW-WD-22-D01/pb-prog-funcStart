//BEISPIEL 1
function addition(zahl1, zahl2){
    let ergebnis = zahl1 + zahl2;
    return ergebnis
}
console.log(addition(3, 5));



//BEISPIEL 2
function gross(meinString){
    let ergebnis = meinString.toUpperCase()
    return ergebnis
};
console.log(gross('ich bin klein'));




// BEISPIEL 3
function monat(){
    // Die Monatsliste gibts nur innerhalb der Funktion
    let monatsliste = [
        'Jan',
        'Feb',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'Aug',
        'Sept',
        'Okt',
        'Nov',
        'Dez'
    ];
    let zufall = Math.floor(Math.random()*monatsliste.length);
    return monatsliste[zufall];
};
console.log(monat());
console.log(monat());

//console.log(monatsliste); //das funktiniert nicht, da die Monatsliste nur in der Funktion verfügbar ist