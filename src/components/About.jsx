import React from 'react';
import '../component-styles/textcontent.css';

function About(props) {
    return (
        <div className="main-container">
            <h3>About</h3>
            <span className="about-section">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, and am always looking for new things to learn.
            </span>
        </div>
    );
}

export default About;