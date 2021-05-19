/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */

function destroyer(arr, ...args) {
  let stringArrayArgs = args;
  //Convert arguments into array
  //find matching values
  // getIndex and then get ocuring  item by index
  //use include and indexOf to get indexses of ocuring values
  let filterdArray = arr.filter((element) => {
    return stringArrayArgs.indexOf(element) === -1;
  });
  //use filter to destroy items on that index

  return filterdArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
