import axios from "axios"

const api = axios.create({
      
    baseURL: 'https://sujeitoprogramador.com/'

    //https://sujeitoprogramador.com base API
// /r-api/?api=filmes rota da APIr
});
 export default api;
