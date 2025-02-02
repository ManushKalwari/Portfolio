import React from 'react';
import myPic from './media/myPic.png';




function Hero() {
    return (
        <div className="info-photo-container" id="home">
            <div className="myInfo">
                <div className="name">Hi, Its Manush Kalwari</div>
                <div class="about">
                    <p class="tagline">Crafting Intelligence, One Neural Network at a Time.</p>
                </div>
            </div>
            <div className="myPic">
                <img src={myPic} alt="Manush Kalwari" />
            </div>
        </div>
    );
}

export default Hero;