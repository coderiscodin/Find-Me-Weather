const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    const weatherType = document.createElement("div");
    weatherType.classList.add("weatherType");



    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    `;

    weatherType.innerHTML = `<small>${data.weather[0].main}</small>`
    
    main.innerHTML = "";

    main.appendChild(weather);
    main.appendChild(weatherType);

    console.log(weatherType.textContent)


    if(weatherType.textContent == "Smoke") { 
        document.body.style.backgroundImage  = "url('https://media.wired.com/photos/5b8473dacde746582fe9ff00/master/w_2560%2Cc_limit/smokestorm-1021620844.jpg')";
    }
    else if(weatherType.textContent == "Mist") { 
        
        document.body.style.backgroundImage  = "url('https://www.collinsdictionary.com/images/full/mist_339182456.jpg')";
    }
    else if(weatherType.textContent == "Haze") { 
        
        document.body.style.backgroundImage  = "url('https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg')";
    }
    else if(weatherType.textContent == "Rain") { 
        
        document.body.style.backgroundImage  = "url('https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960')";
    }
    else if(weatherType.textContent == "Snow") { 
        
        document.body.style.backgroundImage  = "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsc1998-1574720123.jpg?crop=1.00xw:0.753xh;0.00160xw,0.122xh&resize=480:*')";
    }
    else if(weatherType.textContent == "Drizzle") { 
        
        document.body.style.backgroundImage  = "url('https://www.vmcdn.ca/f/files/via/images/weather/rain-umbrella-vancouver-weather.jpg;w=960')";
    }
    else if(weatherType.textContent == "Dust") { 
        
        document.body.style.backgroundImage  = "url('http://p3.img.cctvpic.com/20100322/images/1269235967763_1269235967763_r.jpg')";
    }
    else if(weatherType.textContent == "Fog") { 
        
        document.body.style.backgroundImage  = "url('https://static.wikia.nocookie.net/weather/images/f/fc/Fog.jpeg/revision/latest?cb=20120804193216')";
    }
    else if(weatherType.textContent == "Sand") { 
        
        document.body.style.backgroundImage  = "url('http://p3.img.cctvpic.com/20100322/images/1269235967763_1269235967763_r.jpg')";
    }
    else if(weatherType.textContent == "Tornado") { 
        
        document.body.style.backgroundImage  = "url('https://cdn.arstechnica.net/wp-content/uploads/2011/12/tornado-road-4ef0edc-intro.jpg')";
    }
    else if(weatherType.textContent == "Clouds") { 
        
        document.body.style.backgroundImage  = "url('https://www.lgenergy.com.au/uploads/media_images/720dfa3f7a5e8f5c780f7affb30a71cb25088843.jpeg')";
    }
    else if(weatherType.textContent == "Clear") { 
        
        document.body.style.backgroundImage  = "url('https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-1')";
    }
    else if(weatherType.textContent == " "){
        document.body.style.backgroundColor  =  "#ced1d6"  ;
    }
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});