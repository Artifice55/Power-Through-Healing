import React from 'react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';

function Services(  { serviceData }) {
  
  const navigate = useNavigate();

  function handleClick() {
          navigate('/home')
  }
  
  return (
    
    <div styles={styles.container}>
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
      
      <div className="card-container">
        { serviceData.map(service => <ServiceCard key={service.id} service={service} /> )}
      </div>
   

      <header>
        <h1 style={styles.h1}>The many services of Power Through Healing</h1>
      </header>

      
     
      
      <footer>
        <p style={styles.contact}><a style={{ color: "blue", textDecoration: 'underline'}} href="/contact">Contact us</a> to schedule an appointment and take the first step towards emotional well-being.</p>
      </footer>
    </div>
  )
}
const styles = {
   
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#0073e6', 
        color: '#fff',
        
    },
        
    contact: {
        padding: '15px',
        fontSize: '20px'
    },
    
    
    serviceStyles: {
      background: 'linear-gradient(45deg, #6e8e9e, #c0c0c0, #007d7d, #000066)',
      margin: '20px',
      padding: '20px',
      borderRadius: '8px',
    
    },
    li: {
        display: 'flex',
        marginRight: '10px',
        fontSize: '1.3em',
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
    h1: {
    margin: '20px'
    },
   lotusImage: {
      width: '80px', 
      height: 'auto',
      marginBottom: '20px',
      },
      companyName: {
          display: 'flex',  
          flexDirection: 'row',
          top: '20px',
          left: '20px',
          color: '#fff', 
          fontSize: '1em',
          fontFamily: 'Comic Sans MS' 
          
      }
  };

export default Services;
