// console.log(this); // this diyerek de window'u görüntüleyebiliriz.

document.querySelector('#button1').addEventListener('click', getTextFile);
document.querySelector('#button2').addEventListener('click', getJSONFile);
document.querySelector('#button3').addEventListener('click', getApiFile);


// --------------------TEXT verisi------------------------------

// then kullanımı => eğer dosya varsa her hangi bir hata yoksa çalışacaktır.
    // function getTextFile(){
    //     fetch('textfile.txt').then(function(response){

    //         return response.text();
    //     }).then(function(data){
    //         console.log(data);
    //     });

    // }

// catch kullanımı => eğer dosya yoksa veya her hangi bir hata alıyorsak ve
// bu hatayı yazdırmak istiyorsak bu methodu kullanıyoruz.

    // function getTextFile(){
    //     fetch('textfile1.txt').then(function(response){

    //         return response.text();
    //     }).then(function(data){
    //         console.log(data);
    //     }).catch(function(err){
    //         console.log(err);
    //     });

    // }

// butona bastığımızda veriyi ekrana yazdırsın

    function getTextFile(){
        fetch('textfile.txt').then(function(response){

            return response.text();
        }).then(function(data){
            document.getElementById("output").innerHTML += data;
        });

    }   


// --------------------JSON verisi------------------------------

    function getJSONFile(){
        fetch('article.json').then(function(response){

            return response.json();
        }).then(function(articles){
            // console.log(articles[0].title);
            // document.getElementById("title").textContent = articles[0].title;
            
            let output = "<ul>";

            articles.forEach(function(article){

                output += `<li>Başlık: ${article.title} - İçerik: ${article.body}</li>`

            });

            output += "</ul>";

            document.getElementById("output").innerHTML += output;
            
        });

    }


// --------------------JSON verisi------------------------------

    function getApiFile(){
        fetch('https://api.github.com/users').then(function(response){

            return response.json();
        }).then(function(users){
            // console.log(articles[0].title);
            // document.getElementById("title").textContent = articles[0].title;
            
            let output = "<ul>";

            users.forEach(function(user){

                output += `<li>Kullanıcı Adı: ${user.login}</li>`

            });

            output += "</ul>";

            document.getElementById("output").innerHTML += output;
            
        });

    }