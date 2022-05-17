import axios from 'axios '


export default () => {
    return axios.create({
        baseUrl: 'http://',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
}