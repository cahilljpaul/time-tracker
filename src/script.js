const button = document.querySelector('.primary');
const timer = document.querySelector('#timer'); 

let seconds = 0;

button.addEventListener("click", function() {
    console.log("Timer Started");

setInterval(function(){
    seconds++;
    timer.textContent = seconds;
}, 1000);
timer.textContent = "Timer Started";
});



