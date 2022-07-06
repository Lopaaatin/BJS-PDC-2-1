


function compareArrays(arr1, arr2) {
  let result;

  result = (arr1.length === arr2.length) && arr1.every(isTheSame);

  function isTheSame(n) {
    let i = arr1.indexOf(n);
    return n === arr2[i];
  }
  return result;
}


function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((multipleOfThree) => multipleOfThree % 3 === 0).filter((posNum) => posNum > 0).map((tenTimes) => tenTimes*10);
  return resultArr;
}
