import axios from "axios";

export const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: `${process.env.REACT_APP_API_URL}`,
});
