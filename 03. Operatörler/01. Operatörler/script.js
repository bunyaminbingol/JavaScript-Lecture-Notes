// Operatörler

let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;

    // 1- Aritmetik Operatörler
    val = a+b;
    val = a-b;
    val = a*b;
    val = a/b;
    val = a%b

    val = d++;                 // arttırma operatörüdür, değeri sonradan ekler. yani c değerini val'e atar sonra arttırma işlemi yapar
    val = ++d;                 // arttırma operatörüdür, değeri önceden ekler. yani c değerini arttırır sonra val'e atar 
    val = d--;
    val = --d;

    console.log(val);
    console.log(typeof val);

    // 2- Atama Operatörler
    val = a;
    val +=a; // val = val + a
    val -= a;
    val *= a;
    val /= a;
    val %= a;

    console.log(val);
    console.log(typeof val);

    // 3- Karşılaştırma Operatörler
    val = a==b;
    val = b==c;
    val = a===b; // hem değer kontrolü hem de type kontorlü yapılıyor.
    val = a!=b;
    val = a!==b;
    val = a > b;
    val = b < a;
    val = b >= a;
    val = b <= a;

    console.log(val);
    console.log(typeof val);

    // 4- Mantıksal Operatörler

        // && (And)
        val = (a>b) && (a>c)

        // || (Or)
        val = (a>b) || (a>c)

        // ! (Not)
        val = !(a>b)

    console.log(val);
    console.log(typeof val);

