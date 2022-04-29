const input = document.querySelector('#txtTaskName');
const form = document.querySelector('#addTaskForm');


// input.addEventListener('keydown', evetHandler);  // tuşa basıldığı an bu işlem gerçekleşir.
// input.addEventListener('keyup', evetHandler);    // tuşu bıraktığımız an bu işlem gerçekleşir.
// input.addEventListener('keypress', evetHandler);
// input.addEventListener('focus', evetHandler);  // kullanıcı input içerisine geldiği anda gerçekleşir.
// input.addEventListener('blur', evetHandler);  // kullanıcı input içerisine çıktığı anda gerçekleşir.
// input.addEventListener('cut', evetHandler);  // input içerisinde kesme işlemi yaptığımız anda gerçekleşir.
// input.addEventListener('paste', evetHandler);
input.addEventListener('select', evetHandler);  // input içerisinden herhangi bir şey seçtiğimiz zaman gerçekleşir.

form.addEventListener('submit', evetHandler);  


function evetHandler(e){
    console.log('event type '+ e.type);
    // console.log('key code : ' + e.keyCode);
    // console.log('value : '+ e.target.value);

    // e.target.style.backgroundColor = 'yellow'; // input üzerine geldiğimiz zaman arka planın rengini değiştiriz

    e.preventDefault(); // submit çalışacak fakat sayfa yenilenmeden çalışmasını istiyorsak buradan event'ın default özelliğini iptal ediyoruz.
}