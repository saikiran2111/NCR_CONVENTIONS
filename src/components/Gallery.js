import React from 'react';
import '../styles/Gallery.css'; // Import the CSS for the Gallery component
import Img1 from '../assets/img1.jpeg'; // Update the image paths as per your project structure
import Img2 from '../assets/img2.jpeg';
import Img3 from '../assets/img3.jpeg';

function Gallery() {
    return (
        <div className="gallery">
            <h1 className="gallery-heading">Our Gallery</h1>
            <div className="gallery-grid">
                <div className="gallery-item">
                    <img src={Img1} alt="Nearby place" />
                </div>
                <div className="gallery-item">
                    <img src={Img2} alt="Nearby place" />
                </div>
                <div className="gallery-item">
                    <img src={Img3} alt="Nearby place" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
