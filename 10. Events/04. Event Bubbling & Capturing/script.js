const form = document.querySelector('#addTaskForm');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Event Bubbling (içten dışa doğru)
// bu kısım iç içe olan kısımlarda tüm olayları tetikler. Bunu düzeltmek için
// her bir click fonksiyonu içerisine e.stopPropagation() işlemini koyuyoruz.

    // form.addEventListener('click', function(e){
    //     console.log('form');
    //     e.stopPropagation();
    // })

    // cardBody.addEventListener('click', function(e){
    //     console.log('card Body');
    //     e.stopPropagation();
    // })

    // card.addEventListener('click', function(e){
    //     console.log('card');
    //     e.stopPropagation();
    // })

    // container.addEventListener('click', function(e){
    //     console.log('container');
    //     e.stopPropagation();
    // })


// Event Capturing (dıştan içe doğru)

    // form.addEventListener('click', function(e){
    //     console.log('form');
    //     e.stopPropagation();
    // }, true)

    // cardBody.addEventListener('click', function(e){
    //     console.log('card Body');
    //     e.stopPropagation();
    // }, true)

    // card.addEventListener('click', function(e){
    //     console.log('card');
    //     e.stopPropagation();
    // }, true)

    // container.addEventListener('click', function(e){
    //     console.log('container');
    //     e.stopPropagation();
    // }, true)


// Bunlar ile alakalı örnek yapalım. (listedeki iconlara bir şeyler atıyalım)

    // const deleteItems = document.querySelectorAll('.fa-times');

    // deleteItems.forEach(function(item){
    //     item.addEventListener('click', function(e){
    //         console.log(e.target);
    //         e.preventDefault();
    //     })
    // });
    
    // -------------------------------------------------------

    // const ul = document.querySelector('ul');

    // ul.addEventListener('click', function(e){
    //     console.log(e.target);
    //     e.preventDefault();
    // })

    // ------------------- Eleman Silme İşlemi ------------------------------------

    const ul = document.querySelector('ul');

    ul.addEventListener('click', function(e){
        
        if(e.target.className==='fas fa-times'){
            e.target.parentElement.parentElement.remove();

            e.preventDefault();
        }             
    });
