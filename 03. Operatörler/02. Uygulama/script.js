// 1- Can ve Ada'nın boy ve kg bilgilerini alın
// 2- Alınan bilgilere göre kilo indekslerini hesaplayın (kişinin boyu / boy uzunluğunun karesi)
// 3- Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4- Aşağıdaki tabloya göre can ve ada hangi gruba griyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

IndexAda = (kgAda) / (heightAda*heightAda);
IndexCan = (kgCan) / (heightCan*heightCan);

console.log(IndexAda.toFixed(2), IndexCan.toFixed(2)); // toFixed() yuvarlama işlemini yapıyor.

let adaHigherIndex = IndexAda > IndexCan;
let canHigherIndex = IndexCan > IndexAda;

console.log("Ada'nın kilo indeksi Can'ın kilo indeksinden daha büyük: "+ adaHigherIndex);
console.log("Can'ın kilo indeksi Ada'nın kilo indeksinden daha büyük: "+ canHigherIndex);

let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 29.9);
let AdaKilolu = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30) && (IndexAda <= 34.9);

let CanZayif = (IndexCan >= 0) && (IndexCan <= 18.4);
let CanNormal = (IndexCan >= 18.5) && (IndexCan <= 29.9);
let CanKilolu = (IndexCan >= 25) && (IndexCan <= 29.9);
let CanSisman = (IndexCan >= 30) && (IndexCan <= 34.9);

console.log("Ada zayıf: "+AdaZayif);
console.log("Ada'nın kilosu normal: "+AdaNormal);
console.log("Ada kilolu: "+AdaKilolu);
console.log("Ada şişman: "+AdaSisman);

console.log("Can zayıf: "+CanZayif);
console.log("Can'ın kilosu normal: "+CanNormal);
console.log("Can kilolu: "+CanKilolu);
console.log("Can şişman: "+CanSisman);