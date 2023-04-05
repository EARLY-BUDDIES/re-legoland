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

