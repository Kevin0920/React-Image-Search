import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
     headers: {
         Authorization: 'Client-ID ffe03e2803216d00eb3d99fe45c35800bb0a09a68e67758d762dfdd1e2936f45'
     }
});