import React from 'react';
import countingcalThumbnail from './media/countingcalThumbnail.png';
import calciThumbnail from './media/calciThumbnail.png';
import dictThumbnail from './media/dictThumbnail.png';
import expenseThumbnail from './media/expenseThumbnail.png';
import swaraThumbnail from './media/swaraThumbnail.png';

function Portfolio() {


    return (
        <section className="portfolio" id="portfolio">
            <h2>Portfolio</h2>

            <h3>Apps</h3>
            <h4>Click on the icons to visit</h4>
            <div className="portfolio-item">
                <div className="portfolio-item-app">
                    <a href="https://play.google.com/store/apps/details?id=com.ProCalci.procalci&hl=en_US" target="_blank" rel="noopener noreferrer">
                        <img src={calciThumbnail} alt="Calculator App Thumbnail" />
                    </a>
                </div>
                <div className="portfolio-item-app">
                    <a href="https://lay.google.com/store/apps/details?id=com.dictionary.gresa&hl=en_US" target="_blank" rel="noopener noreferrer">
                        <img src={dictThumbnail} alt="Dictionary App Thumbnail" />
                    </a>
                </div>
                <div className="portfolio-item-app">
                    <a href="https://play.google.com/store/apps/details?id=com.expenseTracker.frugalfox&hl=en_US" target="_blank" rel="noopener noreferrer">
                        <img src={expenseThumbnail} alt="Expense Tracker App Thumbnail" />
                    </a>
                </div>
            </div>

            <h3>Projects</h3>
            <h4>Click on the icons to visit</h4>
            <div className="portfolio-item">
                <div className="portfolio-item-app">
                    <a href="https://github.com/ManushKalwari/CountingCals" target="_blank" rel="noopener noreferrer">
                        <img src={countingcalThumbnail} alt="Calories Estimation Thumbnail" />
                    </a>
                </div>
                <div className="portfolio-item-app">
                    <a href="https://github.com/ManushKalwari/Svara-Shodh" target="_blank" rel="noopener noreferrer">
                        <img src={swaraThumbnail} alt="Swara Shodh Thumbnail" />
                    </a>
                </div>
            </div>


        </section>
    );
}

export default Portfolio;