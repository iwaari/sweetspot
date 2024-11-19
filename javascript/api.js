document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'f8befec95e8d09e03c94a68037c774cf';
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const weatherContainer = document.getElementById('weather-container');

    // Function to fetch and display weather data
    function fetchWeather(city) {
        if (!city) {
            weatherContainer.innerHTML = '<p>Please enter a city name.</p>';
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod !== 200) {
                    weatherContainer.innerHTML = '<p>City not found. Please try again.</p>';
                    return;
                }

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
    }

    // Add event listener to the search button
    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        fetchWeather(city);
    });

    // Optional: Allow pressing Enter to search
    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const city = cityInput.value.trim();
            fetchWeather(city);
        }
    });

    console.log(`Weather search functionality initialized with API key ${apiKey}`);
});