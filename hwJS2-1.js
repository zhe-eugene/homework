"use strict"

let age = prompt(" Скільки вам років?", '');

let word;

if(age > 0 && age != undefined){

    if(age > 4 && age <= 20){
        word = "років";
        
    } else{
       let compare = age % 10;

        if(compare == 1 ){  
            word = "рік";
        }
    
        if(compare  > 1 && compare <= 4 ){  
            word = "роки";
        }
        
        if(compare > 4 || compare == 0){  
            word = "років";
        }
    }

}else{
    alert("Ви ввели від'ємне чи відправили пусте значення")
}

alert( "Вам " + age + ' ' + word);