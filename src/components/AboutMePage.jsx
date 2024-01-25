import React from 'react';
import { useNavigate } from 'react-router-dom';


const AboutMePage = () => {
    const navigate = useNavigate();

        function handleClick() {
            navigate('/home')
        }

    return (
        <>
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
        <div className="about-container">
            
            
            <div className="image-container">
                <img src="https://cdn10.bostonmagazine.com/wp-content/uploads/2013/10/greys-main1.jpg" alt="Psychotherapist" className="image" />
            </div>
            <div className="content-container">
                <h2 className="heading">About Dr. Olga Samsonov</h2>
                <p className="description"> Dr. Olga Samsonov is a seasoned psychotherapist with over 10 years of experience in the field. With a passion for helping individuals navigate through life's challenges, Dr. Olga Samsonov has honed expertise in over 15 areas of therapy.</p>
                <div className="expertise">
                    <h3 className="sub-heading">Expertise Areas:</h3>
                    <ul className="expertise-list">
                        <li>Anxiety Disorders</li>
                        <li>Depression</li>
                        <li>Trauma and PTSD</li>
                        <li>Relationship Counseling</li>
                        <li>Family Therapy</li>
                        <li>ADHD</li>
                        <li>Grief and Loss</li>
                        <li>Addiction Counseling</li>
                        <li>Marriage/Divorce</li>
                        <li>Stress Management</li>
                        <li>Anger Management</li>
                        <li>Self-Esteem Building</li>
                        <li>Cognitive Behavioral Therapy (CBT)</li>
                        <li>Mindfulness-Based Therapy</li>
                    </ul>
                </div>
                <p className="philosophy">Dr. Olga Samsonov believes in creating a safe and supportive environment where clients can explore their thoughts, feelings, and experiences to achieve personal growth and well-being.</p>
            </div>
        </div>
        </> 
    );
}

export default AboutMePage;

