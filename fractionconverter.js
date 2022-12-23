/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 * @function toFraction
 * @param {Number} number
 * @return {String}
 */
var toFraction = function (number) {
  var ch="" 
  var i=1
  var counter=1
  var dec=parseFloat(number.toString().split('.')[1])
if (number%1===0){
  return number+"/1"
}
   if(dec===5){
  return dec+"/"+Math.floor(number)
}
if(number<1){
 while(!dec===10){
dec*i
i++
counter++
 }
 return "1+/"+counter
}

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = toFraction;
// // // // // // // // // //





