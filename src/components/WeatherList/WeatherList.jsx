import css from './WeatherList.module.css';

function WeatherList({ data }) {
    if (!data) return null;

    const { location, current } = data;

    return (
        <div className={css.weatherList}>
            <h3 className={css.heading}>Weather Summary</h3>
            <ul>
                <li><strong>City:</strong> {location.name}</li>
                <li><strong>Region:</strong> {location.region}</li>
                <li><strong>Country:</strong> {location.country}</li>
                <li><strong>Local Time:</strong> {location.localtime}</li>
                <li><strong>Temperature:</strong> {current.temp_c}°C ({current.temp_f}°F)</li>
                <li><strong>Condition:</strong> {current.condition.text}</li>
                <li><strong>Feels Like:</strong> {current.feelslike_c}°C ({current.feelslike_f}°F)</li>
            </ul>
        </div>
    );
}

export default WeatherList;
