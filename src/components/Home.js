import React from 'react';
import '../styles/Home.css';  
import JagannathTemple from '../assets/jagannath-temple.jpeg';

function Home() {
    return (
        <section id="home">  
            <div className="first-container">
                <div className="left-container">
                    <h1 className="hotel-address">NCR Conventions</h1>
                    <h3 className="address">Khallikote, Ganjam, Odisha, 761030</h3>
                    <p className="hotel-caption">Finding paradise in every corner.</p>
                </div>
                <div className="right-container">
                    <img src={JagannathTemple} alt="Jagannath Temple" />
                </div>
            </div>
        </section>
    );
}

export default Home;
