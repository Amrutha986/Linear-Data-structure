function findPairs(arr, num) {
    let pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === num) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }

  const arr = [1, 2, 3, 4, 5];
const num = 6;
const pairs = findPairs(arr, num);
console.log(pairs);