// 2. Faça um programa que entre com cinco números e imprima o quadrado de cada número.

var power = function (base, exp) {
  var pow = 1;
  for (var i = 0; i < exp; i++) {
    pow = pow * base;
  }
  return pow;
}

console.log(power(3, 2))
console.log(power(4, 2))
console.log(power(5, 2))
console.log(power(6, 2))
console.log(power(7, 2))