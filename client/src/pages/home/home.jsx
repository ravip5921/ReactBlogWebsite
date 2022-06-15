import React from 'react';
import axios from "axios";
import Header from '../../components/header/header'
import Posts from '../../components/posts/posts'
import SideBar from '../../components/sideBar/sideBar'
import "./home.css"
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts,setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get("http://localhost:7000/api/posts/" +search)
      setPosts(res.data);  
    }
    fetchPosts();
  },[search])
  return (
    <>
    <Header/>
    <div className="home">
       <SideBar/>
       <Posts posts = {posts}/>
       
    </div>
    </>
  )
}
