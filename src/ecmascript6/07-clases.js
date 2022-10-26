//Declarando una clase
class User{};
//const newUser = new User(); //De esta forma generamos una instancia de un objeto que en este caso es una clase

class user {
    //Se declaran los métodos
    gretting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log( gndx.gretting());
const bebeloper = new user();
console.log(bebeloper.gretting());

//Se genera un constructor
class user {
    constructor() {
        console.log('Nuevo Usuario');
    }
    gretting() {
        return 'Hello';
    }
}

const david = new user();

// Uso de this
class user {
    constructor(name) {
        this.name = name
    }

    //Métodos
    speak() {
        return 'Hello';
    }

    gretting() {
        return `${this.speak()} ${this.name}`;
    };
}

const ana = new user('Ana');
console.log(ana.gretting());

// Uso de setters and getters
class user {
    //Generación de constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //Generación de métodos
    speak() {
        return 'Hello';
    }
    gretting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);