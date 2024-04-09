import React from "react";
import firstProfilePicture from '../../images/image-emily.jpg'
import secondProfilePicture from '../../images/image-thomas.jpg'
import thirdProfilePicture from '../../images/image-jennie.jpg'

import './testimonials.css'

const Testimonials = () => {
    return (
        <section className="client-testimonials">
            <h3>Client testimonials</h3>
            <div className="testimonials">
                <div>
                    <img src={firstProfilePicture} alt="client-illustration"></img>
                    <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines
                        were
                        always hit.</p>
                    <ul>
                        <li className="client-name">Emily R.</li>
                        <li className="clients-profession">Marketing Director</li>
                    </ul>
                </div>
                <div>
                    <img src={secondProfilePicture} alt="client-illustration"></img>
                    <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a
                        satisfying
                        and enjoyable experience.</p>
                    <ul>
                        <li className="client-name">Thomas S.</li>
                        <li className="clients-profession">Chief Operating Officer</li>
                    </ul>
                </div>
                <div>
                    <img src={thirdProfilePicture} alt="client-illustration"></img>
                    <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
                        recommended!</p>
                    <ul>
                        <li className="client-name">Jennie F.</li>
                        <li className="clients-profession">Business Owner</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Testimonials