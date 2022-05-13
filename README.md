# Überblick Funktionen

## Was 
Funktionen sind einfach ein Codeblock, der eine bestimmte Aufgabe erfüllt und den ihr immer wieder verwenden könnt. 

<br>

## Aufbau
### function statement besteht aus:
1. Schlüsselwort `function` 
2. der Name der Funktion - könnt ihr frei wählen
3. `(parameter1, ...)` - hier könnt ihr Werte in die Funktion reingeben, mit denen ihr in der Funktion etwas "machen" könnt. Diese Parameter werden `arguments` genannt und sind Variablen, die nur in der Funktion vorhanden sind. Welchen Wert diese `arguments` haben, wird beim Starten der Funktion festgelegt.<br> 
***Beispiel -->*** ```console.log('Hello World')```, hier wird das Argument `"Hello World"` an die Funktion gegeben, die dann dafür sorgt, dass "Hello World" bei uns im Terminal erscheint...
4. `{ euer Code }`  mir den ***curly braces {}*** wird der Funktionskörper eingerahmt, hier drin ist euer Code, der die Arbeit erledingen soll.
5. `return` im Funktionskörper (siehe 4), können `return` Statemnts stehen, dass ist ein Wert der am Ende der Berechnug gzurückgegeben wird. Wichtig es kann immer nur ein Wert zurückgegeben werden, z.B. eine `number`, `boolean`, `array` oder `object` etc... <br> Funktionen funktionieren auch ohne `return`, allerdings wird dann kein 
Wert nach außen rausgegeben  
6. `Beispielfunktion()` nachdem ihr in 1-5 eure Funktion definiert habt, solltet ihr diese auch in eurem Code aufrufen, sonst wird sie nicht gestartet. Der Aufruf erfolgt mit dem Namen der Funktion und den runden Klammern. Wenn ihr Argumente (siehe 3) in eurer Funktion verwenden wollt, müssen diese hier übergeben werden. 


### Beispiele:
#### Funktion zur Addition zweier Zahlen:
```
function addition(zahl1, zahl2){
    let ergebnis = zahl1 + zahl2;
    return ergebnis
}
console.log(addition(3, 5));
``` 
*Ausgabe: 8*

<br>

#### Funktion die einen beliebigen String groß schreibt
```
function gross(meinString){
    let ergebnis = meinString.toUpperCase()
    return ergebnis
};
console.log(gross('ich bin klein'));
```
*Ausgabe: ICH BIN KLEIN*

<br>

#### Funktion die einen zufälligen Monat auswählt 
```
function monat(){
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
```
*Ausgabe:*
```
März
Juni 
```
*Erklärung: Die Funktion hat den Namen `monat`, in der Funktion gibt es eine Liste (`array`) aller Monate, es wird eine Zufallszahl von 0-11 erzeugt, da die Länge des `array` 12 ist. Im letzten Schritt wird die zufällige Zahl benutzt einen der Monate aus der Liste auszuwählen, dieser wird zurückgegeben. Beim Starten der Funtkion wird kein Argument übergeben, da die Funktion nichts von außen braucht, sondern immer nur eine zufälligen Monat zurückgibt...* 