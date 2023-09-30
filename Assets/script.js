function forecastCity(city) {
    // Gets latitude and longitude lines for city using template literals once city input is searched in search-form:
    const geoRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=4bd72b175d778e384df11bf94d4349d5`;
    fetch(geoRequestUrl)
    .then(function (response) {
        return response.json();
    })
    // Takes this "geoData" of latitude and longitude lines to add into the weatherRequestURL using template literals:
    .then(function (geoData) {
            const { lat, lon } = geoData[0];
            const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4bd72b175d778e384df11bf94d4349d5&units=imperial`;
            fetch(weatherRequestUrl)
            .then(function (response) {
                // Turns response into json() string
                return response.json();
            })
            // takes that json strong to run weatherData results
            .then(function (weatherData) {
                // Comment out line 20 to view WeatherData response in console log:
                // console.log(weatherData); 
                // Shows hidden (by display:none css property at #search-result) results container when search result loads:
                const searchResult = document.querySelector('#search-result');
                searchResult.style = "display: block";
                // Icon Mapping fetched responses into corresponding icons to be listed for clear, clouds, rain, and snow weather conditions:
                const iconMapping = {
                    'Clear': '🌞',
                    'Clouds': '☁️',
                    'Rain' : '🌦️',
                    'Snow' : '❄️',
                };
                // Today's Forecast Section:                
                const todayWeatherH = document.querySelector('#todayWeather').firstChild;
                const todayTemp = document.querySelector('#todayTemp').firstChild;
                const todayWind = document.querySelector('#todayWind').firstChild;
                const todayHumid = document.querySelector('#todayHumid').firstChild;
                const todaysDate = dayjs().format('(MM/DD/YYYY)');
                const day0descr = weatherData.list[0].weather[0].main;
                const day0icon = iconMapping[day0descr];
                const day0Temp = (weatherData.list[0].main.temp);
                const day0Wind = (weatherData.list[0].wind.speed);
                const day0Humid = (weatherData.list[0].main.humidity);
                // Replacing the child of todayWeather's HTML id so this ID can be used again when user searches another location. 
                // If I replace the id itself, instead of child, the id will be replaced and unable to be replaced again upon searching a new location.
                todayWeatherH.replaceWith(city.toUpperCase() + " " + todaysDate + " " + day0icon);
                todayTemp.replaceWith("Temp: " + day0Temp + " °F");
                todayWind.replaceWith("Wind Speed: " + day0Wind + " MPH");
                todayHumid.replaceWith("Humidity " + day0Humid + "%");
                // 5 day forecast:
                // Day One - Tomorrow
                const day1Date = document.querySelector('#day1Date').firstChild;
                const day1Icon = document.querySelector('#day1Icon').firstChild;
                const day1Temp = document.querySelector('#day1Temp').firstChild;
                const day1Wind = document.querySelector('#day1Wind').firstChild;
                const day1Humid = document.querySelector('#day1Humid').firstChild;
                // Adding dayjs() +1 for tomorrow's date.
                const dayjs1 = dayjs().add(1, 'day').format('(MM/DD/YYYY)');
                const day1descr = weatherData.list[8].weather[0].main;
                const icon1 = iconMapping[day1descr];
                const tempData1 = (weatherData.list[8].main.temp);
                const windData1 = (weatherData.list[8].wind.speed);
                const humidData1 = (weatherData.list[8].main.humidity);
                day1Date.replaceWith(dayjs1);
                day1Icon.replaceWith(icon1);
                day1Temp.replaceWith("Temp: " + tempData1 + " °F");
                day1Wind.replaceWith("Wind Speed: " + windData1 + " MPH");
                day1Humid.replaceWith("Humidity " + humidData1 + "%");
                 // Day Two 
                 const day2Date = document.querySelector('#day2Date').firstChild;
                 const day2Icon = document.querySelector('#day2Icon').firstChild;
                 const day2Temp = document.querySelector('#day2Temp').firstChild;
                 const day2Wind = document.querySelector('#day2Wind').firstChild;
                 const day2Humid = document.querySelector('#day2Humid').firstChild;
                 const dayjs2 = dayjs().add(2, 'day').format('(MM/DD/YYYY)');
                 const day2descr = weatherData.list[16].weather[0].main;
                 const icon2 = iconMapping[day2descr];
                 const tempData2 = (weatherData.list[16].main.temp);
                 const windData2 = (weatherData.list[16].wind.speed);
                 const humidData2 = (weatherData.list[16].main.humidity);
                 day2Date.replaceWith(dayjs2);
                 day2Icon.replaceWith(icon2);
                 day2Temp.replaceWith("Temp: " + tempData2 + " °F");
                 day2Wind.replaceWith("Wind Speed: " + windData2 + " MPH");
                 day2Humid.replaceWith("Humidity " + humidData2 + "%");              
                 // Day Three
                 const day3Date = document.querySelector('#day3Date').firstChild;
                 const day3Icon = document.querySelector('#day3Icon').firstChild;
                 const day3Temp = document.querySelector('#day3Temp').firstChild;
                 const day3Wind = document.querySelector('#day3Wind').firstChild;
                 const day3Humid = document.querySelector('#day3Humid').firstChild;
                 const dayjs3 = dayjs().add(3, 'day').format('(MM/DD/YYYY)');
                 const day3descr = weatherData.list[24].weather[0].main;
                 const icon3 = iconMapping[day3descr];
                 const tempData3 = (weatherData.list[24].main.temp);
                 const windData3 = (weatherData.list[24].wind.speed);
                 const humidData3 = (weatherData.list[24].main.humidity);
                 day3Date.replaceWith(dayjs3);
                 day3Icon.replaceWith(icon3);
                 day3Temp.replaceWith("Temp: " + tempData3 + " °F");
                 day3Wind.replaceWith("Wind Speed: " + windData3 + " MPH");
                 day3Humid.replaceWith("Humidity " + humidData3 + "%");                
                  // Day Four
                const day4Date = document.querySelector('#day4Date').firstChild;
                const day4Icon = document.querySelector('#day4Icon').firstChild;
                const day4Temp = document.querySelector('#day4Temp').firstChild;
                const day4Wind = document.querySelector('#day4Wind').firstChild;
                const day4Humid = document.querySelector('#day4Humid').firstChild;
                const dayjs4 = dayjs().add(4, 'day').format('(MM/DD/YYYY)');
                const day4descr = weatherData.list[32].weather[0].main;
                const icon4 = iconMapping[day4descr];
                const tempData4 = (weatherData.list[32].main.temp);
                const windData4 = (weatherData.list[32].wind.speed);
                const humidData4 = (weatherData.list[32].main.humidity);
                day4Date.replaceWith(dayjs4);
                day4Icon.replaceWith(icon4);
                day4Temp.replaceWith("Temp: " + tempData4 + " °F");
                day4Wind.replaceWith("Wind Speed: " + windData4 + " MPH");
                day4Humid.replaceWith("Humidity " + humidData4 + "%");                
                 // Day Five 
                 const day5Date = document.querySelector('#day5Date').firstChild;
                 const day5Icon = document.querySelector('#day5Icon').firstChild;
                 const day5Temp = document.querySelector('#day5Temp').firstChild;
                 const day5Wind = document.querySelector('#day5Wind').firstChild;
                 const day5Humid = document.querySelector('#day5Humid').firstChild;
                 const dayjs5 = dayjs().add(5, 'day').format('(MM/DD/YYYY)');
                 const day5descr = weatherData.list[39].weather[0].main;
                 const icon5 = iconMapping[day5descr];
                 const tempData5 = (weatherData.list[39].main.temp);
                 const windData5 = (weatherData.list[39].wind.speed);
                 const humidData5 = (weatherData.list[39].main.humidity);
                 day5Date.replaceWith(dayjs5);
                 day5Icon.replaceWith(icon5);
                 day5Temp.replaceWith("Temp: " + tempData5 + " °F");
                 day5Wind.replaceWith("Wind Speed: " + windData5 + " MPH");
                 day5Humid.replaceWith("Humidity " + humidData5 + "%");
            })
    })
}

// Function to display user's search history:
function displaySearchHistory() {
    // "|| []"" Initializes an empty string in case there is no data in the string (ex. first time searching) to avoid err
    const searchHistory = JSON.parse(localStorage.getItem("search-history-list")) || [];
    const searchHistoryList = document.querySelector('#search-history-list');
    searchHistoryList.innerHTML = '';
    // For...of loop to store searchedCity into the array of searchHistory:
    for (const searchedCity of searchHistory) {
        const li = createListItem(searchedCity);
        searchHistoryList.appendChild(li);
    }
}

// Function to create Search history list item when searched:
function createListItem(city) {
    const li = document.createElement("li");
    // Using classList.add to add css elements to newly created element "li":
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const resultText = document.createElement("span");
    resultText.textContent = city;
    // Create 'Forecast' button to re-search previously searched cities
    const button = document.createElement("button");
    button.textContent = "Forecast";
    button.classList.add("btn", "btn-primary");
    // Adds resultText and new button to new list element "li":
    li.appendChild(resultText);
    li.appendChild(button);
    // Add event listener to rerun forecastCity() with this previously searched city as "city" once this 'forecast' button is selected
    button.addEventListener('click', function() {
        forecastCity(city);
    });
    return li;
}

// Function to handle City Search event from citySearchForm event listener. Runs forecastCity with this search input taken from #city-search-input's value:
function handleCitySearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('city-search-input').value;
    // Error message in case input is not entered 
    if (!searchInput) {
        console.error('You need a search input value!');
        return;
    }
//  "|| []"" initializes an empty string in case there is no data in the string (ex. first time searching) to avoid err
    const searchHistory = JSON.parse(localStorage.getItem("search-history-list")) || [];
    // Used unshift() instead of push() because I wanted to add to the top of the list instead of bottom
    searchHistory.unshift(searchInput);
    localStorage.setItem("search-history-list", JSON.stringify(searchHistory));
    // displays updated Search History
    displaySearchHistory();
    forecastCity(searchInput);
}

//Displays Search History list upon load. Can be commented out if user does not want to see it:
displaySearchHistory();

// citySearchForm's form submit event listener to run handleCitySearch function
const citySearchForm = document.querySelector('#search-form');
citySearchForm.addEventListener('submit', handleCitySearch);