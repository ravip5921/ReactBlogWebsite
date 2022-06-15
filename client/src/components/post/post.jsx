import React from 'react';
import {Link} from 'react-router-dom';
import "./post.css"
export default function Post({post}) {
    // const PpostF 
  return (
    <div className='post'>
      {post.photo && (
        <img className='postImage'
         src={post.photo}
         alt="Post" />
      )}
        

     <div className="postInfo">
        <div className="postInfoTop">
        {/* <div className="postCats">
            {post.categories.map((c) =>(
               <span className="postCat">{c.name}</span>
            ))}
            <span className="postCat">Life</span>
            <span className="postCat">Science</span>
        </div>  */}
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
          {/* {post.createdAt} */}
        </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link" style={{textDecoration:"none", color:"inherit"}}>{post.title}</Link>
          
        </span>
        <hr />
        <span className='postDes'>
            {post.desc}
        </span>
     </div>
    </div>
  );
}
