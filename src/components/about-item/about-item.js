import React from "react";

const AboutItem = (prop) => {
    return (
        <div className="item">
            <h3>{prop.title}</h3>
            <p>{prop.description}</p>
            <a href={prop.href} className={`btn-learn-more-${prop.side}`}>Learn more</a>
        </div>
    )
}

export default AboutItem