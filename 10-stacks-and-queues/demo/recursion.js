


function add(a,b) {
  if( b===1 ) {
    return a+b;
  }
  return add(a+1, b-1);
}

console.log(add(5,5));