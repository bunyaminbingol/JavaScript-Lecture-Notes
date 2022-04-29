// Müşteri Bilgileri

let ad = 'Bünyamin';
let soyad = 'Bingöl';
let tckn = '2991231230';
let sip_top = 205.6;
let cinsiyet = true; // erkek true, kadın false
let address = {
    city: 'Malatya',
    district: 'Battalgazi',
}
let hobiler = ['gezmek', 'kitap okumak', 'koşmak'];

// sipariş toplamı hesaplama

var order1 = '100';
var order2 = '150';
var toplam = (Number(order1) + Number(order2));
console.log(toplam);

// Sipariş toplamı hesaplama

var order3 = 100.2;
var order4 = 150.5;
var toplam = (order3 + order4);
console.log(toplam);

// aşağıdaki doğum yılına göre yaş hesaplama

const yearOfBirth = 1999;
var yas = new Date().getFullYear() - Number(yearOfBirth);
console.log(yas);

// String ifadenin karakter sayısını hesaplayalım

var course = "Modern Javascript Kursu";
console.log(course.length);
