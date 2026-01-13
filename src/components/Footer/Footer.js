import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Footer.css";



export default function Footer() {
    return (
        <footer className="footer" id="connect">


            <div className="footer-core">
                <div className="footer-text">
                    <p className="punchline">
                        Scroll no more! The brain dump ends here.
                    </p>

                    <p className="tagline">
                        AI isn’t automation. It is the pursuit of intelligence…
                        <br />
                        …and it begins.
                    </p>

                    <p className="signature">© 2025 | Manush M. Kalwari</p>
                </div>

                <div className="rainbow-bg" />
            </div>
        </footer>
    );
}
