const regex = /(\d{4})-(\d{2})-(\d{2})/;//definimos una expresión regular
const matchers = regex.exec('2022-01-01');//validamos la expresión regular en un texto
console.table(matchers);//De esta forma podemos mostrar el resutado en una tabla