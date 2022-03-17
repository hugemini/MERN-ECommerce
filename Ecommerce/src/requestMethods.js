import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTcwYWFhNTJlYTdlMWMwNDgwZGU3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTE5ODUwMSwiZXhwIjoxNjM5NDU3NzAxfQ.sZKAOtLpvi0vZh3rdnR2-6T7H9twQIv5kIfxoVVRDmU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})