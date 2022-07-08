function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const Student1 = new Student("Иван", "М", "19");
const Student2 = new Student("Мария", "Ж", "20");
const Student3 = new Student("Михаил", "М", "21");
const Student4 = new Student("Олеся", "ж", "22");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined) { 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...fewMarks) {
  if(this.marks === undefined) { 
    this.marks = fewMarks;
    } else {
      this.marks.concat(fewMarks);
    }
}

Student.prototype.getAverage = function() {
  let arraySum = 0; 
  for (let i = 0; i < this.marks.length; i++ ) {
    arraySum += this.marks[i];
  }
  let average = arraySum/this.marks.length;
  return average;
}


Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}








// ваш код для остальных методов