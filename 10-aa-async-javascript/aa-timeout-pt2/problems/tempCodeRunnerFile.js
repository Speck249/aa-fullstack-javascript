const sayGoodbye = () => console.log('bye');
const slowerGoodbye = postpone(sayGoodbye, 1750);
console.log(slowerGoodbye); // [Function]
slowerGoodbye(); // prints 'bye' after 1750 ms