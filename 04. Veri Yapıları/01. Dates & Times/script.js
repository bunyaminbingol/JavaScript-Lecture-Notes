// Date Object

let d = new Date();
let birthday = new Date(1999, 4, 22);

    // Yaş Hesaplaması
    console.log(d.getFullYear() - birthday.getFullYear());

    // Set Methods -> Tarih Üzerindeki kısımları değiştirebiliriz.

    d.setFullYear(2025);
    d.setMonth(5);
    d.setDate(20);
    d.setHours(12);
    d.setMinutes(23);

    // Get Methods  -> Tarih bilgilerini geçeriz.

    console.log(d.getDate()); // Ayın kaçıncı günnde olduğumuzu gösterir.
    console.log(d.getDay());   // Haftanın kaçıncı gününde olduğumuzu gösterir (0 = pazar).
    console.log(d.getFullYear()); // yıl bilgisi gelir.
    console.log(d.getMonth()); // Ay bilgisi gelir (0 = Ocak).
    console.log(d.getHours()); // Saat bilgiisi gelir.
    console.log(d.getMinutes()); // dakika bilgiisi gelir.
    console.log(d.getSeconds()); // saniye bilgisi gelir.

    

console.log(d);
console.log(typeof d);