import axios from 'axios';

const baseURL = "https://logis.com.co/app/api/";

export default axios.create({
  baseURL,
});