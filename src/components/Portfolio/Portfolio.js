import React, { useEffect, useMemo, useState } from "react";
import "./Portfolio.css";

import countingcalThumbnail from "../media/countingcalThumbnail.png";
import eegThumbnail from "../media/eegThumbnail.png";
import jepaThumbnail from "../media/jepaThumbnail.png";
import grpoThumbnail from "../media/grpoThumbnail.png";
import aneurysmThumbnail from "../media/aneurysmThumbnail.png";

const projects = [
    {
        title: "Inference Optimization on DeepSeek & Phi",
        img: grpoThumbnail,
        link: "https://github.com/Infernaught/HPML_Final_Project",
        desc: "Inference optimization on DeepSeek-R1-7B.",
        sub: "Improved throughput and latency.",
    },
    {
        title: "EEG-to-Text Translation",
        img: eegThumbnail,
        link: "https://github.com/ManushKalwari/BCI_eeg-text",
        desc: "EEG-to-text using CLIP-BART fusion.",
        sub: "Multimodal representation learning.",
    },
    {
        title: "Unsupervised Image Classification",
        img: jepaThumbnail,
        link: "https://github.com/ManushKalwari/JEPA-Project",
        desc: "Unsupervised image classification.",
        sub: "JEPA-based representation learning.",
    },
    {
        title: "Aneurysm Detection in Brain",
        img: aneurysmThumbnail,
        link: "https://github.com/ecbme6040/e6691_2025spring_Project_ABAD_kb3343_mmk2266",
        desc: "3D U-Net for aneurysm detection.",
        sub: "Volumetric medical image segmentation.",
    },
    {
        title: "CountingCals",
        img: countingcalThumbnail,
        link: "https://github.com/ManushKalwari/CountingCals",
        desc: "Estimate food calories from photos.",
        sub: "Vision-based calorie estimation.",
    },
];

function clamp(i, n) {
    return ((i % n) + n) % n;
}

export default function Portfolio() {
    const [index, setIndex] = useState(0);
    const n = projects.length;

    const current = useMemo(() => projects[index], [index]);

    const next = () => setIndex((i) => clamp(i + 1, n));
    const prev = () => setIndex((i) => clamp(i - 1, n));

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <section className="carousel-section" id="portfolio">
            <h2 className="section-title">Case Studies</h2>

            <div className="carousel-wrapper">
                <button className="nav-btn left" onClick={prev}>‹</button>

                <div className="carousel-card">
                    <div className="carousel-image">
                        <img src={current.img} alt={current.title} />
                    </div>

                    <div className="carousel-content">
                        <h3>{current.title}</h3>
                        <p className="desc">{current.desc}</p>
                        <p className="sub">{current.sub}</p>

                        <a
                            href={current.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-btn"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>

                <button className="nav-btn right" onClick={next}>›</button>
            </div>

            <div className="dots">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
}


