const taskList = document.querySelector('#task-list');

// removing element

    // taskList.remove();
    // taskList.childNodes[7].remove();
    // taskList.children[0].remove();
    // taskList.removeChild(taskList.children[0]);

// removing attribute

    // taskList.children[0].removeAttribute('class');

    // for(let i=0; i<taskList.children.length; i++){
    //     taskList.children[i].removeAttribute('class');
    // }

// replacing elements

    // const cardHeader = document.querySelector('.card-header');
    
    // create element
    // const h2 = document.createElement('h2');
    // h2.setAttribute('class','card-header');
    // h2.appendChild(document.createTextNode('My List'));

    // const parent = document.querySelector('.card');
    // parent.replaceChild(h2, cardHeader)
    
    // console.log(cardHeader);

//  replacing Classes

    let val;

    link = taskList.children[0].children[0];

    // val = link.className;
    // val = link.classList;
    // val = link.classList[0];

    link.classList.add('new');
    link.classList.remove('new');

//  replacing Attributes

    val = link.getAttribute('href');
    val = link.setAttribute('href', 'https://google.com')
    
    val = link.hasAttribute('href');


console.log(val);