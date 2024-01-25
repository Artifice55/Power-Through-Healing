import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactInformation() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        aboutYourself: ''
    });

        const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:9000/contacts", {
            method: "POST", 
            headers: {
                "Content-type" : "application/json",
               },
             body: JSON.stringify( formData )
        
        })
                
        .then(response => {
            if (response.ok) {
                setIsSubmitted(true); // Set the isSubmitted state to true upon successful submission
                setFormData({  // Optionally reset the form fields after submission
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    aboutYourself: ''
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
   

        console.log(formData);
    };

    function handleClick() {
        navigate('/home')
    }

    return (
       
       
       
       <div style={styles.contactContainer}>
            
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
            
            <h2>Contact Me</h2>
            {isSubmitted ? (
                <p>Thank you for your submission, we will contact you as soon as possible.</p>
            ) : (
            <form onSubmit={handleSubmit} style={styles.contactForm}>
                <div style={styles.formGroup}>
                    <label htmlFor="fullName" style={{color: "white"}}>Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email"  style={{color: "white"}}>Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="phoneNumber"  style={{color: "white"}}>Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="aboutYourself"  style={{color: "white"}}>Tell Me About Yourself:</label>
                    <textarea id="aboutYourself" name="aboutYourself" value={formData.aboutYourself} onChange={handleChange} style={styles.textarea}></textarea>
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
            )}
        </div>
    );
}

export default ContactInformation;

const styles = {
    contactContainer: {
        textAlign: 'center',
        background: `url('Waterfall.jpg')`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    contactForm: {
        width: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '20px',
        textAlign: 'left',
    },
    input: {
        width: '95%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '3px',    
    },
    textarea: {
        width: '95%',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        minHeight: '100px',
    },
    button: {
        width: '100%',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        background: 'linear-gradient(45deg, #6e8e9e, #c0c0c0, #007d7d, #000066)'
    },
    
};
