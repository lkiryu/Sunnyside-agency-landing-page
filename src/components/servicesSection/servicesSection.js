import React from "react";

import './servicesSection.css'

const Services = () => {
    return(
        <section className="services" id="services">
            <div className="service right">
                <h3>Graphic design</h3>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures
                    potential clients’ attention.</p>
            </div>
            <div className="service left">
                <h3>Photography</h3>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your
                    business image.</p>
            </div>
        </section>
    )
}

export default Services