for (var i = 1; i < 101; i++) {
  if (i % 3 == 0) console.log('Coca');
  else if (i % 5 == 0) console.log('Buzz');
  else if (i % 15 == 0) console.log('CocaCola');
  else console.log(i);
}
var conflict = false;