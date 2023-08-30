function inAscOrder(arr) {
  let isInOrder = true;

  for (let i = 0; i < arr.length-1 || !isInOrder; i++) {
    if (arr[i] > arr[i+1]) {
        isInOrder = false;
        break;
    }
    
  }

  return isInOrder;
}