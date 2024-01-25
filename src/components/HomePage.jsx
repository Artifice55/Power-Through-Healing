import React from 'react';
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const navigate = useNavigate();

        function handleClick() {
            navigate('/home')
        }
return (
      
            
      
      <div style={styles.homepageContainer}>
            <header style={styles.header}>
        
    
    <nav className="navbar">
    <div style={{
              display: "flex", flexDirection: "row"
            }}>
                <h1 style={{color: "black"}}>Power Through Healing</h1>
                <img
                onClick={handleClick} 
                src="PTH Logo.png" 
                alt="Lotus Flower" 
                width={80}
                height={
                  "auto"}
                    style={{ cursor: "pointer"}}

                />
            </div>
        <ul>
            <li><a href="/services">Services </a></li>
            <li><a href="/about">About Me </a></li>
            <li><a href="/contact">Contact Me </a></li>
            <li><a href="/">Log Out</a></li>
        </ul>
            </nav>
                <p style={styles.quote}>Your path to healing and well-being begins here.</p>
            </header>
            <footer style={styles.footer}>
                <div style={styles.quote}>
 
                </div>
            </footer>
        </div>
    );
}

export default HomePage;

const styles = {
    homepageContainer: {
        height: '100vh',
        margin: 'center',
        fontFamily: 'Arial, sans-serif',
        background: `url('Blue Mountains.jpg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        position: 'relative',
    },

    h1: {
        fontSize: '2em',
        margin: 0,
        fontFamily: 'Comic Sans MS'
    },
    navigation: {
        position: 'absolute',
        top: '20px',
        right: '20px',
    },
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
    },
    li: {
        display: 'flex',
        marginRight: '10px',
        fontSize: '1.3em',
        color: '#FFFFFF',
    
    },
    a: {
        textDecoration: 'none',
        borderBottom: 'none',
        background: 'none',
        outline: 'none',
    },

    
    quote: {
        fontSize: '25px',
        fontFamily: 'Comic Sans MS',
        color: '#FFFFFF'
    }

    };

