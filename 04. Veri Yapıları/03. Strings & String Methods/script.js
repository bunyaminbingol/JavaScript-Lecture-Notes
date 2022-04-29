// Strings 

const firstName = 'Bünyamin';
const lastName = "BİNGÖL";
let hobbies = 'sinema, spor, kitap, yazılım';
const age = 22;

let val;



    // string concatenation
    val = firstName + ' ' + lastName;
    val = 'Bünyamin';
    val += ' BİNGÖL';

    val = 'Benim adım ' + firstName + ' ' + lastName + ' ve yaşım ' + age + " Malatya'da yaşıyorum";

    // string concat
        // val = firstName.concat(' ', lastName);

    // string uppercase - lowercase
        // val = val.toUpperCase();  // tüm harfleri büyük yapar.
        // val = val.toLowerCase();  // tüm harfleri küçük yapar.

        // val = val[0];  // string yapısı bir dizi olarak düşünülebilir.

        // val = val.indexOf('y') // val içerisinde değer arama ve bunun konumunu gösterme (-1 yazarsa bu ifadeni olmadığını gösterir.)

    // string replace
    val = '      ' + val.replace('Bünyamin', 'Bahadır') + '        ';

    // trim 
    val = val.trim();  // baştaki ve sondaki boşlukları silmek için kullanılır.

    // substring
        // val = val.substring(0, 5);  // 0 ile 5 arasındaki indexleri alır.

    // slice
        // val = val.slice(5, 8); // 5 ile 8 arasındaki indexleri alır.

    // string length
        //val = val.length;

    // split
    val = hobbies.split(',')  // virgülden ayırma işlemi yapma.


console.log(val);
console.log(typeof val);