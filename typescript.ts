//1) Quali sono i tipi primitivi principali in TypeScript?
let firstname: string = "Giacomo"; //stringa
let number: number = 30; // numero
let verita: boolean = true; //booleano
let valor: null; //null

//2)Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
let myName: string = "Gaetano";
let age: number = 30;
let studyTypescript: boolean = true;

//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => {  return "Ciao " + name }
let nam: string = "Mario";

const greet = (nam: string) => {
  return "Ciao " + nam;
};
console.log(greet("Mario"));

//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => {  return a + b }
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(10 + 5);

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

// const function = (prezzo : number):  {

// }

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
function concatenaString(buon: string, pomeriggio: string): number {
  const concatenata: string = buon + pomeriggio;
  return concatenata.length;
}
console.log(concatenaString("buon", "pomeriggio"));

//7)Cos'è un Type Union e come si scrive?
//un Union Type consente a una variabile di avere più di un tipo possibile

let phrase: string | number;
phrase = 50;
console.log(phrase);

//8)Crea una variabile che possa contenere un numero, null o undefined.

let number3: number | null | undefined;

number3 = 50;
console.log(number3);

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type DayWeek = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:

// const numbers = [1, 2, 3]
let numbers: number[] = [1, 2, 3];
console.log(numbers);

let numbers1: (number | string)[] = [1, 2, 3];
numbers1.push["numeri"];
console.log(numbers1);

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
let myArrayTupla: [string, string, string, number, number] = ["quanto", "sei", "nato", 8, 1994];

console.log(myArrayTupla);

// 12) Qual è la differenza tra type e interface?
//Si usa TYPE quando si vuole creare alias, invece si usa INTERFACE quando si stanno definendo gli oggetti.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Contact {
  firstname: string;
  lastname: string;
  age: number;
}

let person: Contact = {
  firstname: "Giuseppe",
  lastname: "Verdi",
  age: 65,
};

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface User {
  email: string;
  telefono?: string;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Student {
  name: string;
  voto: number;
}

let studenti: Student[] = [
  { name: "Aldo", voto: 70 },
  { name: "Giovanni", voto: 99 },
  { name: "Giacomo", voto: 100 },
];
console.log(studenti);

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
}
interface Auto extends Veicolo {
  numeroPorte: number;
  alimentazione: "benzina" | "diesel" | "elettrico";
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
let myAuto: Auto = {
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
