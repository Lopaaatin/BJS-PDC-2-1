// ---------- Задача 1

function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(","); // получаем правильный хэш
      let objectInCache = cache.find((item) => item.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
      if (objectInCache) { // если элемент найден
          console.log("Из кэша: " + cache[cache.indexOf(objectInCache)].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[cache.indexOf(objectInCache)].value;
      }
  
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash: hash, value: result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }


  // ----------- Задача 2

function debounceDecoratorNew(func, ms) {
  let timerId;
  function wrapper(...args) {
    if (wrapper.notFirstCall === undefined) {
      wrapper.notFirstCall = true;
      func.apply(this, args);
    } else {
          clearTimeout(timerId);       
          timerId = setTimeout(() => {           
           func.apply(this, args); 
          }, ms);
      };
  }
  return wrapper;
}


const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); 
setTimeout(upgradedSendSignal, 300); 
setTimeout(upgradedSendSignal, 900); 
setTimeout(upgradedSendSignal, 1200); 
setTimeout(upgradedSendSignal, 2300); 
setTimeout(upgradedSendSignal, 4400); 
setTimeout(upgradedSendSignal, 4500);


// --------------- Задача 3

function debounceDecorator2(func, ms) {
  let timerId;
  function wrapper(...args) {
    if (wrapper.notFirstCall === undefined) {
      wrapper.notFirstCall = true;
      wrapper.count = 1;
      func.apply(this, args);
    } else {
          wrapper.count += 1;
          clearTimeout(timerId);       
          timerId = setTimeout(() => {           
           func.apply(this, args); 
          }, ms);
      };
  }
  return wrapper;
}

const upgradedSendSignal2 = debounceDecorator2(sendSignal, 2000);
setTimeout(upgradedSendSignal2); 
setTimeout(upgradedSendSignal2, 300); 
setTimeout(upgradedSendSignal2, 900); 
setTimeout(upgradedSendSignal2, 1200); 
setTimeout(upgradedSendSignal2, 2300); 
setTimeout(upgradedSendSignal2, 4400); 
setTimeout(upgradedSendSignal2, 4500);

setTimeout(() => console.log(upgradedSendSignal2.count), 8000);
