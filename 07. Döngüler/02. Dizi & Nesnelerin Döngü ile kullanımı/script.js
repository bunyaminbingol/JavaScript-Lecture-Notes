let cars = ['bmw', 'mercedes', 'toyota', 'opel', 'tofaş']

// for(let i=0; i<cars.length; i++){
//     console.log(cars[i])
// }


// for-in

// for(let i in cars){
//     console.log(`index: ${i} value: ${cars[i]}`);
// }

// foreach

cars.forEach(function (item){    // tüm itemları item değişkenine atıyor
    console.log(item)
});