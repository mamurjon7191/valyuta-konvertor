'use strict';

let firstSelect = document.querySelector('.first');
let secondSelect = document.querySelector('.second');
let firstInput = document.querySelector('.firstInput');
let secondInput = document.querySelector('.secondInput');
let btn = document.querySelector('.btn1');

let obj;
let html;
let map;
let a;
let c;

let currency = function () {
  fetch(
    'https://api.fastforex.io/fetch-all?api_key=cd819107bf-af7afd5e1e-r9qw6m'
  )
    .then(function (a) {
      return a.json();
    })
    .then(function (b) {
      obj = b.results;
      map = new Map(Object.entries(obj));
      for (const [key, value] of Object.entries(obj)) {
        html = `<option value="${key}">${key}</option>`;
        firstSelect.insertAdjacentHTML('beforeend', html);
        secondSelect.insertAdjacentHTML('beforeend', html);
      }
      firstSelect.addEventListener('change', function () {
        let chiqar1 = firstSelect.value;
        a = map.get(chiqar1);
        // console.log(a);
      });
      secondSelect.addEventListener('change', function () {
        let chiqar2 = secondSelect.value;
        c = map.get(chiqar2);
        // console.log(b);
      });
    });
};
currency();

btn.addEventListener('click', function () {
  let r = +firstInput.value;
  secondInput.value = ((c / a) * r).toFixed(2);
});
