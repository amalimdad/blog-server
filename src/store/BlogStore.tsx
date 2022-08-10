import { axiosInstance } from '../axios/index';
import { action, observable } from "mobx";
import { createContext } from "react";
import { BlogModel } from '../models/BlogModel';
import { SpliceArrayInToFirstSub } from '../utils/Utils';
import { BLOGS } from '../utils/Constant';
// Replace endpoint and change api name
const API_KEY = 'e85745744fa649a985c7f7b3743a86ec'

const getBlogs = async () => {
  return await axiosInstance.get(`/v2/everything?q=tesla&from=2022-07-09&sortBy=publishedAt&apiKey=${API_KEY}`);
};

class BlogStore {
  @observable blogs: BlogModel[] = [];
  @observable slicedBlogs: BlogModel[] = [];


  // Response status
  @observable isLoading: boolean = false;
  @observable isError: boolean = false;
  @observable errors: string = "";


  @action handleGetBlogs = (setSlicedOrders?: any) => {
    this.isLoading = true;
    this.isError = false;

    axiosInstance.get(`/v2/everything?q=tesla&from=2022-07-09&sortBy=publishedAt&apiKey=${API_KEY}`)
      .then((response) => {
        // @on Success
        if (this.blogs !== response.data) {
          this.blogs = response.data;
          if (this.blogs.length > 3) {
            this.slicedBlogs = SpliceArrayInToFirstSub(this.blogs, 3)
          } else {
            this.slicedBlogs = this.blogs;
          }
          setSlicedOrders(this.slicedBlogs);
        }
      })
      .catch((error) => {
        // @On failure
        this.isError = true;
        this.isLoading = false;
        //For testing 
        this.blogs = BLOGS
      })
      .finally(() => {
        this.isLoading = false;
      });
  };
}

interface Error {
  error: string;
  input: number;
  http_code: string;
}
interface ErrorHandler {
  message: string;
  errors: Error[];
}

const blogStoreContext = createContext(new BlogStore());
export default blogStoreContext;
