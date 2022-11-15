/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function () {
  this.obj={}
  this.key=0
  // add an item to the top of the stack
  this.push = function (value) {
    this.key++
return this.obj[this.key]=value
  };

  // remove an item from the top of the stack
  this.pop = function () {
    if (this.key === 0){
      return null 
    }
    var value = this.object[this.key]
    delete this.object[this.key]
    this.key--
    return value 
  };

  // return the number of items in the stack
  this.size = function () {
    return this.key 
  };
};

/**
 * Queue Class
 */
var Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();
 
  // called to add an item to the `queue`
  this.enqueue = function (value) {
   inbox.push(value)
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {
    outbox.pop()
  };

  // should return the number of items in the queue
  this.size = function () {
  return  inbox.value+outbox.value
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = Queue; // //
// // // // // // // // // /
