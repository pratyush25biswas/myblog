
import { useState } from "react";

function refreshPage() {
  window.location.reload(false);
}

const handleDelete = (id) => {
  fetch('http://localhost:8000/blogs/' + id, {
    method: 'DELETE'
  }).then(() => {
    refreshPage();
  }) 
}


const BlogList = ({ blogs }) => {
  
  const [like, setLike] = useState(Math.floor(Math.random() * 10));
  const [dislike, setdisLike] = useState(Math.floor(Math.random() * 10));
  

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          
            <h2>{ blog.title }</h2>
            <h4>Written by { blog.author }</h4>
            <p>Content: { blog.body }</p>
            <br />
            <p>Likes: {like} <nbsp />
            <button onClick= {() => setLike(like+1)} >like</button>
            </p>
            <p>
            Disikes: {dislike} <nbsp />
            <button onClick= {() => setdisLike(dislike+1)} >dislike</button>
            </p>
            <br/>
            <p><button onClick= {() => handleDelete( blog.id )} >delete</button></p>
          
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;