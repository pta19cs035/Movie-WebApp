import axios from "axios";
import {baseURL} from './constants/constants.jsx'
const instance = axios.create({
  baseURL: baseURL,
  
});

export default instance;