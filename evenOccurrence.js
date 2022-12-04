/**
 * Find the first item that occurs an even number of times in an arr.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items..
 *
 *
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 * @function evenOccurrence
 * @param {Array} arr
 * @return {Number}
*/
var evenOccurrence = function(arr) {
  var counter = {}, i;
  // build out our counter object
  for(i = 0; i < arr.length; i++) {
    counter[arr[i]] = !counter[arr[i]];
  }
  // return the first even occurrence
  for(i = 0; i < arr.length; i++) {
    if(!counter[arr[i]]) {
      return arr[i];
    } }
  return null;
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = evenOccurrence;
// // // // // // // // // //