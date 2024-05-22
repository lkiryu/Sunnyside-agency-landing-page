import React from "react";

import './projectsSection.css'

const projectsData = [
    {
        href: "/",
        src: "./images/image-gallery-milkbottles.jpg",
        alt: "milkbottles",
    },
    {
        href: "/",
        src: "./images/image-gallery-orange.jpg",
        alt: "orange",
    },
    {
        href: "/",
        src: "./images/image-gallery-cone.jpg",
        alt: "cone",
    },
    {
        href: "/",
        src: "./images/image-gallery-sugarcubes.jpg",
        alt: "sugarcubes",
    },
]

const Projects = () => {
    return (
        <section className="projects" id="projects">
            {
                projectsData.map((item, index)=>{
                    return(
                        <a key={index} className="project" href={item.href}>
                            <img src={item.src} alt={item.alt}></img>
                        </a>
                    )
                })
            }
        </section>
    )
}

export default Projects