import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import myPic from './media/myPic.png';

function Hero() {
    return (
        <div className="info-photo-container" id="home">
            <div className="myInfo">
                <div className="name">Hello,<br />I’m Manush Kalwari</div>
                <div className="about">
                    <p className="tagline">
                        <Typewriter
                            words={[
                                'Artist, Engineer, Curious Mind.',
                                'Loves reading Artificial & Biological minds.',

                            ]}
                            loop={0} //Infinite looop
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={20}
                            delaySpeed={2500}
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
