// --------Değişkenler--------
// var, let, const
// let ile var arasında sadece scop kavramı farkı var(bunu ileride öğrenceğiz)

// var ile değişken tanımlama
var age;  // değişkeni tanımladık
console.log(age)

age = 20;
console.log(age);

var fullname = "Bünyamin Bingöl";
console.log(fullname);

fullname = "malatya";
console.log(fullname);

// let ile değişken tanımlama (var ile tanımladığımız her değişkeni let ile de tanımlayabiliriz.)
let city = "Malatya";
console.log(city);

// const ile değişken tanımlama (const olarak tanımlamamızdaki maksat bunun bir sabit olduğunu belirtmek)
const email = "abc@gmail.com";
console.log(email);

email = "bcd@gmail.com"; // hata alırız çünkü değiştirilemez
console.log(email);