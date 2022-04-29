// Tür Dönüşümleri

let num1 = "5";
let num2 = '10';
console.log(num1 + num2);
console.log(typeof num1);

let num3 = Number("5");
let num4 = Number('10');
console.log(num3 + num4);
console.log(typeof num3);

let val;

    // number to string
    val = String(10);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // bool to string
    val = String(true);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // array to string
    val = String([1,2,3,4]);
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // toString() fonksiyonu
    val = (167).toString();
    console.log(val);
    console.log(typeof val);
    console.log(val.length);

    // String to Number
    val = Number('19');
    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed(3));

    // Bool to Number
    val = Number(true);
    val = Number(false);
    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed(3));

    // parseInt & parseFloat
    val = parseInt('10'); 
    val = parseInt('10.5'); // "."dan sonraki ifadeyi almaz, tam sayı olarak çıkartır karşımıza
    val = parseFloat('10.5')
    console.log(val);
    console.log(typeof val);
    console.log(val.toFixed(3));
