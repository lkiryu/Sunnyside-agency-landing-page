import React from "react";
import AboutItem from "../about-item/about-item";

import './aboutSection.css'

const About = () => {
    return (
        <section className="about" id="about">
            <AboutItem
                title="Transform your brand"
                description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                href="/"
                side="left"
            />
            <div className="image right"></div>
            <div className="image left"></div>
            <AboutItem
                title="Stand out to the right audience"
                description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                href="/"
                side="right"
            />
        </section>
    )
}

export default About