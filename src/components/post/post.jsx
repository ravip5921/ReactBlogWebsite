import React from 'react'
import "./post.css"
export default function Post() {
  return (
    <div className='post'>
        <img className='postImage'
         src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt="Post" />

     <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Life</span>
            <span className="postCat">Science</span>
        </div> 
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className='postDate'>Time stamp</span>
        <span className='postDes'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis sapiente officia. Illo totam neque repudiandae delectus nesciunt accusamus in exercitationem reprehenderit! Nesciunt consectetur blanditiis ducimus, placeat aut officiis quaerat.
        </span>
     </div>
    </div>
  );
}
