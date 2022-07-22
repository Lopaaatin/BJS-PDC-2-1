// Задача 1

function parseCount(value) {
  if (isNaN(Number.parseInt(value))) {  // воспользовался в этой строке подсказкой сокурсника. В моей строке было if (Number.parseInt(value) == NaN) и она не работала, throw не запускался. Почему?
    throw new Error("Невалидное значение");
  }
  return Number.parseInt(value);
}


function validateCount(newValue) {
  try {
    return parseCount(newValue);
  } 
  catch(error) {
    return error;
  }
}

// Задача 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return (this.a + this.b + this.c);
  }

  getArea() {
    let p = this.getPerimeter()/2;
    return (Math.round(((p*(p - this.a)*(p - this.b)*(p - this.c)) ** 0.5)*1000))/1000;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch(error) {
    let tri = {};
    tri.getArea = function() {
      return "Ошибка! Треугольник не существует";
    }
    tri.getPerimeter = function() {
      return "Ошибка! Треугольник не существует";
    }
    return tri;
  }
}



