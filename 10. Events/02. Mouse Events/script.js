const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


// click

    // btn.addEventListener('click', eventHandler);
    // ul.addEventListener('click', eventHandler);


// double click

    // btn.addEventListener('dblclick', eventHandler);

// mouse down

    // btn.addEventListener('mousedown', eventHandler); // butona tıkladığımız an gerçekleşir

// mouse up

    // btn.addEventListener('mouseup', eventHandler); // butonu bıraktığımız an gerçekleşir.

// mouseenter

    // ul.addEventListener('mouseenter', eventHandler); // alana girdiği an gerçekleşir.

// mouseleave

    // ul.addEventListener('mouseleave', eventHandler); // alandan çıktığı an gerçekleşir.

// mouseover

    // ul.addEventListener('mouseover', eventHandler); // alana girdiği an ve alan içinde farklı objelerde gerçekleşir.

// mouseout

    // ul.addEventListener('mouseout', eventHandler); // alandan çıktığı an ve alan içinde farklı oblerede gerçekleşir.

// mouse move

    const h5 = document.querySelector('h5');
    ul.addEventListener('mousemove', eventHandler); // alan içerisinde mouse oynadığı sürece gerçekleşir


function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent = `mouse X : ${event.offsetX } mouse Y : ${event.offsetY}`
}

