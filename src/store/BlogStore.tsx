import { axiosInstance } from '../axios/index';
// const handlerEnabled = false;

// Replace endpoint and change api name
const API_KEY = 'e85745744fa649a985c7f7b3743a86ec'

const getBlogs = async () => {
  return await axiosInstance.get(`/v2/everything?q=tesla&from=2022-07-09&sortBy=publishedAt&apiKey=${API_KEY}`);
};

export default {
  getBlogs
};
