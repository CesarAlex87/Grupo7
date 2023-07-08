const ApiKey = "1134033234651657";
const buttonCity = document.getElementById("sendCity");

//Consultar Ciudad desde la Api

async function fetchCity() {
  const inputCity = document.getElementById("inputCity");
  const arrayInput = inputCity.value.split(",");
  const search = [];
  arrayInput.forEach((element) => {
    element = element.trim();
    search.push(element);
  });
  let cityName = search[0];
  let countryName = search[1];
  let countryCode = [];
  cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);

  //
  dataCountry.countries.forEach((el) => {
    if (countryName == el.name_es) {
      countryCode.push(el.code);
      countryCode.push(el.name_es);
    }
  });
  //
  console.log(countryCode);
  const URLCity = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode[0]}&limit=5&appid=${APIkey}&lang=es`;
  const reqCity = await fetch(URLCity);
  const cityJson = await reqCity.json();
  let dataCity = [cityJson[0].lat, cityJson[0].lon];
  console.log("primer", cityJson[0]);

  //Consultar Clima
  const lat = dataCity[0];
  const lon = dataCity[1];
  const URLApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&lang=es`;
  const reqWeather = await fetch(URLApi);
  const weatherJson = await reqWeather.json();
  const imgSrcweather = await fetch(
    `https://openweathermap.org/img/wn/${weatherJson.weather[0].icon}@2x.png`
  );
  console.log(imgSrcweather);
  console.log("segundo", weatherJson);
  // console.log(weatherJson)

  //presentar informacion en pantalla

  const main = document.getElementById("root");
  const container = document.createElement("div");
  const imgWheater = document.createElement("img");
  const nCity = document.createElement("h3");
  const nCountry = document.createElement("h3");
  const temp = document.createElement("p");
  const descriptionValue = document.createElement("p");

  container.className = "cardWeather";
  imgWheater.className = "imgWeather";
  nCity.className = "nameCity";
  nCountry.className = "nameCity";
  temp.className = "weatherValue";
  descriptionValue.className = "countryName";

  //   console.log(weatherJson.sys);
  nCity.textContent = `Ciudad: ${cityJson[0].name}`;
  nCountry.textContent = `Pais: ${countryCode[1]}`;
  imgWheater.src = imgSrcweather.url;
  temp.textContent = `temperatura: ${parseInt(
    weatherJson.main.temp - 273.15
  )}° C`;
  descriptionValue.textContent = `${weatherJson.weather[0].description}`;

  main.replaceChildren("");
  container.append(imgWheater, nCity, nCountry, temp, descriptionValue);
  main.appendChild(container);
  // container.textContent= 'Hola'
}

buttonCity.addEventListener("click", fetchCity);
// const URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
