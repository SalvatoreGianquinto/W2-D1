/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* JavaScript ha diversi datatype (tipo di dato) tra cui:
STRING che vuol dire stringa quindi tratta una sequenza di caratteri (una parola) come ad esempio: "Giulio".
NUMBER è un dato di tipo numerico e vuol dire numero quindi tratta una cifra ad esempio: "42"
possono essere anche numeri decimali cioè numeri che si esprimono con il punti ad esempio: "3.47"
BOOLEAN che può assumere solo i valori true (vero) e false (falso)
NULL questo tipo di dato viene visualizzato (visto) nelle variabili che ho dichiarato che però non hanno un valore
UNDEFINED (indefinito) questo dato viene rilevato (visto) quando qualcosa non è stato stabilito
in una variabile a cui ho dato un valore*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Salvatore"
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12
let n2 = 20
addition = n1 + n2
console.log(addition)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Gianquinto"
console.log(myName)
/* se a "let myName" avessimo dato il costrutto const al posto di "let"
il valore non era più variabile e la console ti dava un errore, ad esempio: */
const number = 15
/* number = 18
questo cambiamento di const ti avrebbe dato l'errore nella console del browser */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4
subtraction = x - y
console.log(subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 === name2) /* false */
const equality = name1 === name2
console.log(!equality) /* true */
