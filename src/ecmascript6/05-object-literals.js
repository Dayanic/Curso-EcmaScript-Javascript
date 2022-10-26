// enahced object literals
//Esta es la antigua forma de retornar objetos desde una función
// function newUser(user, age, country) {
//     return {
//         user: user,
//         age: age,
//         country: country
//     };
// }

//Esta es la forma nueva de retornar un objeto desde una función
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("gndx", 34, "MX", 1));