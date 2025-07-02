import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import myPic from './media/myPic.png';

function Hero() {
    return (
        <div className="info-photo-container" id="home">
            <div className="myInfo">
                <div className="name">Hi, I’m Manush Kalwari</div>
                <div className="about">
                    <p className="tagline">
                        <Typewriter
                            words={[
                                'Crafting intelligence, one neural network at a time.',
                                'Engineer curious about minds — biological and artificial.',
                                'Building systems that learn, adapt, and solve.'
                            ]}
                            loop={0} // Set to 0 or Infinity
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                    </p>
                </div>
            </div>
            <div className="myPic">
                <img src={myPic} alt="Manush Kalwari" />
            </div>
        </div>
    );
}

export default Hero;
