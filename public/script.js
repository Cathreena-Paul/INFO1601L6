
function alertFun(){
 alert("Hello !");
}

function confirmFun(){
  let didConfirm = confirm("Are you sure about that?");
  if(didConfirm){
    alert("You confirmed :)");
  }else{
   alert("You did not confirm :(");
  }
}

function promptFun(){
 let val = prompt("What is your name?");
 alert(`You've entered: ${val}`);
}


//get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);//get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
window.location.assign(url);//redirects the page to another url
}

window.onload = function(event){
console.log("Page has loaded");
//do other javascrip
}

var bob = 'bob';
const sally = 'sally';
    
console.log(window.bob === bob);//true
console.log(window.sally === sally);//false

var document = 'hello this is my variable';
console.log(document);//give the DOM object instead 
console.log(window.document === document)

const result = document.querySelector("#result");
result.innerHTML= '<h2>My Span<h2>'

console.log(result.style);//shows all the styles of the object

result.style.backgroundColor = 'lightgrey';
console.log(result.getAttribute('id'));//result

result.removeAttribute('id');//removes an attribute
result.setAttribute('id','result');//sets an attribute

result.classList.add('content');//adds a class
result.classList.remove('content');//removes a class

result.style.color = 'blue';

function myFun(){
  alert("hello");  
}

function myFun2(){
  console.log("myFun2 called");
}

//receives the event parameter from addEventListener high order function
function logEventType(event){
  console.log(event.type);
}

let myBtn = document.querySelector("#myBtn");

//attach myFun2 in addition to myFun to the click event of myBtn
myBtn.addEventListener("click", myFun2);

//There are other events such as mouseover and mouseout

//Any callback passed to addeventListener receives an event object
myBtn.addEventListener("mouseover", logEventType);//logs 'mouseover'
myBtn.addEventListener("mouseout", logEventType); // logs 'mouseout'
//these events will fire when the mouse pointer hovers/passes over the button

//function loaded ()

