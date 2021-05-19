/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */

function destroyer(arr, ...args) {
  //Convert arguments into array
  let stringArrayArgs = args;
  //compare argument array with values(values are in array) we want to destroy
  let filterdArray = arr.filter((element) => {
    //Use call back function on each number to see if it is true or false compared too value in array
    return stringArrayArgs.indexOf(element) === -1;
  });
  return filterdArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
