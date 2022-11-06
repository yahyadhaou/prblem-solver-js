// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.
function parse( data ){
    var arr=[]
    var res=0
    for (var i=0;i<data.length;i++){
    if(data[i]==='i'){
    res++}
    if(data[i]==='d'){
    res--}
    if(data[i]==='s'){
    res=res*res}
    if(data[i]==='o'){
    arr.push(res)}
    }
    return arr
      
    }