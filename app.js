'use strict';
console.log('app file is connected');

var your_drink = 'Iced americanno!';

var reverse = function(s) {
  return s.split('').reverse().join('');
};

var barista = {
  str1: 'code and order an ',
  str2: reverse(' rof su nioj emoC '),
  str3: 'coffee and ',
  request: function(preference) {
    return 'Secret Password:' +
    this.str2 + this.str3 + this.str1 + preference ;
  }
};

var results = barista.request(your_drink);

console.log(results);

let renderToSection = document.getElementById('coffeeOutput');
let h1Element = document.createElement('h1');
h1Element.textContent = results;
renderToSection.appendChild(h1Element);
