const user = {username: 'gndx', age: 34, country: 'CO'};
const {username, ...values} = user;//De esta forma sacamos un objeto y los demás los incorporamos a la variable values.
console.log(username);
console.log(values);