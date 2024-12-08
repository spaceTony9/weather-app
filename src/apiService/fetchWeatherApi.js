import axios from 'axios';
import { CONSTANTS } from "./constants.js";

const QUERY_CONFIG = {
    baseURL: CONSTANTS.BASE_URL,
    headers: {
        authorization: CONSTANTS.AUTH,
    },
    params: {
        language: 'en-US',
        key: CONSTANTS.AUTH,
    },
};

export async function fetchWeatherWithKeyWord(q) {
    const instance = axios.create(QUERY_CONFIG);
    try {

        const response = await instance.get('', {
            params: {
                ...QUERY_CONFIG.params,
                q,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather info:', error);
        throw error;
    }
}

export default async function fetchPhotosWithKeyWord(keyword) {
    const instance = axios.create({
        baseURL: 'https://api.unsplash.com/',
        headers: { 'Accept-Version': 'v1' },
        params: {
            client_id: '1ctU6kuTt2ahGNIdcLlG3-NmcIRESl6UxJvupJGrReY',
            query: keyword,
            per_page: 12,
        },
    });
    try {
        const response = await instance.get('/search/photos');
        // Extract only the photo URLs
        return response.data.results.map(photo => photo.urls.small);
    } catch (error) {
        console.error('ErrorMessage fetching photos:', error);
        throw error;
    }
}
