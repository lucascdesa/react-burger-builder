import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-df6f7.firebaseio.com/'
});

export default instance;