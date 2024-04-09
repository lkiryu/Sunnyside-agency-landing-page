import React from "react";

const About = () => {
    return(
        <section className="about" id="about">
            <div className="item">
                <h3>Transform your brand</h3>
                <p>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="/" className="btn-learn-more-right">Learn more</a>
            </div>
            <div className="image right"></div>
            <div className="image left"></div>
            <div className="item">
                <h3>Stand out to the right audience</h3>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and
                    copywriters, we’ll build and extend your brand in digital places.</p>
                <a href="/" className="btn-learn-more-left">Learn more</a>
            </div>
        </section>
    )
}

export default About