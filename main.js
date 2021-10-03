var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('start');
var mainContainer = document.querySelector('.main-container');

var timerEl = document.querySelector('#timer');

var countDown =5;




function starstartQuiz(){
    startButton.addEventListener("click",()=>{
        setInterval(timerQuiz, 1000);
        question();
    });
}
function timerQuiz(){
countDown--;
timerEl.innerHTML =countDown;
if(countDown<=0){
    clearInterval(timerQuiz);
    timerEl.innerHTML = 0;
}
}

function question(e){
    mainContainer.innerHTML ="";
    var h2El = document.createElement('h2');
    h2El.textContent =" Commonly used data type DO NOT include:"
    h2El.setAttribute("style"," text-align: center;")

//  its start form here;
    var arr = ['1.string', '2.booleans', '3.alerts', '4.numbers'];
    // var cont = document.getElementById('container');

    // create ul element and set the attributes.
    var ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 0; margin: 0;');
    ul.setAttribute('id', 'theList');

    for (i = 0; i <= arr.length - 1; i++) {
        var li = document.createElement('button');     // create li element.
        li.innerHTML = arr[i]; 
          // assigning text to li using array value.
          
        li.setAttribute('style', 'display: block;', 'text-align: center;');    // remove the bullets.

        ul.appendChild(li);     // append li to ul.
        
    }
    mainContainer.appendChild(h2El);
    mainContainer.appendChild(ul);       // add list to the container.
 
 
    event.preventDefault();
   
}

   
starstartQuiz();
