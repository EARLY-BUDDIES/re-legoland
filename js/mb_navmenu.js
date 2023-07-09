function toggleSubmenu(menuItem) {
  const submenu = menuItem.querySelector('.submenu');
  const allSubmenus = document.querySelectorAll('.submenu');
  const parentMenuItems = document.querySelectorAll('.menu-item');

  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
    menuItem.classList.remove('active');
  } else {
    // Close all submenus and remove active class from other menu items
    allSubmenus.forEach((sub) => {
      sub.style.display = 'none';
    });
    parentMenuItems.forEach((parentItem) => {
      parentItem.classList.remove('active');
    });

    submenu.style.display = 'block';
    menuItem.classList.add('active');
  }
}




// WEATHER

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chuncheon";

async function checkMobileWeather() {
  try {
    const mobileResponse = await fetch(apiUrl + `&appid=${apiKey}`);
    const mobileData = await mobileResponse.json();

    const mobileWeatherIcon = document.querySelector(".weather-icon-mb");
  
    document.querySelector(".celsius").innerHTML = Math.round(mobileData.main.temp) + "°";

    if (mobileData.weather[0].main == "Clouds") {
      mobileWeatherIcon.src = "images/clouds.png";
    } else if (mobileData.weather[0].main == "Clear") {
      mobileWeatherIcon.src = "images/clear.png";
    } else if (mobileData.weather[0].main == "Rain") {
      mobileWeatherIcon.src = "images/rain.png";
    } else if (mobileData.weather[0].main == "Drizzle") {
      mobileWeatherIcon.src = "images/drizzle.png";
    } else if (mobileData.weather[0].main == "Snow") {
      mobileWeatherIcon.src = "images/snow.png";
    } else if (mobileData.weather[0].main == "Wind") {
      mobileWeatherIcon.src = "images/wind.png";
    }
  } 
  catch (error) {
    console.error("An error occurred while fetching weather data:", error);
  }
}

checkMobileWeather();



