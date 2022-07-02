// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  for (let i=1; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  max = arr[0];
  for (let i=1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  sum = 0;
  for (let i=0; i < arr.length; i += 1) {
    sum = sum + arr[i];
  }

  avg = (Math.round((sum*100)/(arr.length)))/100;

  return { min: min, max: max, avg: avg };
}



// Задание 2

function worker(arr) {
  let sum;
  sum = 0;
  for (let i=0; i < arr.length; i += 1) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (let i=1; i < arrOfArr.length; i += 1) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max, min, distance;
  
  max = arr[0];
  for (let i=1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  min = arr[0];
  for (let i=1; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return distance = Math.abs(max - min);
}
