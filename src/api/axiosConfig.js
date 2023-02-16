import axios from "axios";

/**
 * Axios and Ngrok allows using a tunnel for a base URL such that it can be
 * used to hide the real URL for the API endpoint. In this sense,
 * the client react application must be call the new generated URL.
 */
export default axios.create({
    baseURL:"https://c762-2806-10a6-6-d58b-d6b8-8901-a559-3c5.ngrok.io",
    headers: {"ngrok-skip-browser-warning": "true"}
});