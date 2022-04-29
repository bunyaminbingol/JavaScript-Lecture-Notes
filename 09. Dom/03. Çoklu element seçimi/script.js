// Multiple elements

// seçimi class name'e göre yapalım:
// document.getElementsByClassName()

    let val;
    // val = document.getElementsByClassName('list-group-item');
    // val = document.getElementsByClassName('list-group-item')[0];
    // val = document.getElementsByClassName('list-group-item')[2];

    // val = val[2]

    // val[1].style.color='blue';
    // val[1].style.fontSize='25px';

    // Listedeki her değere for ulaşmak
        // for(let i=0; i<val.length; i++){
        //     console.log(val[i].style.color='red');
        //     console.log(val[i].textContent='New item');
        // }

// seçimi etiket isimlerine göre yapalım:
// document.getElementsByTagName()

    // val = document.getElementsByTagName('li');
    // val = document.getElementsByTagName('a');

    // // 'ul' etiketi altındaki a etiketlerine ulaşmak istiyorum:

    // val = document.getElementById('task-list');
    // val = val.getElementsByTagName('a');
    
    // // yukardaki işlemin aynısı:

    // val = document.getElementById('task-list').getElementsByTagName('a');


// document.querySelectorAll()
// buradaki avantajlardan bir tanesi for kullanmadan forEach ile tüm etiketlere ulaşabiliriz.
    
    // val = document.querySelectorAll('li');
    // val.forEach(function(item){
    //     console.log(item);
    // });
    
// tüm elemanların isimlerini değiştirelim

    // val = document.querySelectorAll('li');
    // val.forEach(function(item, index){
    //     item.textContent = `${index} - hello`;
    // });

// index'i tekil olanların arka planını değiştirelim

    val = document.querySelectorAll('li:nth-child(odd');
    
    val.forEach(function(item){
        item.style.background='blue';
    });


console.log(val);