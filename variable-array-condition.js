// variable 

var bottleColor = 'yellow'
var waterQuantity = 1;
var isFull = false;

// array 
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper') // 2
items.indexOf('logens') // -1
items.push('envelop');
items.push('watch')
items.pop();

// conditionals 
if (items.length >= 4) {
    console.log('you have too many stuff on your desk')
}
else if (items.length == 4) {
    console.log('you only have one hali items')
}
else {
    console.log('wow!! you have a clean desk')
}

