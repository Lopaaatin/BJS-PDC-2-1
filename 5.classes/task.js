// Задача 3

class Student {
  constructor(name) {
    this.name = name;
  }

  addMark(mark, subject) {
    if ((mark < 1) || (mark > 5)) {
      alert("Ошибка, оценка должна быть числом от 1 до 5");
    } 
    else if (this.marks == undefined) {
      this.marks = [
        [subject, mark],
      ];
    } 
    else {
      for (let i = 0; i < this.marks.length; i++) {
        if (this.marks[i][0] == subject) {
          this.marks[i].push(mark);
        } 
        else {
          this.marks.push([subject, mark]);
          break;
        }
      }
    }
  }

  getAverageBySubject(subject) {
    let average;
    for (let i = 0; i < this.marks.length; i++) {
      if (this.marks[i][0] == subject) {
        let sumSubjectMarks = 0;
        for (let j = 1; j < this.marks[i].length; j++) {
          sumSubjectMarks += this.marks[i][j];
        }
        average = sumSubjectMarks/(this.marks[i].length - 1);
      }
    }
    return average;
  } 


  getAverage() {
    let average;
    let marksSum = 0;
    let marksQuantity = 0;
    for (let i = 0; i < this.marks.length; i++) {
      for (let j = 1; j < this.marks[i].length; j++) {
        marksSum += this.marks[i][j];
      }
      marksQuantity += (this.marks[i].length - 1);
    }
    average = marksSum/marksQuantity;
    return average;
  }



  exclude(reason) {
      this.excluded = reason;
  }
}

// student = new Student("Иван Петров");
// student.addMark(3, "algebra");
// student.addMark(5, "algebra");
// student.addMark(1, "algebra");
// student.addMark(2, "history");
// student.addMark(5, "history");
// student.addMark(4, "geografy");
// student.addMark(1, "geografy");
// console.log(student.getAverage());

// console.log(student.marks);


// Задача 1

class PrintEditionItem {
  
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount; 
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(num) {
    if (num < 0) {
      this.state = 0;
    } else if (num > 100) {
      this.state = 100;
    }  else {
      this._state = num;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача 2

// 2.1
class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

// 2.2
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

// 2.3
  findBookBy(type, value) {
    let searchResult;
    for (let i=0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        searchResult = this.books[i];
      } else {
        searchResult = null;
      }
    }
    return searchResult;
  }

// 2.4

  giveBookByName(bookName) {
    let searchResult; 
    let foundBook = this.books.find(function(book) {
      return (book.name === bookName);
    })
    let index = this.books.findIndex(function(book) {
      return (book.name === bookName);
    })
    if (foundBook) {
      searchResult = foundBook;
      this.books.splice(this.books[index], 1);
    } else {
      searchResult = null;
    }
    return searchResult;
  }

}






// 2.5

// создаю библиотеку
const library = new Library('Библиотека несуществующих книг');

// создаю книги
let sosoNovel = new NovelBook("Иван Иванов", "Такой себе роман", 1993, 138);
let sosoFantastic = new FantasticBook("Петр Петров", "Такая себе фантастика", 1992, 139);
let sosoDetective = new DetectiveBook("Сидор Сидоров", "Такой себе детектив", 1919, 140);
let oneMoreNovel = new NovelBook("Василий Пупкин", "Еще один роман", 2005, 141);

// добавляю книги в библиотеку
library.addBook(sosoNovel);
library.addBook(sosoDetective);
library.addBook(sosoFantastic);
library.addBook(oneMoreNovel);

// пытаюсь найти книгу 1919 года
let searched = library.findBookBy('releaseDate', 1919);
console.log(searched);

// пытаюсь выдать книгу по названию
let given = library.giveBookByName("Такой себе роман");
console.log(given);
console.log(library.books);

// порчу книгу
given.state = 50;

// ремонтирую книгу
given.fix();

// Возвращаю книгу
library.addBook(given);




