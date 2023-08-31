//Strings ------------------

export let firstName: string = 'Fernando';
let lastName: string = 'Herrera';

// console.log(firstName, lastName);

let fullName: string = firstName + ' ' + lastName;

console.log(fullName);

//Numbers -------------------

let number1: number = 10.5;
let number2: number = 20.3;

console.log( number1 + number2);


//Booleans ------------------

let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

//Los argumentos del console.log son dos valores uno de tipo string y un boolean
console.log('isActive', isActive);
console.log('isRunning', isRunning);

//La negacion - Me muestra el opuesto si esta en tru me muestra false - recordar que esto no es una asignacion simplemente le esta cambiando el valor en este momento pero no esta alterando el valor de la variable.
console.log('hasKids', !hasKids);

//Si yo quiero alterar el valor de la variable se realiza lo siguiente
isActive = !isActive;
console.log('isActive', isActive);

