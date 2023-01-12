/*
fetch('items.json').then(function (response) {
    return response.json();

}).then(function (json) {
    items = json;
    console.log('Dati: ', items.ring[1])
}).catch(function (err) {
    console.log('Fetch problem: ' + err.message);
});
*/

/*
fetch("./items.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
*/

import items from './items.json' assert {type:"json"};
console.log(items);


