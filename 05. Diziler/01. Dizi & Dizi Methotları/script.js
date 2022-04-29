let names = ['Bünyamin', 'Merve', 'Hasan'];
let years = [1999, 2000, 2001];
let mix = ['Bünyamin', 'bingöl', 1999, null, undefined, ['sinema', 'kitap']];


// get array item
console.log(names[0]);
console.log(names[3]);

// set array item
names[0] = 'emel';

// add item
years.push(1986);  // Bu işlem dizinin sonuna ekleme yapıyor.
years.unshift(1);  // Bu işlem dizinin başına ekleme yapıyor.

// remove item
years.pop();      // Bu işlem dizinin sonundan silme yapıyor.
years.shift();    // Bu işlem dizinin başından silme yapıyor.

// index of
let index = names.indexOf('Merve');
console.log('index: ', index);

// reverse
names.reverse(); // diziyi ters çevirir

// sort
years.sort();

// concat
let val = years.concat(names);
console.log(val);



console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);

console.log(mix);