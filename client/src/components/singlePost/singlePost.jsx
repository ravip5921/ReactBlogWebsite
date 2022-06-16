// import React from 'react';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import "./singlePost.css";
// import { Context } from '../../context/Context';

// export default function SinglePost() {
//   const location =  useLocation();
//   const path = location.pathname.split("/")[2];
//   const [post, setPost] = useState({});
//   const PF = "http://localhost:7000/images/";
//   const { user } = useContext(Context);
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [updateMode, setUpdateMode] = useState(false);

//   useEffect(() => {
//     const getPost = async () => {
//       const res = await axios.get("http://localhost:7000/api/posts/" + path);
//       setPost(res.data);
//       setTitle(res.data.title);
//       setDesc(res.data.desc);
//     };
//     getPost(); 
//   }, [path]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:7000/api/posts/${post._id}`, {
//         data: { username: user.username },
//       });
//       window.location.replace("/");
//     } catch (err) {}
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:7000/api//posts/${post._id}`, {
//         username: user.username,
//         title,
//         desc,
//       });
//       setUpdateMode(false)
//     } catch (err) {}
//   };

//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         {post.photo && (
//           <img
//           className="singlePostImg"
//           src={PF +post.photo}
//           alt=""
//         />
//         )}

//         {
//         updateMode ? <input type="text" value = {post.title}/> : (

        
        
//         <h1 className="singlePostTitle">
//           {post.title}    
          
//             <div className="singlePostEdit">
//             <i className="singlePostIcon far fa-edit" onClick={{handleUpdate}}></i>
//             <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
//           </div>
          
          
//         </h1>
//         )}
//         <div className="singlePostInfo">
//           <span>
//             Author:
//             <Link to={`/?user=${post.username}`} style={{textDecoration:"none", color:"inherit"}}>
//             <i>{post.username}</i>
//             </Link>
//           </span>
//           <span>{new Date(post.createdAt).toDateString() }</span>
//         </div>
//         <p className="singlePostDesc">
//           {post.desc}
//         </p>
//       </div>
//     </div>
//   );
// }


import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:7000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:7000/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:7000/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:7000/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title},
            {post.username === user.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} style={{textDecoration:"none", color:"inherit"}}>
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}