
document.getElementById('button').addEventListener('click', loadJokes);

document.querySelector('.submit').addEventListener('click', checkForm);

function loadJokes(e){
   
    const xhr = new XMLHttpRequest();

    xhr.open('GET','./jokes.json', true);

    xhr.onload = function(){
        
        if(this.status === 200){

            const jokes = JSON.parse(this.responseText);
            let output = '';
            
            jokes.filter(function(number){
                if(number.id == document.querySelector('input[type="number"]').value){
                    output += `
                    <p>Your joke number ${number.id} is: </p>
                    <p>${number.joke}</p>
                    <br><br>
                `;
                }            
            });
            document.getElementById('jokes').innerHTML = output;
        } 
    }

    xhr.send();

    e.preventDefault();
}

function checkForm(e){

    let num = document.querySelector('input[type="number"]').value; 

    let expire =  setTimeout(function(){
        document.getElementById('p').remove();
    }, 3500);

    if(num == ''){
        document.getElementById('p').innerHTML = 'please enter a number';
        expire;  
        return false;
       
    } else if(num < 1 || num > 50){
        document.getElementById('p').innerHTML = 'only numbers between 1 and 50 are alowded'; 
        expire; 
        return false;
    }

    e.preventDefault();
}
