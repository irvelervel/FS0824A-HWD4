/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    // stesso valore
    return (n1 + n2) * 3
  } else {
    // valori diversi
    return n1 + n2
  }
}

crazySum(6, 8)
crazySum(8, 8)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n) {
  if (n > 19) {
    return Math.abs(n - 19) * 3
  } else {
    return Math.abs(n - 19)
  }

  //   return n - 19 > 0 ? n - 19 : -(n - 19)
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true
  }
}

boundary(400)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
  //   if (str.startsWith('EPICODE')) {
  //   if (str.charAt(0) === 'E' && str.charAt(1) === 'P' && ) {
  if (str.slice(0, 8) === 'EPICODE') {
    return str
  } else {
    return 'EPICODE' + str
  }
}

epify('EPICODERS') // EPICODERS
epify('stefano') // EPICODEstefano

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (num) {
  if (num % 3 === 0 || num % 7 === 0) {
    // CONTROLLATO
    console.log('multiplo di 3 o 7')
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  //   // convertiamo la stringa in un array
  //   const arrayFromStr = str.split('') // ['E', 'P', 'I', 'C', 'O', 'D', 'E']
  //   // invertiamo l'array
  //   arrayFromStr.reverse() // ['E', 'D', 'O', 'C', 'I', 'P', 'E']
  //   const invertedStr = arrayFromStr.join('')
  //   return invertedStr

  let invertedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    invertedStr = invertedStr + str[i]
  }
  return invertedStr // ritorno la stringa invertita
}

console.log(reverseString('EPICODE'))
console.log(reverseString('LE FUNZIONI SONO BELLISSIME!'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (longStr) {
  // spezzerei la stringa in un array, separandole per lo spazio
  const arrayOfWords = longStr.split(' ') // ['le', 'funzioni', 'sono', 'bellissime!']
  // ciclo l'array, e per ogni elemento (che è una parola) rendo l'iniziale maiuscola
  for (let i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] =
      arrayOfWords[i].charAt(0).toUpperCase() + // il primo carattere lo faccio maiuscolo
      arrayOfWords[i].slice(1, arrayOfWords[i].length) // ci appiccico il resto della parola
  }
  // arrayOfWords ora è -> ['Le', 'Funzioni', 'Sono', 'Bellissime!']
  const newString = arrayOfWords.join(' ')
  return newString
}

console.log(upperFirst('le funzioni sono bellissime!')) // Le Funzioni Sono Bellissime!
console.log(upperFirst('un altro test di prova!')) // Le Funzioni Sono Bellissime!

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
