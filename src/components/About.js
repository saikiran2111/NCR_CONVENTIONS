import React from 'react';
import '../styles/About.css';  // Import the CSS for the About component
import RahulImage from '../assets/rahul.jpeg';  // Update the image path as per your project structure

function About() {
    return (
        <section id="about-us">
            <div className="about-us">
                        <h2>About Us</h2>
                        <div className="about-container">
                            <div className="left-container">
                                <div className="team-member">
                                    <img src={RahulImage} alt="Rahul Parida" />
                                    <h4>Rahul Parida</h4>
                                    <p>Founder & CEO</p>
                                </div>
                            </div>
                            <div className="right-container">
                                <p>We are a leading convention center dedicated to providing exceptional services for events and gatherings.</p>
                                <blockquote>
                                    <p>"Creating memorable experiences, one event at a time."</p>
                                </blockquote>
                            </div>

                        </div>
                    </div>
        </section>
        
    );
}

export default About;
