import antidea1 from "../assets/projects/antidea/antidea1.png"
import antidea2 from "../assets/projects/antidea/antidea2.png"
import antidea3 from "../assets/projects/antidea/antidea3.png"
import antidea4 from "../assets/projects/antidea/antidea4.png"
import antidea5 from "../assets/projects/antidea/antidea5.png"
import antidea_main from "../assets/projects/antidea/antidea_main.jpg"
import antidea_description from "../assets/projects/antidea/antidea_description.jpg"

import ijj1 from "../assets/projects/iron-jiu-jitsu/ijj1.png"
import ijj2 from "../assets/projects/iron-jiu-jitsu/ijj2.png"
import ijj3 from "../assets/projects/iron-jiu-jitsu/ijj3.png"
import ijj4 from "../assets/projects/iron-jiu-jitsu/ijj4.png"
import ijj5 from "../assets/projects/iron-jiu-jitsu/ijj5.png"
import ijj6 from "../assets/projects/iron-jiu-jitsu/ijj6.png"
import ijj_main from "../assets/projects/iron-jiu-jitsu/ijj_main.jpg"
import ijj_description from "../assets/projects/iron-jiu-jitsu/ijj_description.jpg"

import modi_main from "../assets/projects/modi/modi_main.jpg"
import modi_description from "../assets/projects/modi/modi_description.jpg"
// import modi1 from "../assets/projects/modi/modi1.png"
// import modi2 from "../assets/projects/modi/modi2.png"
// import modi3 from "../assets/projects/modi/modi3.png"
// import modi4 from "../assets/projects/modi/modi4.png"
// import modi5 from "../assets/projects/modi/modi5.png"
// import modi6 from "../assets/projects/modi/modi6.png"


export const projects = [
    {
        slug: "antidea",
        cover: antidea_main,
        descriptionImg: antidea_description,
        images: [antidea1, antidea2, antidea3, antidea4, antidea5],
        repoUrl: '',
        liveUrl: '',
        technologies: ["React", "Html", "Css", "Javascript"],
    },
    {
        slug: "iron-jiu-jitsu",
        cover: ijj_main,
        descriptionImg: ijj_description,
        images: [ijj1, ijj2, ijj3, ijj4, ijj5, ijj6],
        repoUrl: '',
        technologies: ["React", "Html", "Css", "TypeScript", "MongoDB", "Node.js", "Express"],
        furtherTechnologies: ["WhatsApp Message Automation"],
    },
    {
        slug: "modi",
        cover: modi_main,
        descriptionImg: modi_description,
        images: ["", "", "", "", "", ""],
        repoUrl: '',
        technologies: ["React", "Html", "Css", "Javascript"],
        furtherTechnologies: ["Google Text To Speech"],
    }
]