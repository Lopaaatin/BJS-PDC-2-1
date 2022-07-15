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
    for (let i=0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        searchResult = this.books[i];
        this.books.splice(i, 1);
      } else {
        searchResult = null;
      }
    }
    return searchResult;
  }

}

// 2.5
const library = new Library('Библиотека несуществующих книг');

let sosoNovel = new NovelBook("Иван Иванов", "Такой себе роман", 1993, 138);
let sosoFantastic = new FantasticBook("Петр Петров", "Такая себе фантастика", 1992, 139);
let sosoDetective = new DetectiveBook("Сидор Сидоров", "Такой себе детектив", 1919, 140);
let oneMoreNovel = new NovelBook("Василий Пупкин", "Еще один роман", 2005, 141);

library.addBook(sosoNovel);
library.addBook(sosoDetective);
library.addBook(sosoFantastic);
library.addBook(oneMoreNovel);

// console.log(library.books);
let search = library.findBookBy('releaseDate', 1919);
console.log(search);
console.log(library.books);

