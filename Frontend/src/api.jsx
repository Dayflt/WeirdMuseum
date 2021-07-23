import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:5000',
    // baseURL : 'https://weirdmuseum.ml',
});

export default instance;
