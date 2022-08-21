import axios from "axios";

export default axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: `${process.env.REACT_APP_API_URL}`,
});
