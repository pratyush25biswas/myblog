
import { useState } from "react";

const Home = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newblogs=[];
    for(var k = 0 ; k < blogs.length ; k++){
      newblogs[k]=blogs[k];
    }
    const likes=Math.floor(Math.random() * 11);
    const dislikes=Math.floor(Math.random() * 11);
    const id=k+1;
    const blog = { title, body, author, likes, dislikes, id};
    //console.log(blog);
    
    newblogs[k]=blog;
    setBlogs(newblogs);

    

  }

  var [blogs,setBlogs]= useState(
    [
      {
        title: "first blog",
        body: "Welcome to my blog",
        author: "me",
        likes:10,
        dislikes:12,
        id: 0
      },
      {
        title: "second blog",
        body: "hello , a nice blog",
        author: "you",
        likes:2,
        dislikes:1,
        id: 1
      }
    ]
  );

  const deleteblog = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);

  }

  const likeblog = (bid) =>{
    console.log(blogs);
    const newblogs=[];
    for(var i = 0 ; i < blogs.length ; i++){
      
      if ((blogs[i]["id"])===bid) {
        blogs[bid].likes++;
        console.log(blogs[bid]);
      }

    }

    for(var j = 0 ; j < blogs.length ; j++){
      newblogs[j]=blogs[j];
    }
    
    setBlogs(newblogs);
  }

  const dislikeblog = (bid) =>{
    const newblogs=[];
    for(var i = 0 ; i < blogs.length ; i++){
      
      if ((blogs[i]["id"])===bid) {
        blogs[bid]["dislikes"]++;
        console.log(blogs[bid]);
      }

    }

    for(var j = 0 ; j < blogs.length ; j++){
      newblogs[j]=blogs[j];
    }
    
    setBlogs(newblogs);
  }

  return (
    <div className="home">
      <div>
      
      <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Add Blog</button>
      </form>
    </div>

      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <p>Content: { blog.body }</p>
          <br/>
          <p>Likes: { blog.likes } 
          <button onClick={() => likeblog(blog.id) }> like </button>
          </p>
          <br/>
          <p>Dislikes: { blog.dislikes } 
          <button onClick={() => dislikeblog(blog.id) }> dislike </button>
          </p><br/>
          <button onClick={() => deleteblog(blog.id) }> delete </button>
          
        </div>
        
      ))}
    </div>
    </div>
    

    

  );
}
 
export default Home;