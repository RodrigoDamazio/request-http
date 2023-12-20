import axios from 'axios';

const projFetch = axios.create({
   baseURL: "http://localhost:4444/api/v1/"
});

export default projFetch
