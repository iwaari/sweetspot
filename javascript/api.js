const apiKey = 'f8befec95e8d09e03c94a68037c774cf';
const city = 'London'; // Change to the city you want
const weatherContainer = document.getElementById('weather-container');

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const weatherHTML = `
            <h2>${city}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${weatherDescription}</p>
            <p>Humidity: ${humidity}%</p>
        `;
        weatherContainer.innerHTML = weatherHTML;
    })
    .catch(error => {
        weatherContainer.innerHTML = '<p>Unable to load weather data.</p>';
        console.error('Error fetching weather data:', error);
    });
    console.log(`Requesting weather for ${city} with API key ${apiKey}`);
