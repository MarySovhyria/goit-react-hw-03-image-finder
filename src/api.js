import axios from 'axios';

export const fetchImages = async () => {
    try {
        const response = await axios.get(
            'https://pixabay.com/api/?q=generic&key=28308066-7b7c2efd8f29cbaa75a1bd301'
        )
        return response.data.hits;
    } catch (error) {
        console.error(error);
        return [];
    }
}