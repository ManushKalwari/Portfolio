import React, { useEffect, useRef, useState } from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p className="punchline">Scroll no more! The Brain dump Ends here.</p>
                <p className="tagline">AI isn't Automation. It is the pursuit of Intelligence...<br />...and it Begins...</p>

                <p className="signature">© 2025 | Manush M. Kalwari</p>
            </div>
            <div className="rainbow-bg"></div> {/* Already styled before */}
        </footer>
    );
}
export default Footer;