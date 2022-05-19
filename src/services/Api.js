import axios from 'axios';


export default () => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })



}