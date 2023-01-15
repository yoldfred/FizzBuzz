alert('este es un programa que identifica los numeros del 0 asta el que usted guste, que solo sean divicibles con 3 (colocando "fizz"), 5 (colocando "Buzz") y los que sean divicibles entre ambos (colocando FizzBuzz)')

let input = Number(prompt('ingrece un numero para iniciar'))

for (let i = 0; i <= input; i++) {
  if (i % 3 === 0 && i % 5 != 0) {
    document.write("Fizz", "<br>");
  } else if (i % 5 === 0 && i % 3 != 0) {
    document.write("Buzz", "<br>");
  } else if (i % 3 === 0 && i % 5 === 0) {
    document.write("FizzBuzz", "<br>");
  } else {
    document.write(i, "<br>");
  }
}
