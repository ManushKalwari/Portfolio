import React from "react";
import { Typewriter } from "react-simple-typewriter";
import myPic from "../media/myPic.png";
import "./Header.css";

function NavBar() {
    return (
        <nav className="topbar">
            <a href="#home">Home</a>
            <a href="#portfolio">Case Studies</a>
            <a href="#creative">Creative Work</a>
            <a href="#connect">Connect</a>
        </nav>
    );
}

function HeroSection() {
    return (
        <div className="hero" id="home">
            <div className="hero-info">
                <h1 className="name">
                    Hello,<br />I’m Manush Kalwari
                </h1>

                <p className="tagline">
                    <Typewriter
                        words={["Aspiring Data Scientist"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={90}
                        deleteSpeed={20}
                        delaySpeed={2500}
                    />
                </p>

                <div className="cta-row">
                    <a
                        href="https://github.com/ManushKalwari"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://drive.google.com/drive/folders/1RbNvjOMf0we3vMuOiT1RsmuoazrrHYuH?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Certifications
                    </a>

                    <a
                        href="https://www.linkedin.com/in/manush-kalwari/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

                <p className="email">manushkalwari141@gmail.com</p>
            </div>

            <div className="hero-pic">
                <img src={myPic} alt="Manush Kalwari" />
            </div>
        </div>
    );
}

export default function Header() {
    return (
        <header className="header">
            <NavBar />
            <HeroSection />
        </header>
    );
}
