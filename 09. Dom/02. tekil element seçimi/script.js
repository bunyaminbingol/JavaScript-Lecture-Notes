// single elements

// tek bir element seçmek için 
//-> document.getelementById()  kullanıyoruz

    // let val;

    // val = document.getElementById('header');
    // val = document.getElementById('header').id;
    // val = document.getElementById('header').className;

    // val = document.getElementById('header');
    // // val = val.id;

    // val.style.fontSize = '45px';
    // val.style.color = 'blue';
    // val.style.fontWeight = 'bold'

    // val = document.getElementById('header').innerText='Benim Sayfam';

    // val = document.getElementById('header').innerHTML='<b>Benim Sayfam</b>';


    // console.log(val);

// farklı bir kullanım deniyoruz
// document.querySelector()
// seçim yaparken => 
// '#' -> id 
// '.' -> class

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('div'));

// belli etiketleri çekip, değişiklikler yapmak:
document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='yellow';
document.querySelector('li:nth-child(2)').style.color='yellow';

document.querySelector('li:nth-child(3)').textContent='task item';

// Classı komple değiştirmek istersek:
//document.querySelector('li').className='list-group-item list-group-item-primary';

// var olan class'lara ekleme yapmak istersek:
document.querySelector('li').classList.add('active')