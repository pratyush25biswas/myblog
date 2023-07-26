import { useState } from "react";
import { useHistory } from "react-router-dom";


const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const history = useHistory();
      
    const handleSignup = (e) => {
        e.preventDefault();
        
        history.push('/');
    }
    
    

    return (  
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label>Name:</label>
                <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Email:</label>
                <input 
                    type="text" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <label>Phone:</label>
                <input 
                    type="text" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <label>Password:</label>
                <input 
                    type="text" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label>Confirm password:</label>
                <input 
                    type="text" 
                    required 
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                />

                <button>Signup</button>
            </form>
    
        </div>
    );
}
 
export default Signup;