import React, { useState } from 'react';
import '../styles/Contact.css'; // Import the CSS for the Contact component

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        place: '',
    });
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator
    const [message, setMessage] = useState(''); // State for success or failure message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loader
        setMessage(''); // Clear any previous message

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Email sent successfully!');
            } else {
                setMessage('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        } finally {
            setIsLoading(false); // Hide loader
        }
    };

    return (
        <section id='contact-us'>
            <div className="contact-us">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong> NCR Convention, Khallikote, Ganjam, Odisha, 761030</p>
                    <p><strong>Email:</strong> ncr@conventioncenter.com</p>
                </div>
                <div className="contact-form">
                    <h3>Get In Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        
                        <label htmlFor="place">Place:</label>
                        <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} required />
                        
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </section>
    );
}

export default Contact;
