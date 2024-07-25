/*********************************************************************t*
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

function getFullName(person) {
  const personKeys = Object.keys(person);
  let firstName, lastName;

  for (let i = 0; i < personKeys.length; i++) {
    if (typeof person[personKeys[i]] === 'string') {
      if (firstName === undefined) {
        firstName = person[personKeys[i]];
      } else {
        lastName = person[personKeys[i]];
        break;
      }
    }
  }

  return `${firstName} ${lastName}`;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
