import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Connect() {
    return (
        <section className="lets-connect" id="connect">
            <div className="thanks">
                {/* Typewriter intro (non-looping) */}
                <p
                    style={{
                        fontSize: 'clamp(15px, 2vw, 20px)',
                        fontFamily: 'Poppins, sans-serif',
                        marginBottom: '20px',
                    }}
                >
                    <Typewriter
                        words={[
                            'Thanks for wandering through this little Corner of the Web.',
                            'I don’t do farewells. Let’s keep the Conversation going >>>',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="❀"
                        typeSpeed={80}
                        deleteSpeed={20}
                        delaySpeed={2500}
                    />
                </p>

                {/* Always-visible email */}
                <p style={{ textAlign: 'center' }}>
                    <a href="mailto:manushkalwari141@gmail.com" className="email-link">
                        manushkalwari141@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Connect;
