const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(firstStudent, secondStudent) {
    if (firstStudent.GPA > secondStudent.GPA) {
      return `${firstStudent.firstName} ${firstStudent.lastName} has the higher GPA.`
    } else if (firstStudent.GPA < secondStudent.GPA) {
      return `${secondStudent.firstName} ${secondStudent.lastName} has the higher GPA.`
    } else {
      return `Both students have the same GPA`
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}