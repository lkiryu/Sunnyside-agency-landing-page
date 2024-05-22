import React from "react";

import './servicesSection.css'

const servicesData = [
    {
        title: "Graphic design",
        description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
        side: "left",
    },
    {
        title: "Photography",
        description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        side: "right",
    },
]

const Services = () => {
    return (
        <section className="services" id="services">
            {
                servicesData.map((item, index) => {
                    return (
                        <div key={index} className={`service ${item.side}`}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Services