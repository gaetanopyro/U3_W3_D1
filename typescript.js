//1) Quali sono i tipi primitivi principali in TypeScript?
var firstname = "Giacomo"; //stringa
var number = 30; // numero
var verita = true; //booleano
var valor; //null
//2)Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Gaetano";
var age = 30;
var studyTypescript = true;
//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => {  return "Ciao " + name }
var nam = "Mario";
var greet = function (nam) {
    return "Ciao " + nam;
};
console.log(greet("Mario"));
//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log(10 + 5);
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
// const function = (prezzo : number):  {
// }
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
function concatenaString(buon, pomeriggio) {
    var concatenata = buon + pomeriggio;
    return concatenata.length;
}
console.log(concatenaString("buon", "pomeriggio"));
//7)Cos'è un Type Union e come si scrive?
//un Union Type consente a una variabile di avere più di un tipo possibile
var phrase;
phrase = 50;
console.log(phrase);
//8)Crea una variabile che possa contenere un numero, null o undefined.
var number3;
number3 = 50;
console.log(number3);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
console.log(numbers);
var numbers1 = [1, 2, 3];
numbers1.push["numeri"];
console.log(numbers1);
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myArrayTupla = ["quanto", "sei", "nato", 8, 1994];
console.log(myArrayTupla);
var person = {
    firstname: "Giuseppe",
    lastname: "Verdi",
    age: 65,
};
var studenti = [
    { name: "Aldo", voto: 70 },
    { name: "Giovanni", voto: 99 },
    { name: "Giacomo", voto: 100 },
];
console.log(studenti);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myAuto = {
    marca: "Fiat",
    modello: "Grande Punto",
    anno: 2006,
    numeroPorte: 3,
    alimentazione: "diesel",
};
console.log(myAuto);
// 18) Cosa sono i Generics in TypeScript?
//I Generics permettono di definire funzioni, classi o interfacce che sono in grado di lavorare con diversi tipi di dati.Es:argomenti di tipo.
// 19) È possibile avere più tipi generici in un'interfaccia?
//si
// 20) Crea un'interfaccia generica per una risposta API.
