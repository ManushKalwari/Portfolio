import React from 'react';
import countingcalThumbnail from './media/countingcalThumbnail.png';
import expenseThumbnail from './media/expenseThumbnail.png';
import swaraThumbnail from './media/swaraThumbnail.png';
import grpoThumbnail from './media/grpoThumbnail.png';
import transmissionThumbnail from './media/transmissionThumbnail.png';
import eegThumbnail from './media/eegThumbnail.png';
import jepaThumbnail from './media/jepaThumbnail.png';
import lzwThumbnail from './media/lzwThumbnail.png';
import aneurysmThumbnail from './media/aneurysmThumbnail.png';

const projects = [
    {
        title: "Inference Optimization on DeepSeek & Phi",
        img: grpoThumbnail,
        link: "https://github.com/Infernaught/HPML_Final_Project",
        desc: "Inference Optimization on DeepseekR1-7B using GRPO & SFTnow that now "
    },
    {
        title: "EEG-to-Text Translation",
        img: eegThumbnail,
        link: "https://github.com/ManushKalwari/BCI_eeg-text",
        desc: "Decoded raw EEG into coherent text using CLIP-BART fusion"
    },
    {
        title: "Unsupervised Image Classification",
        img: jepaThumbnail,
        link: "https://github.com/ManushKalwari/JEPA-Project",
        desc: "Image classification without labels using Joint-Embedding Pretrained Architecture (JEPA)"
    },
    {
        title: "Aneurysm Detection in Brain",
        img: aneurysmThumbnail,
        link: "https://github.com/ecbme6040/e6691_2025spring_Project_ABAD_kb3343_mmk2266",
        desc: "3D U-Net pipeline for TOF-MRA scans with anatomical priors"
    },
    {
        title: "Transmission Line Faults Detection",
        img: transmissionThumbnail,
        link: "https://www.semanticscholar.org/paper/An-Error-Tracking-Approach-for-Transmission-Lines-Kalwari-Nirmal/89644c092dddff4a85ff286fd131bc6db14e26d4",
        desc: "RESEARCH - Efficient Classification of overhead transmission line Faults"
    },
    {
        title: "CountingCals",
        img: countingcalThumbnail,
        link: "https://github.com/ManushKalwari/CountingCals",
        desc: "Estimate food calories from multi-angle photos"
    },
    {
        title: "Custom LZW Compression",
        img: lzwThumbnail,
        link: "https://github.com/ManushKalwari/LZW-compression",
        desc: "Custom LZW algorithm for efficient text compression"
    },
    {
        title: "FrugalFox",
        img: expenseThumbnail,
        link: "https://play.google.com/store/apps/details?id=com.expenseTracker.frugalfox&hl=en_US",
        desc: "Smart expense tracker Android App"
    },
    {
        title: "Svara Shodh",
        img: swaraThumbnail,
        link: "https://github.com/ManushKalwari/Svara-Shodh",
        desc: "Extract musical notes from songs using spectral processing"
    }
];


function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <h2>Projects</h2>
            <div className="portfolio-grid">
                {projects.map((proj, index) => (
                    <div className="portfolio-card" key={index}>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">
                            <img src={proj.img} alt={`${proj.title} Thumbnail`} />
                            <div className="overlay">
                                <div className="text">{proj.desc}</div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
