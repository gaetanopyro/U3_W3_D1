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
// function concatenaString(buon: string, pomeriggio: string): string {
//   const concatenata: string = buon + pomeriggio;
//   return concatenata.length;
// }
// console.log(concatenaString("buon", "pomeriggio"));
//7)Cos'è un Type Union e come si scrive?
var phrase;
phrase = 50;
console.log(phrase);
//8)Crea una variabile che possa contenere un numero, null o undefined.
var number3;
number3 = 50;
console.log(number3);
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
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
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
//I Generics permettono di definire funzioni, classi o interfacce che sono in grado di lavorare con diversi tipi di dati.Es:argomenti di tipo.
// 19) È possibile avere più tipi generici in un'interfaccia?
//si
// 20) Crea un'interfaccia generica per una risposta API.
