const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

btn.addEventListener('click', function(e){
   
    let val;

    val = e;

    val = e.target;   // Hangi butonun tıklandığını veriyor.
    val = e.target.id;  // Tıklanan objenin id değerini alıyoruz.
    val = e.target.classList;
    val = e.type;

    console.log(val);

    e.preventDefault();   // bir linke gitmediği için scrollbar'ı yukarı çekme işlemini engelliyor.
})


// btn.addEventListener('click', btnClick);
// btn2.addEventListener('click', btnClick);


// function btnClick(){
//     console.log('btn clicked');
// }