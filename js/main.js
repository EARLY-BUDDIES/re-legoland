// slider

let curPos = 0; // 현재 보여주는 이미지 인덱스 번호
let positionValue = 0; // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDHT = 500;

const prevBtn = document.querySelector(".slider_btn1");
const nextBtn = document.querySelector(".slider_btn2");
const images = document.querySelector(".images");

function next(){
  if(curPos < 2){
    prevBtn.removeAttribute('disabled')
    positionValue -= IMAGE_WIDHT;
    images.style.transform = `translateX(${positionValue}px)`;
    curPos += 1;
  }
  if(curPos === 2){
    nextBtn.setAttribute('disabled', 'true'); 
  }
}

function prev(){
  if(curPos > 0){
    nextBtn.removeAttribute('disabled')
    positionValue += IMAGE_WIDHT;
    images.style.transform = `translateX(${positionValue}px)`;
    curPos -= 1;
  }
  if(curPos === 0){
    prevBtn.setAttribute('disabled', 'true'); 
  }
}

function init(){
  prevBtn.setAttribute('disabled', 'true');  
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}

init();


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

/* SEASON EVENT / Slider */

let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
let manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');
  
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
});

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  })
});

// Javascript for image slider autoplay navigation
let repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  let repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active')
      })

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 3000);
  }
  repeater();
}
repeat();

// Footer
// Update the copyright year automatically

const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
