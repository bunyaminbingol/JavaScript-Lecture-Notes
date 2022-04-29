function yasHesapla(dogumYili){
    return 2021 - dogumYili;
}

let age1 = yasHesapla(1999);
let age2 = yasHesapla(1989);
let age3 = yasHesapla(2002);

console.log('Yaş 1: ', age1);
console.log('Yaş 2: ', age2);
console.log('Yaş 3: ', age3);


function emekliligeKacYilKaldi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;
    
    if(emeklilik>0){
        console.log(`${isim} emekli olmanıza ${emeklilik} yıl kaldı`);
    }else{
        console.log('Zaten emekli olmuşsunuz.');
    }
}

emekliligeKacYilKaldi(2012, 'Bünyamin');
emekliligeKacYilKaldi(1975, 'Sena');
emekliligeKacYilKaldi(1945, 'Ahmet');