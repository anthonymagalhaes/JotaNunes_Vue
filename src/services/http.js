import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://api.com', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;