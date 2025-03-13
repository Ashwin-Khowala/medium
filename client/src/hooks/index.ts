import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import {SERVER_URL} from "../config";

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogs ,setBlogs]=useState([]);

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