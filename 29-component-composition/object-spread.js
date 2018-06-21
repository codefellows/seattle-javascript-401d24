let obj = {
  a: 'a',
  b: 'b',
  c: 'c'
}

let obj2 = {...obj};
obj2

let obj3 = Object.assign({}, obj, {d:'d'})
obj3;

let obj4 = Object.assign({}, obj, {c:'foo'});
obj4
obj


let objx = {...obj};
objx;

let {b,...allOfTheOthers} = obj;
b;
allOfTheOthers;


let xyz = JSON.stringify(obj);
xyz = JSON.parse(xyz);
xyz;