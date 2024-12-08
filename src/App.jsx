import './App.module.css';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { useState } from 'react';
import fetchPhotosWithKeyWord, { fetchWeatherWithKeyWord } from './apiService/fetchWeatherApi.js';
import WeatherList from './components/WeatherList/WeatherList.jsx';
import WeatherTable from './components/WeatherTable/WeatherTable.jsx';
import css from './App.module.css';

function App() {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSearchSubmit(searchQuery) {
        setQuery(searchQuery);
        setIsLoading(true);
        setError(null);

        try {
            const data = await fetchWeatherWithKeyWord(searchQuery);
            const images = await fetchPhotosWithKeyWord(searchQuery);
            setPhotos(images);
            setWeatherData(data);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message || 'Failed to fetch data');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={css.container}>
            <SearchBar handleSearchSubmit={handleSearchSubmit} />
            {isLoading && <p>Loading...</p>}
            {error && <p className={css.error}>Error: {error}</p>}
            {weatherData && (
                <div>
                    <h2 className={css.heading}>Weather Data for {query}</h2>
                    <WeatherList data={weatherData} />
                    <WeatherTable data={weatherData} />
                </div>
            )}
            {photos && photos.length > 0 && (
                <div>
                    <h3 className={css.heading}>Photos of {query}</h3>
                    <div className={css.photoContainer}>
                        {photos.map((photoUrl, index) => (
                            <img
                                key={index}
                                src={photoUrl}
                                alt={`View of ${query}`}
                                className={css.photo}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
