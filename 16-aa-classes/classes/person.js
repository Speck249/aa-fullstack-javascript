/* const { type } = require("mocha/lib/utils"); */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(person) {
    if (!Array.isArray(person)) {
      throw new Error(`introducePeople only takes an array as an argument.`);
    } else {
      for (let item of person) {
        if (!item instanceof Person) {
          throw new Error(`All items in array must be Person class instances.`);
        } else {
          item.introduce()
        }
      }
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
