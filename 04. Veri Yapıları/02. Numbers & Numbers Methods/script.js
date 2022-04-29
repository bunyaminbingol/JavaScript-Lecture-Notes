// Numbers

let val;

val = 10;
// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('10a')

val = isNaN('10') // Bu şekilde bir değerin NaN olup olmadığını öğreniyoruz.

var num = 10.123456789;
val = num.toPrecision();  // Baştan itibaren kaç rakamlık sayı istersek onu getirir.
val = num.toFixed(2);     // Noktadan itibaren kaç rakamlık sayı istersek onu getirir.


val = Math.PI; // Math ile methotlara ulaşabiliriz.
val = Math.round(2.4);  // en yakın sayısa yuvarlar.
val = Math.ceil(2.3); // yukarı sayıya yuvarlanır.
val = Math.floor(2.3); // aşağı sayıya yuvarlanır.
val = Math.sqrt(49); // Hangi sayının karesi olduğunu verir.
val = Math.pow(2, 3); // üstel ifadeler için kullanılır.
val = Math.abs(-100); // Mutlak değer alma işlemi için kullanılır.
val = Math.min(1,2,3,4,5); // bu sayılar arasındaki min sayıyı veirir.
val = Math.max(4,5,767,843); // bu sayılar arasındaki max sayıyı veirir.
val = Math.random(); // 0 - 1 aralığında rastgele sayı üretir.

console.log(val);
console.log(typeof val);