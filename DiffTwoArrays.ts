/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/

function diffArray(arr1, arr2) {
  var newArr = [];
  //compare arr2 to arr1
  //use for loop
  for (let i = 0; i < arr1.length; i++) {
    //If arr2 item at given index is not equal to arr1 item at index - 1 continue
    if (arr2.indexOf(arr1[i]) !== -1) {
      continue;
    }
    //else push item at arr1[i]
    //find elements that are only prensent in one array
    //push these elements into new array
    newArr.push(arr1[i]);
  }
  //same story with arr1
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) !== -1) {
      continue;
    }
    newArr.push(arr2[i]);
    console.log(arr2[i]);
  }
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
