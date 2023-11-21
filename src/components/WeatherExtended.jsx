import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const fetchWeatherData = async () => {
        try {
            // Replace 'YOUR_API_KEY' with your WeatherAPI.com API key
            const apiKey = 'e5bc10f2e60e4efabd233657232111';
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Update state with the fetched data
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // useEffect with an empty dependency array acts as componentDidMount
    useEffect(() => {
        // Set the default location to Bangalore
        setLocation('Bangalore');

        // Fetch weather data for Bangalore on component mount
        fetchWeatherData();
    }, []);

    return (
        <div>
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={handleLocationChange}
            />
            <button onClick={fetchWeatherData}>Get Weather</button>

            {weatherData && (
                <div>
                    <h2>{weatherData.location.name}</h2>
                    <p>Temperature: {weatherData.current.temp_c} °C</p>
                    <p>Condition: {weatherData.current.condition.text}</p>
                    {/* Add more weather information as needed */}
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;