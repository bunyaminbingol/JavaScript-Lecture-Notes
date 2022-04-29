document.querySelector('#btnAddNewTask').addEventListener('click', findUser);


function findUser(){
    var UserName = document.getElementById('txtTaskName').value;
    
    
    fetch(`https://api.github.com/users/${UserName}/repos`).then
    (function(response){

        return response.json();
    }).then(function(users){

        let output = "<ul>";

        users.forEach(function(user){

            output += `<li>Course Name : 
            <a href = ${user.html_url}>${user.name}</a></li>`

        });

        output += "</ul>";

        document.getElementById("output").innerHTML = output;
    });

}


