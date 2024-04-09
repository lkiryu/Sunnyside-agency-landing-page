import React from "react";
import milkbottles from '../../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../../images/desktop/image-gallery-orange.jpg'
import cone from '../../images/desktop/image-gallery-cone.jpg'
import sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="project">
                <img src={milkbottles} alt="milkbottles"></img>
            </div>
            <div className="project">
                <img src={orange} alt="orange"></img>
            </div>
            <div className="project">
                <img src={cone} alt="cone"></img>
            </div>
            <div className="project">
                <img src={sugarcubes} alt="sugarcubes"></img>
            </div>
        </section>
    )
}

export default Projects