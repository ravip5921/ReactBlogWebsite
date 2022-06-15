import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";

export default function SinglePost() {
  const location =  useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  // const PF = "http://localhost:7000/images/";
  // const { user } = useContext(Context);
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  // const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:7000/api/posts/" + path);
      setPost(res.data);
      // setTitle(res.data.title);
      // setDesc(res.data.desc);
    };
    getPost(); 
  }, [path]);

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`, {
  //       data: { username: user.username },
  //     });
  //     window.location.replace("/");
  //   } catch (err) {}
  // };

  // const handleUpdate = async () => {
  //   try {
  //     await axios.put(`/posts/${post._id}`, {
  //       username: user.username,
  //       title,
  //       desc,
  //     });
  //     setUpdateMode(false)
  //   } catch (err) {}
  // };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />
        )}
        
        <h1 className="singlePostTitle">
          {post.title}    
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} style={{textDecoration:"none", color:"inherit"}}>
            <i>{post.username}</i>
            </Link>
            <b className="singlePostAuthor">
              {/* <Link className="link" to="/posts?username=Safak">
                Safak
              </Link> */}
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString() }</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}