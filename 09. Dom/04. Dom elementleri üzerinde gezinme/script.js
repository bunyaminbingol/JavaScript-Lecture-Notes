let val;

let list = document.querySelector('.list-group')

val = list;

//           NOT: 
// üst element = 'parent'
// alt element = 'child'


val = list.childNodes; // bu bize li ile beraber text'leri de getiriyor
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // 3 = text
val = list.childNodes[1].nodeType; // 1 = elemet


val = list.children;  // bu bize sadece li'leri getiriyor.
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent = 'new item';
val = list.children[3].children;

val = list.firstChild;   // ilk eleman gelir
val = list.firstElementChild;   // ilk element gelir

val = list.lastChild;
val =  list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;  // list'in bir üst elementine ulaşabiliyoruz
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling;  // bir sonraki elemana ulaşmak için 
val = list.children[0].nextElementSibling; // bir sonraki elemente ulaşmak için

val = list.children[1].previousSibling;  // bir önceki elemana ulaşmak için 
val = list.children[1].previousElementSibling; // bir önceki elemente ulaşmak için

console.log(val);

// tüm elemanları ekrana yazdırmak

for(let i=0; i<list.children.length; i++){
    console.log(list.children[i]);
}

