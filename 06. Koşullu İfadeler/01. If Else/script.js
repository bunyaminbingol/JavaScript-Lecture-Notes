const firstName = 'Bünyamin';
const age = 22;
const isStudent = true;
const school = 'university';

if(firstName === 'Bünyamin'){
    console.log('Merhaba Bünyamin');
}

if(age === 22){
    console.log('yaşınız 22');
}

if (isStudent){
    console.log('Merhaba Öğrenci');
}else{
    console.log('Merhaba işler nasıl')
}

if (age >= 18){
    if ((school == 'university') || (school == 'high school')){
        console.log('ehliyet alabilirsin')
    }
}

if (age > 0 && age<23){
    console.log('Yaşınız yeterli')
}