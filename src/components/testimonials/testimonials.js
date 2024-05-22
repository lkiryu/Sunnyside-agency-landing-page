import React from "react";

import './testimonials.css'

const testimonialsData = [
    {
        src: "./images/image-emily.jpg",
        testimonial: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        profession: "Marketing Director",
    },
    {
        src: "./images/image-thomas.jpg",
        testimonial: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        profession: "Chief Operating Officer",
    },
    {
        src: "./images/image-jennie.jpg",
        testimonial: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        profession: "Business Owner",
    },
]

const Testimonials = () => {
    return (
        <section className="client-testimonials">
            <h3>Client testimonials</h3>
            <div className="testimonials">
                {
                    testimonialsData.map((item, index) => {
                        return (
                            <div key={index} className="testimonial">
                                <img src={item.src} alt="client-illustration"></img>
                                <p>{item.testimonial}</p>
                                <ul>
                                    <li className="client-name">{item.name}</li>
                                    <li className="clients-profession">{item.profession}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials