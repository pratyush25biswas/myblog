import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My First Blog</h1>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/signup" >Signup</Link>
        <Link to="/login" >Login</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;