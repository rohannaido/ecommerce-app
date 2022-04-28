import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjgxNWJmY2FhNjhjMzNjYzI2ZmJlOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTEzOTIyNiwiZXhwIjoxNjUxMzk4NDI2fQ.HzeKoQJjEVgk0WvZCQm73l1sLLbBpG_dKrX3V_HEpz4";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    }
})