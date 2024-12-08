import css from './WeatherTable.module.css';

function WeatherTable({ data }) {
    if (!data) return null;

    const { current } = data;

    return (
        <div className={css.weatherTableContainer}>
            <h3 className={css.heading}>Weather Details</h3>
            <table>
                <thead>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Wind Speed</td>
                    <td>{current.wind_kph} kph ({current.wind_mph} mph)</td>
                </tr>
                <tr>
                    <td>Wind Direction</td>
                    <td>{current.wind_dir} ({current.wind_degree}°)</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{current.pressure_mb} mb</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{current.humidity}%</td>
                </tr>
                <tr>
                    <td>Cloud Cover</td>
                    <td>{current.cloud}%</td>
                </tr>
                <tr>
                    <td>Precipitation</td>
                    <td>{current.precip_mm} mm ({current.precip_in} in)</td>
                </tr>
                <tr>
                    <td>Visibility</td>
                    <td>{current.vis_km} km ({current.vis_miles} miles)</td>
                </tr>
                <tr>
                    <td>UV Index</td>
                    <td>{current.uv}</td>
                </tr>
                <tr>
                    <td>Gust Speed</td>
                    <td>{current.gust_kph} kph ({current.gust_mph} mph)</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WeatherTable;
