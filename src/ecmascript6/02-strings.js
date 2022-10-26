let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';//Esta es la forma de concatenar texto antes de EcmaScript6
//console.log(epicPhrase);

//Template literal (concatenar texto post EcmaScript6)
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//Multi-line strings
let lorem = 'esto es un string \n' + 'esto es otra linea';
let lorem2 = `Esta es una frase epica
 la continuacion de esa frase epica
 `;
 console.log(lorem);
 console.log(lorem2);