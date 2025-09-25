

// import { Hero } from './interfaces/Hero';
// import { Villain } from './interfaces/villain';
// console.log('Hola Mundo!!!!');

import { genericFunctionArrow } from "../generics/generics"
import { Villain, Hero } from "../interfaces"

// const allmight = new Hero('All Might',1,35);
// const izuku = new Hero('Izuku Midoriya',20,17);

// console.log(allmight.power)
// console.log(powers)

// const name: string ='Laura';
// printObject(123);
// printObject(new Date());
// console.log(genericFunction(3.1416).toFixed(2)  )
// console.log(genericFunctionArrow(name).toUpperCase()    )
// console.log(genericFunctionArrow(new Date()).getDate()  )

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 150
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel)