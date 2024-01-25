import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault()  
          navigate('/home')
      
      };
    
    return (
        <div style={styles.container}>
      <h1 style={styles.heading}>Power Through Healing </h1> 
    
      <div style={styles.formContainer}>
       
      <img 
      src="PTH Logo.png" 
      alt="Lotus Flower" 
      style={styles.lotusImage}
      />

       <form onSubmit={handleLogin}>
        
        <label style={styles.label}>
          Username:
          <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={styles.input} 
          
          />

        </label>
        <label style={styles.label}>

          Password:

        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        style={styles.input} 
        required
        />
        </label>
        
        <button type='submit' style={styles.button}>Login</button>
    </form>
        </div>
    </div>


  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(45deg, #6e8e9e, #c0c0c0, #007d7d, #000066)'

  
},
  heading: {
    fontFamily: 'cursive',
    fontSize: '3em',
    color: '#FFF',
    marginBottom: '15px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: '#FFF', 
  },
  lotusImage: {
    width: '80px', 
    height: 'auto',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    margin: '15px 0',
    color: '#2C3A47', 
  },
  input: {
    width: '90%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #95A5A6', 
    marginBottom: '20px',
    fontSize: '1em',
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    background: '#FF6B6B',
    color: '#FFF', 
    cursor: 'pointer',
    fontSize: '1em',
  },
  tokenContainer: {
    marginTop: '20px',
  },
  token: {
    fontFamily: 'monospace',
    fontSize: '1em',
    color: '#2C3A47', 
  },
};



export default LoginPage