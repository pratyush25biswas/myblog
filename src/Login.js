import { useState } from "react";
import { useHistory } from "react-router-dom";


const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
      
    const handleLogin = (e) => {
        e.preventDefault();
      
        history.push('/');
    }
    
    

    return (  
        <div className="login">
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input 
                    type="text" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <label>Password:</label>
                <input 
                    type="text" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
    
        </div>
    );
}
 
export default Login;