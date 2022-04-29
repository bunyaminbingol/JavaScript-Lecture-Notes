// LOCAL STORAGE
// Local Storage tarayıcı kapansa bile bilgileri tutar

let val;

// set item
    
    const firstName = localStorage.setItem('firstName', 'Bünyamin');
    const lastName = localStorage.setItem('lastName', 'Bingöl');
    let hobies = ['sinema', 'araba', 'gezmek']

// get item

    val = localStorage.getItem('firstName');
    val = localStorage.getItem('lastName');


// remove item

    // localStorage.removeItem('firstName');
    // localStorage.removeItem('lastName');


// clear

    // localStorage.clear();   // bütün elemanları silmek için kullanılır.


// set array to storage

    localStorage.setItem('hobies', JSON.stringify(hobies));

    val = JSON.parse(localStorage.getItem('hobies'));

console.log(val);
console.log(localStorage);




// SESSION STORAGE
// Session Storage session sonlandırılğı zaman bilgileri siler hafızasından.

// const city = sessionStorage.setItem('city', 'Malatya');
// const country = sessionStorage.setItem('country', 'Türkiye')

// console.log(sessionStorage);