//   <!-- RESERVATION --> / quickTab

const ticketTab = document.getElementById("ticketTab");
const hotelTab = document.getElementById("hotelTab");

// Add click event listener to each tab element
ticketTab.addEventListener("click", () => {
  // Change background color of clicked tab to #2B2A27
  ticketTab.style.backgroundColor = "#2B2A27";
  // Change background color of other tab to #000
  hotelTab.style.backgroundColor = "#000";
});
   
hotelTab.addEventListener("click", () => {
  hotelTab.style.backgroundColor = "#2B2A27";
  ticketTab.style.backgroundColor = "#000";
});


//   <!-- RESERVATION --> / quantityTag
const adultPlus = document.querySelector("#adultPlus"),
      adultMinus = document.querySelector("#adultMinus"),
      adultNum = document.querySelector("#adultNum"),
      childrenPlus = document.querySelector("#childrenPlus"),
      childrenMinus = document.querySelector("#childrenMinus"),
      childrenNum = document.querySelector("#childrenNum");

let adultCount = 1;
let childrenCount = 1;

adultPlus.addEventListener("click", ()=>{
  adultCount++;
  adultCount = (adultCount < 10) ? "0" + adultCount : adultCount;
  adultNum.innerText = adultCount;
});

adultMinus.addEventListener("click", ()=>{
  if(adultCount > 0){
    adultCount--;
    adultCount = (adultCount < 10) ? "0" + adultCount : adultCount;
    adultNum.innerText = adultCount;
  }
});

childrenPlus.addEventListener("click", ()=>{
  childrenCount++;
  childrenCount = (childrenCount < 10) ? "0" + childrenCount : childrenCount;
  childrenNum.innerText = childrenCount;
});

childrenMinus.addEventListener("click", ()=>{
  if(childrenCount > 0){
    childrenCount--;
    childrenCount = (childrenCount < 10) ? "0" + childrenCount : childrenCount;
    childrenNum.innerText = childrenCount;
  }
});

// WEATHER

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chuncheon";

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  // console.log(data);

  document.querySelector(".celsius").innerHTML = Math.round(data.main.temp) + "°";

  if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if(data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if(data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if(data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if(data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if(data.weather[0].main == "Wind") {
    weatherIcon.src = "images/wind.png";
  }
}
 
checkWeather();

// Access the Images
let slideImages = document.querySelectorAll('img');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let dots = document.querySelectorAll('.dot');

let counter = 0;

// Code for prev btn
next.addEventListener('click', slideNext);
function slideNext(){
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  if(counter >= slideImages.length-1){
    counter = 0;
  }else{
    counter++;
  }
  slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}

prev.addEventListener('click', slidePrev);
function slidePrev(){
  slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
  if(counter == 0){
    counter = slideImages.length-1;
  }else{
    counter--;
  }
  slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}

// Auto slider
function autoSliding(){
  deletInterval = setInterval(timer, 500);
  function timer(){
    slideNext();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slider-container');
container.addEventListener('mouseover', function(){
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
