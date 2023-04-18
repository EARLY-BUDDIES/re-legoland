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

const apiKey = "317d1cdbbcf8d67b187b125a53b7c13e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chuncheon";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".celsius").innerHTML = data.main.temp + "°";
}
 
checkWeather();