import { useEffect, useState } from "react";
import axios from "axios";
import {SERVER_URL} from "../config";


export interface Blog{
    "content":string;
    "title":string;
    "id":string;
    "author":{
      "name":string;
    }
  }

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs ,setBlogs]=useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${SERVER_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }            
        })
        .then(response=>{
            setBlogs(response.data.posts);
            setLoading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
};

export const useBlog=({id}:{id:string;})=>{
    const [loading,setLoading]=useState(true);
    const [blog ,setBlog]=useState<Blog>();

    useEffect(()=>{
        axios.get(`${SERVER_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }            
        })
        .then(response=>{
            setBlog(response.data);
            setLoading(false)
        })
    },[id])

    return {
        loading,
        blog
    }
};